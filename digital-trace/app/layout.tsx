import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/Themecontext';
import { LangProvider } from '@/contexts/Langcontext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Yurii Avramets — Full-Stack Developer',
  description: 'Portfolio of Yurii Avramets, Full-Stack Developer from Kyiv, Ukraine.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LangProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}