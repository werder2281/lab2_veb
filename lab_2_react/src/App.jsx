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
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <main className="max-w-4xl mx-auto p-4 grid gap-6 md:grid-cols-2">
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