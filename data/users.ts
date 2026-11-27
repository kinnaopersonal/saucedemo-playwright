export const STANDARD_USER = "standard_user";
export const LOCKED_OUT_USER = "locked_out_user";
export const PROBLEM_USER = "problem_user";
export const ERROR_USER = "error_user";
export const VISUAL_USER = "visual_user";
export const PERFORMANCE_GLITCH_USER = "performance_glitch_user";

const MASTER_PASSWORD = "secret_sauce";

export const invalidLoginData = [
  {
    testName: "Login by locked out user",
    username: LOCKED_OUT_USER,
    password: MASTER_PASSWORD,
    error: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    testName: "Login with incorrect password",
    username: STANDARD_USER,
    password: "incorrectPsw",
    error:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    testName: "Login by non-existent user",
    username: "non_existent",
    password: "somePsw",
    error:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    testName: "Login with empty username",
    username: "",
    password: "somePsw",
    error: "Epic sadface: Username is required",
  },
  {
    testName: "Login with empty password",
    username: STANDARD_USER,
    password: "",
    error: "Epic sadface: Password is required",
  },
];

export const validLoginData = [
  {
    testName: "Login by standard user",
    username: STANDARD_USER,
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by problem user",
    username: PROBLEM_USER,
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by error user",
    username: ERROR_USER,
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by visual user",
    username: VISUAL_USER,
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by user with performance problems",
    username: PERFORMANCE_GLITCH_USER,
    password: MASTER_PASSWORD,
    timeout: 8000,
  },
];
