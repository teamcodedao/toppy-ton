import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const font = localFont({
  src: './SVN-Cookies.ttf',
});

export const metadata: Metadata = {
  title: 'Toppy',
  description: 'Toppy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
