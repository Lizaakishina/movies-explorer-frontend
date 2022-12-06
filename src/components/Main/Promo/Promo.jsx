import './Promo.css';
import PageNav from './PageNav/PageNav';
import { memo } from 'react';

const Promo = () => {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <PageNav />
    </section>
  )
}

export default memo(Promo);