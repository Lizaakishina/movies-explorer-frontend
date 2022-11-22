import Header from '../Header/Header';
import Promo from './Promo/Promo';

const Main = () => {
    return (
      <>
        <Header logIn={false}/>
        <main>
          <Promo />
        </main>
      </>
    )
  }
  
  export default Main;