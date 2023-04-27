import '@/styles/global.css'
import Head from 'next/head';
import luzmayalogo from '../../assets/luzmaya/luzmayaico.svg'


export const metadata = {
    title: 'LuzMaya',
  };

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages



    
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <Head>
        <title>Luzmaya</title>
        <link rel="icon" href={luzmayalogo} />
        </Head>
        <body className='bg-slate-700'>{children}</body>
      </html>
    );
  }