import React from 'react';
import useSiteNav from '../../hooks/useSiteNav';

const Navigation = () => {
  const { siteNav, basePath } = useSiteNav();
  return (
    <nav className="text-center font-semibold py-5 flex-1">
      <ul>
        {siteNav.map((navElement) => (
          <li className="inline-block p-4" key={navElement.text}>
            <a href={`${basePath}${navElement.path}`}>{navElement.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
