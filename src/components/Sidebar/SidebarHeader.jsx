import React from 'react';

const SidebarHeader = ({ meta }) => (
  <header className="px-10 md:px-40 lg:px-20 xxl:px-40 flex-auto">
    <h1 className="text-white text-4xl font-semibold uppercase py-5">
      {meta.title}
    </h1>
    <p className="text-2xl pt-12">{meta.description}</p>
  </header>
);

export default SidebarHeader;
