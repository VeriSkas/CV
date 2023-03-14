import React, { FC, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { Auth } from './pages/Auth/Auth';
import { CreateEmployee } from './pages/CreateEmployee/CreateEmployee';
import { Employees } from './pages/Employees/Employees';
import { Layout } from 'myComponents/Layout/Layout';
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
import { CreateDepartment } from './pages/CreateDepartment/CreateDepartment';
import { DepartmentDetail } from './pages/DepartmentDetail/DepartmentDetail';
import { PositionDetail } from './pages/PositionDetail/PositionDetail';
import { CreatePosition } from './pages/CreatePosition/CreatePosition';
import { CreateSkill } from './pages/CreateSkill/CreateSkill';
import { SkillDetail } from './pages/SkillDetail/SkillDetail';
import { CreateLanguage } from './pages/CreateLanguage/CreateLanguage';
import { LanguageDetail } from './pages/LanguageDetail/LanguageDetail';
import { LSItems } from './constants/variables';
import { SupportedLanguages } from './constants/constants';
import './i18n/i18n';

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
  const { t, i18n } = useTranslation();
  const language =
    localStorage.getItem(LSItems.pageLanguage) ?? SupportedLanguages.en;

  useEffect(() => {
    if (language) {
      void i18n.changeLanguage(language);
    }
  }, [i18n]);

  const protectedRoutes = (
    <>
      <Route
        path={PATH.employees}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <EmployeesPage />
          </React.Suspense>
        }
      >
        <Route index element={<Employees />} />
        <Route path={PATH.userProfile} element={<Profile />} />
        <Route path={PATH.employee} element={<UpdateEmployee />} />
        <Route path={PATH.createEmployeeAbs} element={<CreateEmployee />} />
      </Route>
      <Route
        path={PATH.projects}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <ProjectsPage />
          </React.Suspense>
        }
      >
        <Route index element={<Projects />} />
        <Route path={PATH.createProject} element={<CreateProject />} />
        <Route path={PATH.project} element={<ProjectDetailPage />} />
      </Route>
      <Route
        path={PATH.cvs}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <CVsPage />
          </React.Suspense>
        }
      >
        <Route index element={<CVs />} />
        <Route path={PATH.cv} element={<CvDetails />} />
        <Route path={PATH.createCV} element={<CreateCV />} />
      </Route>
      <Route
        path={PATH.departments}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <DepartmentsPage />
          </React.Suspense>
        }
      >
        <Route index element={<Departments />} />
        <Route path={PATH.createDepartment} element={<CreateDepartment />} />
        <Route path={PATH.department} element={<DepartmentDetail />} />
      </Route>
      <Route
        path={PATH.positions}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <PositionPage />
          </React.Suspense>
        }
      >
        <Route index element={<Positions />} />
        <Route path={PATH.position} element={<PositionDetail />} />
        <Route path={PATH.createPosition} element={<CreatePosition />} />
      </Route>
      <Route
        path={PATH.skills}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <SkillsPage />
          </React.Suspense>
        }
      >
        <Route index element={<Skills />} />
        <Route path={PATH.skill} element={<SkillDetail />} />
        <Route path={PATH.createSkill} element={<CreateSkill />} />
      </Route>
      <Route
        path={PATH.languages}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <LanguagesPage />
          </React.Suspense>
        }
      >
        <Route index element={<Languages />} />
        <Route path={PATH.createLanguage} element={<CreateLanguage />} />
        <Route path={PATH.language} element={<LanguageDetail />} />
      </Route>
    </>
  );
  const unProtectedRoutes = (
    <>
      <Route
        path={PATH.login}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <SignInAndUp />
          </React.Suspense>
        }
      >
        <Route index element={<Auth />} />
      </Route>
      <Route
        path={PATH.signUp}
        element={
          <React.Suspense fallback={t('ContentText.loading')}>
            <SignInAndUp />
          </React.Suspense>
        }
      >
        <Route index element={<SignUp />} />
      </Route>
    </>
  );

  return (
    <div className="App">
      <Layout>
        <Routes>
          {token ? protectedRoutes : unProtectedRoutes}
          <Route
            path="*"
            element={
              <Navigate to={token ? PATH.employees : PATH.login} replace />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
};
