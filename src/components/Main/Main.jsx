import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';

const Main = () => {
    return (
      <>
        <Header logIn={false}/>
        <main>
          <Promo />
          <AboutProject />
        </main>
      </>
    )
  }
  
  export default Main;