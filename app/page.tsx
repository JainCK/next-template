import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Welcome to My Next.js Template</h1>
        <p className="text-lg">This is a reusable template with Prisma, PostgreSQL, and NextAuth.</p>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>© 2023 My Next.js Template</p>
      </footer>
    </div>
  );
}