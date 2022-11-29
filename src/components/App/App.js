import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Switch, Route } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import useOpenPopup from '../../hook/useOpenPopup';
import useGetMovie from '../../hook/useGetMovie';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useState } from 'react';

const App = () => {
  const [currentUser] = useState({name: 'Елизавета', email: 'pochta@mail.ru'})
  const {handleOpenPopup, handleClosePopup, handleCLoseOverlay, isOpen, errorMessage} = useOpenPopup();
  const {handleSearchMovie, movies, isLoader, movieErrorMessage} = useGetMovie();
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies onSearch={handleSearchMovie} movies={movies} isLoader={isLoader} onError={handleOpenPopup} movieErrorMessage={movieErrorMessage}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <ErrorPopup isOpen={isOpen} onClose={handleClosePopup} errorMessage={errorMessage} onCLoseOverlay={handleCLoseOverlay}/>
      </CurrentUserContext.Provider>
    )
  }
  
  export default App;