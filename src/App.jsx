import { lazy, Suspense, useState } from 'react';
import Footer from './Components/Footer';

const Home = lazy(() => import('./Pages/World/Home'));
const Sport = lazy(() => import('./Pages/Sports/Home'));
const Food = lazy(() => import('./Pages/Food/Home'));
const Movies = lazy(() => import('./Pages/Movies/Home'));
const Technology = lazy(() => import('./Pages/Technology/Home'));

const pages = [
  {
    label: 'World',
    component: Home,
  },
  {
    label: 'Sports',
    component: Sport,
  },
  {
    label: 'Food',
    component: Food,
  },
  {
    label: 'Technology',
    component: Technology,
  },
  {
    label: 'Movies',
    component: Movies,
  },
];

const App = () => {
  const [activePage, setActivePage] = useState(pages[0]);
  const Page = activePage.component;

  return (
    <>
      <header className="flex justify-around text-2xl py-4 px-6">
        <a
          href="https://developer.nytimes.com."
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Images/API-Icon.png" alt="API Logo" />
        </a>
        <nav>
          <ul className="flex gap-6 text-white">
            {pages.map((page) => (
              <li key={page.label}>
                <button
                  type="button"
                  onClick={() => setActivePage(page)}
                  className={`${
                    activePage.label === page.label ? 'font-bold' : ''
                  }`}
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="text-white">Favorites</button>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
