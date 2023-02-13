import React, { FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from './pages/Auth/Auth';
import { CreateEmployee } from './pages/CreateEmployee/CreateEmployee';
import { Employees } from './pages/Employees/Employees';
import { Layout } from './components/Layout/Layout';
import { Profile } from './pages/Profile/Profile';
import { SignInAndUp } from './pages/SignInAndUp/SignInAndUp';
import { SignUp } from './pages/SignUp/SignUp';
import { UpdateEmployee } from './pages/UpdateEmployee/UpdateEmployee';
import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';
import { Projects } from './pages/Projects/Projects';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { CVsPage } from './pages/CVsPage/CVsPage';
import { CVs } from './pages/CVs/CVs';
import { CvDetails } from './pages/CvDetails/CvDetails';
import { PATH } from './constants/paths';
import { CreateCV } from './pages/CreateCV/CreateCV';
import { LSItems } from './constants/variables';
import { DepartmentsPage } from './pages/DepartmentsPage/DepartmentsPage';
import { Departments } from './pages/Departments/Departments';

export const App: FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    () => !!localStorage.getItem(LSItems.token)
  );
  const [errorMessage, setErrorMessage] = useState<string>('');
  let link = isLoggedIn ? PATH.employees : PATH.login;

  useEffect(() => {
    link = isLoggedIn ? PATH.employees : PATH.login;
  }, [isLoggedIn]);

  const setAuth = (auth: boolean): void => {
    setLoggedIn(auth);
  };

  const protectedRoutes = (
    <>
      <Route path={PATH.employees} element={<EmployeesPage />}>
        <Route
          index
          element={
            <Employees
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.userProfile}
          element={
            <Profile
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.employee}
          element={
            <UpdateEmployee
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route path={PATH.createEmployeeAbs} element={<CreateEmployee />} />
      </Route>
      <Route path={PATH.projects} element={<ProjectsPage />}>
        <Route index element={<Projects />} />
      </Route>
      <Route path={PATH.cvs} element={<CVsPage />}>
        <Route index element={<CVs />} />
        <Route path={PATH.cv} element={<CvDetails />} />
        <Route
          path={PATH.createCV}
          element={
            <CreateCV
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route path={PATH.departments} element={<DepartmentsPage />}>
        <Route
          index
          element={
            <Departments
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
    </>
  );
  const unProtectedRoutes = (
    <>
      <Route path={PATH.login} element={<SignInAndUp />}>
        <Route
          index
          element={
            <Auth
              auth={(isAuth: boolean) => {
                setAuth(isAuth);
              }}
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route path={PATH.signUp} element={<SignInAndUp />}>
        <Route
          index
          element={
            <SignUp
              auth={(isAuth: boolean) => {
                setAuth(isAuth);
              }}
              setError={(error: string) => {
                setErrorMessage(error);
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
        errorMessage={errorMessage}
        setErrorMessage={(message: string) => {
          setErrorMessage(message);
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
