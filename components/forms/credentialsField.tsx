"use client";

import Form from "next/form";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import Credentials from "@/lib/actions/credentials";

const CredentialsField = () => {
  const [state, formAction, isPending] = useActionState(Credentials, {
    message: null,
    errors: {},
  });
  return (
    <section className="m-2">
      <Form action={formAction}>
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
        <div className="gap-2 place-self-center">
          {state?.message && (
            <span className="text-green-400">{state.message}</span>
          )}
        </div>
        <div className="text-center gap-2 mt-4">
          {isPending ? (
            <Button disabled>
              <Spinner data-icon="inline-start" />
              Signing In
            </Button>
          ) : (
            <Button
              variant="secondary"
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              Sign In
            </Button>
          )}
        </div>
      </Form>
    </section>
  );
};
export default CredentialsField;
