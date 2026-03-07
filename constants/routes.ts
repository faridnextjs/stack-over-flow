const Routes = {
  HOME: "/",
  SIGN_IN: "/signIn",
  SIGN_UP: "/signUp",
  PROFILE: (_id: number) => `/profile/${_id}`,
} as const;
export default Routes;
