export const MASTER_PASSWORD = "secret_sauce";

export const invalidLoginData = [
  {
    testName: "Login by locked out user",
    username: "locked_out_user",
    password: MASTER_PASSWORD,
    error: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    testName: "Login with incorrect password",
    username: "standard_user",
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
    username: "standard_user",
    password: "",
    error: "Epic sadface: Password is required",
  },
];

export const validLoginData = [
  {
    testName: "Login by standard user",
    username: "standard_user",
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by problem user",
    username: "problem_user",
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by error user",
    username: "error_user",
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by visual user",
    username: "visual_user",
    password: MASTER_PASSWORD,
  },
  {
    testName: "Login by user with performance problems",
    username: "performance_glitch_user",
    password: MASTER_PASSWORD,
    timeout: 8000,
  },
];

export const usersForAddRemoveInventory = {
  standard: {
    username: "standard_user",
    password: MASTER_PASSWORD,
  },
  error: {
    username: "error_user",
    password: MASTER_PASSWORD,
  },
};
