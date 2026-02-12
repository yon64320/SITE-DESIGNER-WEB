/**
 * Deploy Webhook Server
 * Tourne sur le host VPS via PM2 et écoute les requêtes de déploiement de n8n.
 * Port: 9090 (local uniquement)
 */

const http = require("http");
const { execSync } = require("child_process");

const PORT = 9090;
const SECRET = "kodo-deploy-2026";
const PROJECT_DIR = "/var/www/site-designer";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/deploy") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      // Vérifier le secret
      let payload;
      try {
        payload = JSON.parse(body);
      } catch {
        payload = {};
      }

      if (payload.secret !== SECRET) {
        res.writeHead(403, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Forbidden" }));
        return;
      }

      console.log(`[${new Date().toISOString()}] Deploy triggered`);

      try {
        const steps = [
          { name: "git pull", cmd: `cd ${PROJECT_DIR} && git pull origin main 2>&1` },
          { name: "npm install", cmd: `cd ${PROJECT_DIR} && npm install 2>&1` },
          { name: "npm build", cmd: `cd ${PROJECT_DIR} && npm run build 2>&1` },
          { name: "pm2 restart", cmd: "pm2 restart site-designer 2>&1" },
        ];

        const results = [];
        for (const step of steps) {
          console.log(`  -> ${step.name}...`);
          const output = execSync(step.cmd, { timeout: 300000, encoding: "utf-8" });
          results.push({ step: step.name, success: true, output: output.slice(-500) });
          console.log(`  -> ${step.name} OK`);
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, results }));
        console.log(`[${new Date().toISOString()}] Deploy completed successfully`);
      } catch (err) {
        console.error(`[${new Date().toISOString()}] Deploy FAILED:`, err.message);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
  } else if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Deploy server listening on 127.0.0.1:${PORT}`);
});
