"use client";
import { ThemeProvider } from "@/theme";
import { PropsWithChildren } from "react";
import ReactQueryProvider from "./TanstackProvider";
import { Toaster } from "@/components/ui/sonner";
import { ReduxProvider } from "./ReduxProvider";

export const AppProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        forcedTheme="light"
      >
        <ReactQueryProvider>
          {children}
          <Toaster />
        </ReactQueryProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
