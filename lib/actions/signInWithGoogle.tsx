"use server";
import { signIn } from "@/auth";
import Form from "next/form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Routes from "@/constants/routes";

const SignInWithGoogle = async () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1  px-4 py-3.5 cursor-pointer";
  return (
    <Form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: Routes.HOME });
      }}
    >
      <Button variant="outline" type="submit" className={buttonClasses}>
        <Image
          src="/icons/google.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2 invert-colors object-cover object-center"
        />
        <span>Log in with Google</span>
      </Button>
    </Form>
  );
};

export default SignInWithGoogle;
