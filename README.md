# Actions Lab 🧪

Test GitHub Actions workflows without pushing commits!

## 🎯 Problem

Every developer knows this pain:
git commit -m "fix yml"
git commit -m "fix yml again"
git commit -m "please work"
git commit -m "final fix"
git commit -m "real final fix"

## ✨ Solution

Actions Lab lets you test your GitHub Actions workflows instantly in the browser - no more test commits!

## 🚀 Features

- 🔥 **Zero Setup** - Just paste your workflow and run
- 👀 **GitHub-like UI** - Familiar interface, zero learning curve
- ⚡ **Real-time Logs** - See results instantly
- 🔒 **Secure** - Isolated execution environment
- 💸 **Free** - No credit card required

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Editor**: Monaco Editor (VS Code editor)
- **Backend**: Node.js runner on Fly.io
- **Deployment**: Vercel (frontend) + Fly.io (runner)

## 📁 Project Structure
actions-lab/
├── frontend/          # Next.js app (Vercel)
├── runner/           # Workflow runner (Fly.io)
└── pnpm-workspace.yaml

## 🏃‍♂️ Development

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/actions-lab.git
cd actions-lab

# Install dependencies
pnpm install

# Run development servers
pnpm dev
🌐 Deployment
Frontend (Vercel)
bashcd frontend
vercel
Runner (Fly.io)
bashcd runner
fly deploy
🤝 Contributing
Contributions are welcome! Feel free to:

Report bugs
Suggest new features
Submit pull requests

📄 License
MIT

Made with ❤️ by developers who are tired of test commits
