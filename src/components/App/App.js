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
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { LoginContext } from '../../context/LoginContext';
import { useCallback, useEffect, useState } from 'react';
import { createMovies, deleteMovie, getSavedMovies, getUser, login, register, updateUser } from '../../utils/mainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getMovies } from '../../utils/moviesApi';
import { NOT_MOVIES_SEARCH_MESSAGE, SERVER_ERROR_MESSAGE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import useFilterMovies from '../../hook/useFilterMovies';

const App = ({history}) => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)
  const {handleOpenPopup, handleClosePopup, handleCLoseOverlay, isOpen, errorMessage, isError} = useOpenPopup();
  const [currentUser, setCurrentUser] = useState({_id: '', name: '', email: ''});
  const [moviesFromServer, setMoviesFromServer] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLoaderPage, setIsLoaderPage] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [movieErrorMessage, setMovieErrorMessage] = useState('');
  const [errorMessageApi, setErrorMessageApi] = useState('');
  const {handleSearch} = useFilterMovies();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      handleGetMovies();
      handleGetUser(token);
    } else {
      setIsLoaderPage(false);
    }
  }, [])

  useEffect(() => {
    if(loggedIn) {
      handleGetSavedMovies();
      handleGetUser(localStorage.getItem('jwt'))
    } else {
      setSavedMovies([]);
    }
  }, [loggedIn])

  useEffect(() => {
    handleSearchMovies(localStorage.getItem('moviesName'));
  }, [])

  const handleRegister = async ({name, email, password}) => {
    try {
      setErrorMessageApi('');
      const res = await register({name, email, password});
      handleLogin({email, password});
    } catch (error) {
      if (error.statusCode === 400) {
        setErrorMessageApi('При регистрации пользователя произошла ошибка.')
      } else if (error.statusCode === 409) {
        setErrorMessageApi(error.message)
      } else {
        setErrorMessageApi(error.message)
      }
    } finally {
      setTimeout(() => {
        setErrorMessageApi('');
      }, 3000)
    }
  }

  const handleLogin = async ({email, password}) => {
    try {
      setErrorMessageApi('');
      const res = await login({email, password});
      localStorage.setItem('jwt', res.token);
      const user = await getUser(res.token);
      setCurrentUser({_id: user._id, name: user.name, email: user.email});
      setLoggedIn(true);
      history.push('/movies');
      handleGetSavedMovies();
    } catch (error) {
      setLoggedIn(false);
      setErrorMessageApi(error.message);
      console.log(error)
    }
  }

  const handleGetUser = async (token) => {
    try {
      const user = await getUser(token);
      if(user.name) {
        setLoggedIn(true);
        setCurrentUser({_id: user._id, name: user.name, email: user.email});
        handleGetSavedMovies();
        setIsLoaderPage(false);
      } else {
        localStorage.removeItem('jwt');
        localStorage.removeItem('moviesName');
      }
    } catch (error) {
      localStorage.removeItem('moviesName');
      setIsLoaderPage(false);
      console.log(error);
    }
  }

  const handleUpdateUser = async ({name, email}) => {
    try {
      setErrorMessageApi('');
      const user = await updateUser({name, email});
      setCurrentUser({_id: user._id, name: user.name, email: user.email});
      handleOpenPopup("Данные успешно обновлены", false)
    } catch (error) {
      error.statusCode === 409 ? setErrorMessageApi(error.message) : setErrorMessageApi("При обновлении профиля произошла ошибка.");
    } finally {
      setTimeout(() => {
        setErrorMessageApi('');
      }, 3000)
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesName');
    setLoggedIn(false);
    setFilterMovies([]);
    setSavedMovies([]);
    setCurrentUser({_id: '', name: '', email: ''});
  }

  const handleGetMovies  = async () => {
    try {
      const moviesApi = await getMovies();
        setMoviesFromServer(moviesApi); 
    } catch (err) {
      setMovieErrorMessage(SERVER_ERROR_MESSAGE);
    } finally {
      setIsLoader(false);
    }
  }

  const handleSearchMovies = (movieName) => {
    setMovieErrorMessage('')
    setIsLoader(true);
    handleGetMovies();
    const list = handleSearch(moviesFromServer, movieName);
    list.length === 0 ? setMovieErrorMessage(NOT_MOVIES_SEARCH_MESSAGE) : setMovieErrorMessage('');
    setFilterMovies(list);
  }

  const handleGetSavedMovies = async () => {
    const data = await getSavedMovies()
    setSavedMovies(data);
  }

  const handleCreateMovie = async (movie) => {
    const data = await createMovies(movie);
    handleGetSavedMovies();
  }

  const handleDeleteMovie = async (movie) => {
    const data = await deleteMovie(movie);
    setSavedMovies((movies) => {
      return movies.filter(item => item !== movie);
    })
  }

    return (isLoaderPage ? <Preloader /> :
      (<CurrentUserContext.Provider value={currentUser}>
        <LoginContext.Provider value={loggedIn}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              onSearch={handleSearchMovies}
              filterMovies={filterMovies}
              savedMovies={savedMovies}
              isLoader={isLoader}
              onError={handleOpenPopup}
              movieErrorMessage={movieErrorMessage}
              onCreateMovie={handleCreateMovie}
              onDeleteMovie={handleDeleteMovie}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              savedMovies={savedMovies}
              onDeleteMovie={handleDeleteMovie}
              filterSavedMovies={filterSavedMovies}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              onSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              errorMessageApi={errorMessageApi}
            />
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
          <ErrorPopup isOpen={isOpen} onClose={handleClosePopup} errorMessage={errorMessage} onCLoseOverlay={handleCLoseOverlay} isError={isError}/>
        </LoginContext.Provider>
      </CurrentUserContext.Provider>)
    )
  }
  
  export default withRouter(App);