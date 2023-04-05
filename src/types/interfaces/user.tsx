export type Role = 'admin' | 'employee';

export interface UserInfo {
  id: string;
  email: string;
  profile: {
    id: string;
    avatar: string | null,
    first_name: string,
    last_name: string,
    full_name: string | null,
    skills?: Array<{
      skill_name: string,
      mastery: string,
    }>,
    languages?: Array<{
      language_name: string,
      proficiency: string,
    }>,
  };
  cvs?: Array<{
    id: string,
  }>;
  department_name?: string | null;
  position_name?: string | null;
  position: { name: string, id: string } | null;
  department: { name: string, id: string } | null;
}

export interface UserOption {
  label: string;
  value: string;
}

export interface TableUser {
  id: string;
  email: string;
  avatar: string | null,
  first_name: string,
  last_name: string,
  department_name: string | null;
  position_name: string | null;
}

export interface UpdatedUser {
  profile: {
    first_name: string;
    last_name: string;
    skills: Array<{
      skill_name: string,
      mastery: string,
    }>,
    languages: Array<{
      language_name: string,
      proficiency: string,
    }>,
  }
  cvsIds: string[];
  departmentId: string;
  positionId: string;
}

export interface AvatarValue {
  base64: string;
  size: number;
  type: string;
}

export interface UserInfoShort {
  email: string;
  profile: {
    avatar: null | string;
    first_name: string;
    last_name: string;
  }
}

export interface IRole {
  label: string;
  value: string;
}
