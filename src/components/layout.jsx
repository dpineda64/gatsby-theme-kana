import React from 'react';
import Seo from './seo';

const Layout = ({ children }) => (
  <>
    <Seo />
    <div className="layout flex flex-wrap" role="main">
      <div
        className="h-auto lg:h-full lg:w-2/6 bg-secondary text-secondaryText flex flex-col lg:fixed"
        role="contentinfo"
      ></div>
      <main className="lg:w-4/6 ml-auto">
        <section className="p-5 lg:px-48 lg:pt-20 text-right">
          <div className="search" role="search">
            search
          </div>
        </section>
        <section className="p-5 lg:px-30 xxl:px-48 flex flex-wrap">
          {children}
        </section>
      </main>
    </div>
  </>
);

export default Layout;
