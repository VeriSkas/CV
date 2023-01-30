export const InputTypes = {
  text: 'text',
  email: 'email',
  password: 'password',
};

export const InputLabels = {
  email: 'email',
  password: 'password',
  firstName: 'first_name',
  lastName: 'last_name',
  department: 'department',
  position: 'position',
};

export const InputLabelNames = {
  email: 'Email',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
  department: 'Department',
  position: 'Position',
};

export const ErrorMessages = {
  inputRequired: 'You should enter something',
  inputMinLength: (value: number) =>
    `You should enter ${value} symbols or more`,
  inputMaxLength: (value: number) =>
    `You should enter less then ${value} symbols`,
  inputEmail: 'Enter valid email',
};

export const TitleText = {
  authTitle: 'Welcome Back',
  signUpTitle: 'Register Now',
};

export const SubtitleText = {
  authSubtitle: 'Hello again! Sign in to continue.',
  signUpSubtitle: 'Welcome! Sign up to continue.',
};

export const BtnText = {
  authSubmitBtn: 'Sign in',
  authResetPasswordBtn: 'Reset password',
  signUpSubmitBtn: 'Sign up',
  returnBtn: 'I already have an account',
};
