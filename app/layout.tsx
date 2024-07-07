import type {Metadata} from 'next';
import localFont from 'next/font/local';
import clsx from 'clsx';
import './globals.css';

const font = localFont({
  src: './SVN-Cookies.ttf',
});

const guerrillaFont = localFont({
  src: './SVN-Guerrilla.ttf',
  variable: '--guerrilla-font',
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
      <body className={clsx(font.className, guerrillaFont.variable)}>
        {children}
      </body>
    </html>
  );
}
