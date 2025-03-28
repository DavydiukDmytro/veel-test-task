import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Veel',
  description: 'Test task for Veel',
  icons: {
    icon: 'https://veel-core.com/logo.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
