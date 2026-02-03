"use server";

import { redirect } from "next/navigation";
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
  const errors: Record<string, string> = {},
    inputData = {
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

  if (
    inputData.email !== "test@example.com" &&
    inputData.password !== "password123"
  ) {
    return {
      message: "Login failed!",
      errors: {},
    };
  }

  try {
    if (
      inputData.email === "test@example.com" &&
      inputData.password === "password123"
    ) {
      return {
        message: "Login successful! Redirecting...",
        errors: {},
      };
    }
    console.dir(inputData);
  } catch (error) {
    console.error(error);
    return {
      message:
        "An error occurred while processing your request. Please try again later.",
      errors: {},
    };
  }
  console.dir(inputData);
  revalidatePath("/", "layout");
  return redirect("/");
};

export default Credentials;
