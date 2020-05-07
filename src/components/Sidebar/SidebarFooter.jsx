import React from 'react';
import IconLoader from '../IconLoader';

const SidebarFooter = ({ meta }) => (
  <footer className="flex-1 flex flex-wrap justify-center text-secondaryText">
    <ul className="text-center py-8 self-end">
      {meta.social.map(({ site, url }) => (
        <li className="inline-block px-4" key={url}>
          <a href={url} className="link--social fill-current">
            <IconLoader name={site} />
            {site}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

export default SidebarFooter;
