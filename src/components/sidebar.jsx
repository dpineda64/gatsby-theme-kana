import React from 'react';
import IconLoader from './IconLoader';
import useSiteMetadata from '../hooks/use-site-metadata';
import useSiteNav from '../hooks/use-site-nav';

const Sidebar = () => {
  const siteMeta = useSiteMetadata();
  const { siteNav, basePath } = useSiteNav();
  return (
    <div
      className="h-auto pb-10 lg:h-full lg:w-2/6 bg-secondary text-secondaryText flex flex-col lg:fixed"
      role="contentinfo"
    >
      <nav className="text-center font-semibold py-5 flex-1">
        <ul>
          {siteNav.map((navElement) => (
            <li className="inline-block p-4" key={navElement.text}>
              <a href={`${basePath}${navElement.path}`}>{navElement.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <header className="px-10 md:px-40 lg:px-20 xxl:px-40 flex-auto">
        <h1 className="text-white text-4xl font-semibold uppercase py-5">
          {siteMeta.title}
        </h1>
        <p className="text-2xl pt-12">{siteMeta.description}</p>
      </header>
      <footer className="flex-1 flex flex-wrap justify-center text-secondaryText">
        <ul className="text-center py-8 self-end">
          {siteMeta.social.map(({ site, url }) => (
            <li className="inline-block px-4" key={url}>
              <a href={url} className="link--social fill-current">
                <IconLoader name={site} />
                {site}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Sidebar;
