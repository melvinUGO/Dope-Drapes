"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const AppThemeprovider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default AppThemeprovider;
