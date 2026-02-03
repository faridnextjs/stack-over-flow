import SignInWithGoogle from "@/lib/actions/signInWithGoogle";
import SignInWithGithub from "@/lib/actions/signInWithGithub";

const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-2">
      <SignInWithGithub />
      <SignInWithGoogle />
    </div>
  );
};
export default SocialAuthForm;
