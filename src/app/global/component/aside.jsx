import Link from 'next/link';
import { useState } from 'react';
import Global from './global'; // Import your Global component
import Contact from './contact'; // Import your Contact component
import Home from './home'; // Import your Home component

const Aside = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const handleClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a onClick={() => handleClick('home')}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/global">
              <a onClick={() => handleClick('global')}>Global</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={() => handleClick('contact')}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/seo">
              <a onClick={() => handleClick('seo')}>SEO</a>
            </Link>
          </li>
        </ul>
      </nav>

      {selectedPage === 'home' && <Home />}
      {selectedPage === 'global' && <Global />}
      {selectedPage === 'contact' && <Contact />}
      {/* Add similar conditions for other pages */}
    </aside>
  );
};

export default Aside;
