import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Certificate from './components/Certificate.jsx';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Certificate/>
        <Contact />
      </main>
    </>
  );
}

export default App;
