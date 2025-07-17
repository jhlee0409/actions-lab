const http = require("http");
const { exec } = require("child_process");
const fs = require("fs").promises;

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
  // CORS 헤더
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/run") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { workflow } = JSON.parse(body);

        // 일단 간단한 테스트 응답
        res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
        });

        res.write(
          `data: ${JSON.stringify({
            type: "log",
            content: "Received workflow, preparing execution...\n",
          })}\n\n`
        );

        // 워크플로우 내용 파싱해서 간단히 실행
        res.write(
          `data: ${JSON.stringify({
            type: "log",
            content: `Workflow: ${workflow.split("\n")[0]}\n`,
          })}\n\n`
        );

        setTimeout(() => {
          res.write(
            `data: ${JSON.stringify({
              type: "complete",
              content: "Workflow execution completed!\n",
            })}\n\n`
          );
          res.end();
        }, 2000);
      } catch (error) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Runner server listening on port ${PORT}`);
});
