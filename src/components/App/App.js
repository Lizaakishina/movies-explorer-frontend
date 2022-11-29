import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Switch, Route } from 'react-router-dom';
import PopupWithError from '../ErrorPopup/ErrorPopup';
import useOpenPopup from '../../hook/useOpenMenu';
import useGetMovie from '../../hook/useGetMovie';

const App = () => {
  const {handleOpenPopup, handleClosePopup, handleCLoseOverlay, isOpen, errorMessage} = useOpenPopup();
  const {handleSearchMovie, isLoader, movies, movieErrorMessage} = useGetMovie();
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies onSearch={handleSearchMovie} isLoader={isLoader} movies={movies} onError={handleOpenPopup} movieErrorMessage={movieErrorMessage}/>
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
        <PopupWithError isOpen={isOpen} onClose={handleClosePopup} errorMessage={errorMessage} onCLoseOverlay={handleCLoseOverlay}/>
      </>
    )
  }
  
  export default App;