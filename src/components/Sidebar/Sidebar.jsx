import React from 'react';
import Navigation from '../Navigation';
import Header from './SidebarHeader';
import Footer from './SidebarFooter';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Sidebar = () => {
  const siteMeta = useSiteMetadata();
  return (
    <div
      className="h-auto pb-10 lg:h-full lg:w-2/6 bg-secondary text-secondaryText flex flex-col lg:fixed"
      role="contentinfo"
    >
      <Navigation />
      <Header meta={siteMeta} />
      <Footer meta={siteMeta} />
    </div>
  );
};

export default Sidebar;
