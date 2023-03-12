import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Components/Body/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="px-5">
        <Header />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
