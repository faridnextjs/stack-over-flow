const Routes = {
  HOME: "/",
  SIGN_IN: "/signIn",
  SIGN_UP: "/signUp",
  ASK_QUESTION: "/askQuestion",
  PROFILE: (_id: number) => `/profile/${_id}`,
  TAGS: (_id: number) => `/tags/${_id}`,
} as const;
export default Routes;
