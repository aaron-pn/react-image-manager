import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingComponent from './components/common/loadingComponent';
import { Theme } from '@radix-ui/themes';
import PublicRoute from './routes/PublicRoutes';
import Login from './pages/login';
import PrivateRoute from './routes/PrivateRoutes';

const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <BrowserRouter>
      <Theme appearance="dark">
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
          </Routes>
        </Suspense>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
