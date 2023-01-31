import React, { FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from './pages/Auth/Auth';
import { CreateEmployee } from './pages/CreateEmployee/CreateEmployee';
import { Employees } from './pages/Employees/Employees';
import { Layout } from './hoc/Layout/Layout';
import { Profile } from './pages/Profile/Profile';
import { SignInAndUp } from './pages/SignInAndUp/SignInAndUp';
import { SignUp } from './pages/SignUp/SignUp';
import { UpdateEmployee } from './pages/UpdateEmployee/UpdateEmployee';
import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';
import { Projects } from './pages/Projects/Projects';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { CVsPage } from './pages/CVsPage/CVsPage';
import { CVs } from './pages/CVs/CVs';

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
    <>
      <Route path="/employees" element={<EmployeesPage />}>
        <Route index element={<Employees />} />
        <Route path=":id/profile" element={<Profile />} />
        <Route path=":id" element={<UpdateEmployee />} />
        <Route path="createEmployee" element={<CreateEmployee />} />
      </Route>
      <Route path="/projects" element={<ProjectsPage />}>
        <Route index element={<Projects />} />
      </Route>
      <Route path="/cvs" element={<CVsPage />}>
        <Route index element={<CVs />} />
      </Route>
    </>
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
      <Layout
        login={isLoggedIn}
        auth={(isAuth: boolean) => {
          setAuth(isAuth);
        }}
      >
        <Routes>
          {isLoggedIn ? protectedRoutes : unProtectedRoutes}
          <Route path="*" element={<Navigate to={link} replace />} />
        </Routes>
      </Layout>
    </div>
  );
};
