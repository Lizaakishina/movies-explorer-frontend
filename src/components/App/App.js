import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Switch, Route, withRouter } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import useOpenPopup from '../../hook/useOpenPopup';
import useGetMovie from '../../hook/useGetMovie';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { LoginContext } from '../../context/LoginContext';
import { useEffect, useState } from 'react';
import { getUser, login, register } from '../../utils/mainApi';

const App = ({history}) => {
  const [currentUser, setCurrentUser] = useState({name: '', email: ''})
  const [loggedIn, setLoggedIn] = useState(false)
  const {handleOpenPopup, handleClosePopup, handleCLoseOverlay, isOpen, errorMessage} = useOpenPopup();
  const {handleSearchMovie, movies, isLoader, movieErrorMessage} = useGetMovie();
  const [errorMessageApi, setErrorMessageApi] = useState('');

  useEffect(() => {
    handleGetUser();
  }, [])

  const handleRegister = async ({name, email, password}) => {
    try {
      setErrorMessageApi('');
      const res = await register({name, email, password});
      setCurrentUser({ name, email });
      handleLogin({email, password});
    } catch (error) {
      if (error.statusCode === 400) {
        setErrorMessageApi('При регистрации пользователя произошла ошибка.')
      } else if (error.statusCode === 409) {
        setErrorMessageApi(error.message)
      } else {
        setErrorMessageApi(error.message)
      }
    }
  }

  const handleLogin = async ({email, password}) => {
    try {
      setErrorMessageApi('');
      const res = await login({email, password});
      setLoggedIn(true);
      localStorage.setItem('jwt', res.token);
      history.push('/movies');
    } catch (error) {
      setLoggedIn(false);
      setErrorMessageApi(error.message);
      console.log(error)
    }
  }

  const handleGetUser = async () => {
    try {
      const user = await getUser();
      if(user.name) {
        setCurrentUser({name: user.name, email: user.email});
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        localStorage.removeItem('jwt');
      }
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <CurrentUserContext.Provider value={currentUser}>
        <LoginContext.Provider value={loggedIn}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <Movies
                onSearch={handleSearchMovie}
                movies={movies}
                isLoader={isLoader}
                onError={handleOpenPopup}
                movieErrorMessage={movieErrorMessage}
              />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signup">
              <Register onSubmit={handleRegister} errorMessageApi={errorMessageApi}/>
            </Route>
            <Route path="/signin">
              <Login onSubmit={handleLogin} errorMessageApi={errorMessageApi}/>
            </Route>
            <Route path="*">
              <PageNotFound />
           </Route>
          </Switch>
          <ErrorPopup isOpen={isOpen} onClose={handleClosePopup} errorMessage={errorMessage} onCLoseOverlay={handleCLoseOverlay}/>
        </LoginContext.Provider>
      </CurrentUserContext.Provider>
    )
  }
  
  export default withRouter(App);