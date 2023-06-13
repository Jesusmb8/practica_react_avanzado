import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdvertPage from './components/adverts/AdvertPage';
import AdvertsPage from './components/adverts/AdvertsPage';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import LoginPage from './components/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Navigate to='/adverts' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/adverts'
          element={
            <ProtectedRoute>
              <AdvertsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/adverts/:advertId'
          element={
            <ProtectedRoute>
              <AdvertPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/adverts/new'
          element={
            <ProtectedRoute>
              <NewAdvertPage />
            </ProtectedRoute>
          }
        />
        <Route path='/404' element={<h4>404 | Not found</h4>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
