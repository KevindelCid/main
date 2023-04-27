
import '@/styles/global.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className='bg-slate-700'>{children}</body>
      </html>
    );
  }