This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More
## Auth Setup (Auth.js v5)

Environment variables to add to `.env.local`:

```
AUTH_SECRET= # generate with: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
# Optional credentials seed
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

Run migrations (after updating schema):

```
pnpm prisma migrate dev --name add_auth
```

Seed (optional admin credentials user):

```
pnpm seed
```

OAuth callback URLs to register:
- http://localhost:3000/api/auth/callback/github
- http://localhost:3000/api/auth/callback/google

Production variants use your deployed domain.

Role management:
- First user (any provider) is auto-promoted to ADMIN if none exists.
- Additional promotions can be done manually in Prisma Studio.


## Environment Setup

### 1. Clone and Install
```bash
git clone <your-repo>
cd personalwebsite
pnpm install
```

### 2. Database Setup (Docker)
```bash
# Copy Docker environment template
cp .env.docker.example .env

# Start PostgreSQL database
docker-compose up -d

# Setup database schema
pnpm prisma migrate dev
pnpm prisma generate
pnpm seed
```

### 3. Application Environment
```bash
# Copy application environment template
cp .env.example .env.local

# Edit .env.local with your actual values:
# - Generate AUTH_SECRET: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
# - Add your GitHub OAuth app credentials
# - Add your Google OAuth app credentials
```

### 4. OAuth Setup
- **GitHub**: Create OAuth app at https://github.com/settings/developers
- **Google**: Create OAuth app at https://console.cloud.google.com/

### 5. Run Development Server
```bash
pnpm dev
```

## Security Notes
- Never commit `.env.local` or `.env` files
- Regenerate all secrets for production
- Use different OAuth apps for development vs production

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
