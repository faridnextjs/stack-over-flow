"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  console.log("ThemeProvider rendered as Client Component");
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
export default ThemeProvider;
