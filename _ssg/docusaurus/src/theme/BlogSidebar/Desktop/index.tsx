import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

import {useHideableNavbar} from '@docusaurus/theme-common/internal';

export default function BlogSidebarDesktop({sidebar}: Props): JSX.Element {
  // Hide the sidebar when scrolling down
  const hideOnScroll = true;
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  return (
    <aside className="col col--3">
      <nav
        ref={navbarRef}
        className={clsx(
          styles.sidebar,
          hideOnScroll && [
            styles.navbarHideable,
            !isNavbarVisible && styles.navbarHidden,
          ],
          'thin-scrollbar',
        )}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
