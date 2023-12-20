import './App.scss';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

const App = () => {
  return <div>
    <section id='Home'>
      <NavBar />
      <Home />
    </section>
    <section>Parallax</section>
    <section id='Skills'>Skills</section>
    <section>Parallax</section>
    <section id='Projects'>Projects</section>
    <section>Parralax</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
