import { AppContext } from "@/app-context";
import { FunctionComponent, useContext } from "react";
import { Navigate } from "react-router-dom";

export function withCondition(
  Component: FunctionComponent,
  condition: boolean,
  redirectTo: string,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function InnerComponent(props: any) {
    return condition ? (
      <Component {...props} />
    ) : (
      <Navigate to={redirectTo} replace />
    );
  };
}

/** A more specific variation */
export const withLoggedIn = (Component: FunctionComponent) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  withCondition(Component, useContext(AppContext).loggedIn, "/login");
export const withoutLoggedIn = (Component: FunctionComponent) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  withCondition(Component, !useContext(AppContext).loggedIn, "/home");
