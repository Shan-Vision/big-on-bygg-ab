import { Route, Routes } from 'react-router-dom';
// import { Home } from './views/Home/Home';
import Portfolio from './views/Portfolio';
import Contacts from './views/Contacts';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('./views/Home'));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
