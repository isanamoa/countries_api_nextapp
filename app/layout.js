import '@/styles/globals.css';
import Head from './head';
import Header from './header/page';
import Footer from './footer/page';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head title='Countries API App' icons='./favicon.ico'/>
      <body className='bg-gray-100'>
        <div className='relative bg-gray-100 min-h-screen'>
          <Header />
          <main className="static mt-24 w-full px-5 md:px-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
