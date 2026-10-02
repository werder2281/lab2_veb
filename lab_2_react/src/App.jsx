import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  const skills = ['Python', 'C#', 'Git', 'HTML', 'React'];

  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills items={skills} />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;