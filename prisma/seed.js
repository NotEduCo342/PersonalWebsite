const { PrismaClient } = require('@prisma/client');
const { projects } = require('../src/lib/projectData.js');

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const p of projects) {
    const project = await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        title: p.title,
        slug: p.slug,
        description: p.description,
        imageUrl: p.imageUrl,
        tags: p.tags,
      },
    });
    console.log(`Created project with id: ${project.id}`);
  }
  // Seed credentials admin user if env ADMIN_EMAIL + ADMIN_PASSWORD provided
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminEmail && adminPassword) {
    const bcrypt = require('bcryptjs');
    const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!existing) {
      const hash = await bcrypt.hash(adminPassword, 10);
      const userCount = await prisma.user.count({ where: { role: 'ADMIN' } });
      const role = userCount === 0 ? 'ADMIN' : 'USER';
      await prisma.user.create({ data: { email: adminEmail, passwordHash: hash, role } });
      console.log(`Created ${role} credentials user: ${adminEmail}`);
    } else {
      console.log(`Admin seed skipped: user already exists.`);
    }
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
