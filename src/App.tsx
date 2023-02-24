import React, { FC, useEffect, useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import { Auth } from './pages/Auth/Auth';
import { CreateEmployee } from './pages/CreateEmployee/CreateEmployee';
import { Employees } from './pages/Employees/Employees';
import { Layout } from './components/Layout/Layout';
import { Profile } from './pages/Profile/Profile';
import { SignUp } from './pages/SignUp/SignUp';
import { UpdateEmployee } from './pages/UpdateEmployee/UpdateEmployee';
import { Projects } from './pages/Projects/Projects';
import { CVs } from './pages/CVs/CVs';
import { CvDetails } from './pages/CvDetails/CvDetails';
import { PATH } from './constants/paths';
import { CreateCV } from './pages/CreateCV/CreateCV';
import { Departments } from './pages/Departments/Departments';
import { Positions } from './pages/Positions/Positions';
import { Skills } from './pages/Skills/Skills';
import { Languages } from './pages/Languages/Languages';
import { USER_TOKEN } from './apollo/state';
import { CreateProject } from './pages/CreateProject/CreateProject';
import { ProjectDetailPage } from './pages/ProjectDetailPage/ProjectDetailPage';
import { ContentText } from './constants/text';
import { CreateDepartment } from './pages/CreateDepartment/CreateDepartment';
import { DepartmentDetail } from './pages/DepartmentDetail/DepartmentDetail';
import { PositionDetail } from './pages/PositionDetail/PositionDetail';
import { CreatePosition } from './pages/CreatePosition/CreatePosition';
import { CreateSkill } from './pages/CreateSkill/CreateSkill';
import { SkillDetail } from './pages/SkillDetail/SkillDetail';

const ProjectsPage = React.lazy(
  async () => await import('./pages/ProjectsPage/ProjectsPage')
);
const EmployeesPage = React.lazy(
  async () => await import('./pages/EmployeesPage/EmployeesPage')
);
const DepartmentsPage = React.lazy(
  async () => await import('./pages/DepartmentsPage/DepartmentsPage')
);
const PositionPage = React.lazy(
  async () => await import('./pages/PositionPage/PositionPage')
);
const SkillsPage = React.lazy(
  async () => await import('./pages/SkillsPage/SkillsPage')
);
const LanguagesPage = React.lazy(
  async () => await import('./pages/LanguagesPage/LanguagesPage')
);
const SignInAndUp = React.lazy(
  async () => await import('./pages/SignInAndUp/SignInAndUp')
);
const CVsPage = React.lazy(async () => await import('./pages/CVsPage/CVsPage'));

export const App: FC = () => {
  const token = useReactiveVar(USER_TOKEN);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(() => !!token);
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
      <Route
        path={PATH.employees}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <EmployeesPage />
          </React.Suspense>
        }
      >
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
        <Route
          path={PATH.createEmployeeAbs}
          element={
            <CreateEmployee
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route
        path={PATH.projects}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <ProjectsPage />
          </React.Suspense>
        }
      >
        <Route index element={<Projects />} />
        <Route
          path={PATH.createProject}
          element={
            <CreateProject
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.project}
          element={
            <ProjectDetailPage
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route
        path={PATH.cvs}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <CVsPage />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <CVs
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.cv}
          element={
            <CvDetails
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
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
      <Route
        path={PATH.departments}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <DepartmentsPage />
          </React.Suspense>
        }
      >
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
        <Route
          path={PATH.createDepartment}
          element={
            <CreateDepartment
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.department}
          element={
            <DepartmentDetail
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route
        path={PATH.positions}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <PositionPage />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <Positions
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.position}
          element={
            <PositionDetail
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.createPosition}
          element={
            <CreatePosition
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route
        path={PATH.skills}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <SkillsPage />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <Skills
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.skill}
          element={
            <SkillDetail
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
        <Route
          path={PATH.createSkill}
          element={
            <CreateSkill
              setError={(error: string) => {
                setErrorMessage(error);
              }}
            />
          }
        />
      </Route>
      <Route
        path={PATH.languages}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <LanguagesPage />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <Languages
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
      <Route
        path={PATH.login}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <SignInAndUp />
          </React.Suspense>
        }
      >
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
      <Route
        path={PATH.signUp}
        element={
          <React.Suspense fallback={ContentText.loading}>
            <SignInAndUp />
          </React.Suspense>
        }
      >
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
