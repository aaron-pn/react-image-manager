import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRoute from './routes/public-routes';
import PrivateRoute from './routes/private-routes';
import Loading from './components/common/loading';

const HomePage = lazy(() => import('./pages/home'));
const ImagesDetailsPage = lazy(() => import('./pages/image-details'));
const LoginPage = lazy(() => import('./pages/login'));
const MyImagesPage = lazy(() => import('./pages/my-images'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          {/* Private routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-images"
            element={
              <PrivateRoute>
                <MyImagesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/images/:id"
            element={
              <PrivateRoute>
                <ImagesDetailsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
