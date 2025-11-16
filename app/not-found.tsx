export default function NotFoundPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-background text-foreground px-6 text-center transition-colors">
      <div className="max-w-[95vw] md:max-w-md">
        <h1 className="text-8xl font-bold tracking-tighter mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Halaman tidak ditemukan</h2>
        <p className="text-muted-foreground mb-8">
          Sepertinya kamu nyasar. Lagi nyari apa tuch???
        </p>
      </div>
    </div>
  );
}
