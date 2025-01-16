import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingComponent from './components/common/loading-component';

import PublicRoute from './routes/public-routes';
import Login from './pages/login';
import PrivateRoute from './routes/private-routes';
import MyImages from './pages/my-images';
import ImageDetails from './pages/image-details';

const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          {/* Private routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-images"
            element={
              <PrivateRoute>
                <MyImages />
              </PrivateRoute>
            }
          />
          <Route
            path="/images/:id"
            element={
              <PrivateRoute>
                <ImageDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
