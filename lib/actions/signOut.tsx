import { signOut } from "@/auth";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import Routes from "@/constants/routes";

const SignOut = () => {
  return (
    <Form
      action={async () => {
        "use server";
        await signOut({ redirectTo: Routes.SIGN_IN });
      }}
    >
      <Button className="cursor-pointer" variant="destructive" type="submit">
        Sign Out
      </Button>
    </Form>
  );
};
export default SignOut;
