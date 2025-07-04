
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-[family-name:var(--font-roboto)]">
          Coming Soon
        </h1>
        <p className="text-lg text-foreground/80 font-[family-name:var(--font-roboto-mono)]">
          Something exciting is in the works. Stay tuned!
        </p>
      </main>
    </div>
  );
}
