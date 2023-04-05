import React, { FC, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from 'uiComponents/Breadcrumbs/Breadcrumbs';

const EmployeesPage: FC<{}> = () => {
  const [activeUser, setActiveUser] = useState<string>('');

  const setUser = (id: string): void => {
    if (id) {
      setActiveUser(id);
    }
  };

  return (
    <>
      <Breadcrumbs paramName={activeUser} />
      <Outlet context={setUser} />
    </>
  );
};

export default EmployeesPage;
