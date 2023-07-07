import Head from 'next/head';
import Header from './HeaderComp';
import Footer from './FooterComp';

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;