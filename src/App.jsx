import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import CamperDetails from './pages/CamperDetails/CamperDetails';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CamperDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// import './App.css';

// function App() {
//   return (
//     <>
//       <h1>TravelTrucks</h1>
//       <ul>
//         <li>Home</li>
//         <li>Catalog</li>
//       </ul>
//       <h2>Campers of your dreams</h2>
//       <p>You can find everything you want in our catalog</p>
//       <button>View Now</button>
//     </>
//   );
// }

// export default App;
