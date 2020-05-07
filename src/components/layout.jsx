import React from 'react';
import Seo from './seo';
import Sidebar from './sidebar';

const Layout = ({ children }) => (
  <>
    <Seo />
    <div className="layout flex flex-wrap" role="main">
      <Sidebar />
      <main className="lg:w-4/6 ml-auto">
        <section className="p-5 lg:px-48 lg:pt-20 text-right">
          {/* To Do: look into  @gatsby-contrib/gatsby-plugin-elasticlunr-search  for site search */}
          {/* <Search /> */}
        </section>
        <section className="p-5 lg:px-30 xxl:px-48 flex flex-wrap">
          {children}
        </section>
      </main>
    </div>
  </>
);

export default Layout;
