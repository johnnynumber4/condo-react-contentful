import { Provider } from './context/Context';
import { Route, Routes } from "react-router-dom";
// Components
import Grocery from './components/Grocery/Grocery';
import Navbar from './components/Navbar/Navbar';
import HomeGuide from './components/HomeGuide/HomeGuide';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import Suggest from './components/Suggest/Suggest';
import Booking from './components/Booking/Booking';

function App() {

  return (
    <Provider>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/home-guide" element={<HomeGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/suggestions" element={<Suggest />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
