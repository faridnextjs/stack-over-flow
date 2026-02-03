"use client";

import Form from "next/form";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import Credentials from "@/lib/actions/credentials";
import { usePathname } from "next/navigation";
import Routes from "@/constants/routes";
import Link from "next/link";

const CredentialsField = () => {
  const [state, formAction, isPending] = useActionState(Credentials, {
      message: null,
      errors: {},
    }),
    pathName = usePathname();
  return (
    <section className="m-2">
      <Form
        action={formAction}
        className="grid gap-2.5 place-content-center mb-4 mt-4"
      >
        {pathName === Routes.SIGN_UP && (
          <div className="gap-2">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" required />
            {state?.errors?.name && (
              <span className="text-red-500">{state.errors.name}</span>
            )}
          </div>
        )}
        {pathName === Routes.SIGN_UP && (
          <div className="gap-2">
            <label htmlFor="username">Username</label>
            <Input type="text" id="username" name="username" required />
            {state?.errors?.username && (
              <span className="text-red-500">{state.errors.username}</span>
            )}
          </div>
        )}
        <div className="gap-2">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" name="email" required />
          {state?.errors?.email && (
            <span className="text-red-500">{state.errors.email}</span>
          )}
        </div>{" "}
        <div className="gap-2">
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" name="password" required />
          {state?.errors?.password && (
            <span className="text-red-500">{state.errors.password}</span>
          )}
        </div>
        <div className="hidden">
          <input type="text" name="pathname" value={pathName} readOnly />
        </div>
        <div className="gap-2 place-self-center">
          {state?.message && (
            <span className="text-green-400">{state.message}</span>
          )}
        </div>
        <div className="text-center gap-2 mt-4">
          {isPending ? (
            <Button disabled>
              <Spinner data-icon="inline-start" />
              {pathName === Routes.SIGN_UP ? "Signing Up..." : "Signing In..."}
            </Button>
          ) : (
            <Button
              variant="secondary"
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              {pathName === Routes.SIGN_UP ? "Sign Up" : "Sign In"}
            </Button>
          )}
        </div>
      </Form>
      {pathName === Routes.SIGN_UP ? (
        <Link href={Routes.SIGN_IN}>
          {" "}
          If You have an account click here to Sign In.
        </Link>
      ) : (
        <Link href={Routes.SIGN_UP}>
          Don&#39;t you have account yet ? Click here to Sign Up
        </Link>
      )}
    </section>
  );
};
export default CredentialsField;
