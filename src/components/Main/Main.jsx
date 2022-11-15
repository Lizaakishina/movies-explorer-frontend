import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';

const Main = () => {
  return(
    <main className="main__page">
      <Header />
      <Promo />
      <AboutProject />
    </main>
  );
}

export default Main;