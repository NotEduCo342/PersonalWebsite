#!/bin/bash
# A simple script to automate deployment to the VPS.

# Exit immediately if a command exits with a non-zero status.
set -e

echo "🚀 Starting deployment..."

# 1. Pull the latest code from the main branch.
echo "→ Pulling latest code from GitHub..."
git pull origin main
echo "✅ Code updated."

# 2. Install dependencies using pnpm.
echo "→ Installing dependencies..."
pnpm install
echo "✅ Dependencies installed."

# 3. Build the production version of the app.
echo "→ Building the application..."
pnpm build
echo "✅ Production build completed."

# 4. Reload the application using PM2 for zero-downtime.
# IMPORTANT: Replace 'personalwebsite' with your actual PM2 app name.
echo "→ Reloading application with PM2..."
pm2 reload personalwebsite
echo "✅ Application reloaded."

echo "🎉 Deployment finished successfully!"
