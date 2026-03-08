import { prisma } from "@repo/db";

export default async function Page() {
  const users = await prisma.member.findMany();

  return (
    <div>
      <h1>Users from Render DB</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}