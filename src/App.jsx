import Component from "./components/Component";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      {/* we can reuse components multiple times */}
      <div className="main">
        <Component />
        <Component />
      </div>
      <Footer />
    </div>
  );
}
