import React, { FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from './containers/Auth/Auth';
import { CreateEmployee } from './containers/CreateEmployee/CreateEmployee';
import { Employees } from './containers/Employees/Employees';
import { MainPage } from './containers/MainPage/MainPage';
import { Profile } from './containers/Profile/Profile';
import { SignInAndUp } from './containers/SignInAndUp/SignInAndUp';
import { SignUp } from './containers/SignUp/SignUp';
import { UpdateEmployee } from './containers/UpdateEmployee/UpdateEmployee';

export const App: FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(
    () => !!localStorage.getItem('token') || false
  );
  let link = isLoggedIn ? '/employees' : '/login';

  useEffect(() => {
    link = isLoggedIn ? '/employees' : '/login';
  }, [isLoggedIn]);

  const setAuth = (auth: boolean): void => {
    setLoggedIn(auth);
  };

  const protectedRoutes = (
    <Route
      path="/employees"
      element={
        <MainPage
          auth={(isAuth: boolean) => {
            setAuth(isAuth);
          }}
        />
      }
    >
      <Route index element={<Employees />} />
      <Route path=":id/profile" element={<Profile />} />
      <Route path=":id" element={<UpdateEmployee />} />
      <Route path="createEmployee" element={<CreateEmployee />} />
    </Route>
  );
  const unProtectedRoutes = (
    <>
      <Route path="/login" element={<SignInAndUp />}>
        <Route
          index
          element={
            <Auth
              auth={(isAuth: boolean) => {
                setAuth(isAuth);
              }}
            />
          }
        />
      </Route>
      <Route path="/signup" element={<SignInAndUp />}>
        <Route
          index
          element={
            <SignUp
              auth={(isAuth: boolean) => {
                setAuth(isAuth);
              }}
            />
          }
        />
      </Route>
    </>
  );

  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? protectedRoutes : unProtectedRoutes}
        <Route path="*" element={<Navigate to={link} replace />} />
      </Routes>
    </div>
  );
};
