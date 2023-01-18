import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from './containers/Auth/Auth';
import { MainPage } from './containers/MainPage/MainPage';
import { SignInAndUp } from './containers/SignInAndUp/SignInAndUp';
import { SignUp } from './containers/SignUp/SignUp';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem('email') || false
  );

  const protectedRoutes = (
    <Route path="/employees" element={<MainPage />}></Route>
  );
  const unProtectedRoutes = (
    <>
      <Route path="/login" element={<SignInAndUp />}>
        <Route index element={<Auth />} />
      </Route>
      <Route path="/signup" element={<SignInAndUp />}>
        <Route index element={<SignUp />} />
      </Route>
    </>
  );

  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? protectedRoutes : unProtectedRoutes}
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/employees" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};
