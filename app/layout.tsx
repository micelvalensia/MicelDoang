import "./globals.css";
import ClientThemeProvider from "./_components/ThemeProvider";
import BottomBar from "./_components/BottomBar";
import PagesLayout from "./(pages)/layout";
import { PageTransitionProvider } from "./_context/PageTransitionContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Micel Doang</title>
        <meta name="description" content="Web porto Micel doang" />
        <meta name="keywords" content="micel, website, SEO, nextjs, web development" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Micel Doang" />
        <meta property="og:description" content="micel, website, SEO, nextjs, web development" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micel Doang" />
        <meta name="twitter:description" content="micel, website, SEO, nextjs, web development" />
      </head>
      <body>
        <ClientThemeProvider>
          <PageTransitionProvider>
            <PagesLayout>
              {children}
            </PagesLayout>
            <BottomBar />
          </PageTransitionProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
