import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import SlugPage from "./pages/SlugPage";
import Notfound from "./pages/notfound";
import Layout from "./components/Layout";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<SlugPage />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
