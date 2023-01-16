import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Put Header or Footer Here
  return (
    <main className="container min-h-screen min-w-full">
      <Header />
      {/* Container */}
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
