# Actions Lab Runner

Executes GitHub Actions workflows in isolated environments.

## Development

```bash
pnpm install
pnpm dev
Deployment
Deploy to Fly.io:
bashfly deploy
API Endpoints

POST /run - Execute a workflow

Body: { workflow: string, secrets?: Record<string, string> }
Response: Server-sent events stream
