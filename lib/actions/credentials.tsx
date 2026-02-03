"use server";
import { redirect } from "next/navigation";
import Routes from "@/constants/routes";
import { revalidatePath } from "next/cache";

type FormState = {
  message: string | null;
  errors: Record<string, string>;
};

const currentDate = new Date().toISOString(),
  formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeZone: "Europe/Berlin",
      timeStyle: "long",
    }).format(new Date(date));
  },
  validateInputs = (input: string | null, selectedInput: string) => {
    if (!input) {
      throw new Error(`Invalid ${selectedInput}`);
    }
    return input.trim();
  };

const Credentials = async (
  prevForm: FormState | null,
  formData: FormData,
): Promise<FormState> => {
  const errors: Record<string, string> = {};
  const pathname = validateInputs(
    (formData?.get("pathname") as string).toLowerCase() as string,
    "pathnameField",
  );
  console.log(pathname);

  const inputData = {
    email: validateInputs(formData?.get("email") as string, "emailField"),
    password: validateInputs(
      formData?.get("password") as string,
      "passwordField",
    ),
    date: formatDate(currentDate),
  };

  // Validate email
  if (!inputData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputData.email)) {
    errors.email = "Invalid email address.";
  }

  // Validate password
  if (!inputData.password || inputData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return {
      message: "Validation failed. Please fix the errors above.",
      errors,
    };
  }

  if (pathname === "/signin") {
    // Don't validate or log name/username for signin
    if (
      inputData.email === "next@example.com" &&
      inputData.password === "next1234"
    ) {
      console.log("Sign In Data:", inputData);
      revalidatePath(Routes.SIGN_IN, "layout");
      redirect(Routes.HOME);
    }

    return {
      message: "Login failed! Invalid email or password.",
      errors: {},
    };
  }

  if (pathname === "/signup") {
    // Only validate name and username for signup
    const name = validateInputs(formData?.get("name") as string, "nameField");
    const username = validateInputs(
      formData?.get("username") as string,
      "usernameField",
    );

    console.log("Sign Up Data:", { ...inputData, name, username });
    revalidatePath(Routes.SIGN_UP, "layout");
    redirect(Routes.HOME);
  }

  return {
    message: "Invalid pathname.",
    errors: {},
  };
};

export default Credentials;
