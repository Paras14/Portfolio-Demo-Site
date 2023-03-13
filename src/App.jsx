import Topbar from './component/topbar/Topbar';
import Intro from './component/intro/Intro';
import Works from './component/works/Works';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import './app.scss'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className='sections'>
      <Intro />
      <Works />
      <Testimonials />
      <Contact />
    </div>
    </div>
  );
}

export default App;
