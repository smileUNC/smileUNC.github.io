import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/common";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Software from "./components/pages/Software";
import Data from "./components/pages/Data";
import Publications from "./components/pages/Publications";
import Team from "./components/pages/Team";
import Updates from "./components/pages/Updates";
import Contact from "./components/pages/Contact";
import Hiring from "./components/pages/Hiring";
import Blog from "./components/pages/Blog";
import NotFound from "./components/pages/NotFound";
import OfflineBanner from "./components/OfflineBanner";
import { OFFLINE } from "./utils/offline";

// Top-level routes. Project sub-pages are registered in pages/Projects.js.
function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {OFFLINE && <OfflineBanner />}
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/software" element={<Software />} />
          <Route path="/data" element={<Data />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
