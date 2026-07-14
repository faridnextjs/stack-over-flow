const Routes = {
  HOME: "/",
  SIGN_IN: "/signIn",
  SIGN_UP: "/signUp",
  ASK_QUESTION: "/askQuestion",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTIONS: (id: string) => `/questions/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
} as const;
export default Routes;
