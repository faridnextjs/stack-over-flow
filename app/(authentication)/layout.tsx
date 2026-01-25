import Image from "next/image";
import SocialAuthForm from "@/components/forms/socialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen justify-center items-center bg-auth-light  bg-center bg-no-repeat bg-cover dark:bg-auth-dark px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px]  border px-4 py-10 shadow-md sm:min-w-130 sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DEVFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              to get questions answered
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="Site Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};
export default AuthLayout;
