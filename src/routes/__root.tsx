// import { useAuth } from "@/useAuth";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
// import { Button } from "rsuite";

const RootComponent = () => {
  const setVhVariable = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    setVhVariable();
    window.addEventListener("resize", setVhVariable);

    return () => {
      window.removeEventListener("resize", setVhVariable);
    };
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
