import Home from "./pages/Home";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Notfound from "./pages/notfound";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
