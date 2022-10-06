import Carousel from './components/Carousel/Carousel'
import About from './components/About/About'
import { Provider } from './context/Context'
import Grocery from './components/Grocery/Grocery';

function App() {

  return (
    <Provider>
      <div className="App">
        <Carousel />
        <About />
        <Grocery />
      </div>
    </Provider>
  );
}

export default App;
