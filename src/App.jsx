import Navbar from './components/Navbar.jsx'
import Anasayfa from './components/Anasayfa.jsx';
import Timeline from './components/Timeline.jsx';
import Hakkimda from './components/Hakkimda.jsx';
import Yeteneklerim from './components/Yeteneklerim.jsx';
import Projeler from './components/Projeler.jsx';
import Sertifikalar from './components/Sertifikalar.jsx';
import Iletisim from './components/Iletisim.jsx'
import Footer from './components/Footer.jsx';
export default function App() {

  return (
    <>
    <Navbar />
    <Anasayfa />
    <Timeline />
    <Hakkimda />
    <Yeteneklerim />
    <Projeler/>
    <Sertifikalar/>
    <Iletisim />
    <Footer/>
    </>
  );
}

