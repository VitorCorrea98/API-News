import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data/data.json';

const Header = () => {
  return (
    <header className="flex justify-around text-2xl py-4 px-6">
      <Link to="/">Daily</Link>
      <nav>
        <ul className="flex gap-6">
          {data.header.map((category) => {
            return (
              <Link to={category.link} key={category.text}>
                <li>
                  <span>{category.text}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Link href="/">Favotires</Link>
    </header>
  );
};

export default Header;
