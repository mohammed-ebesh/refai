"use client";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";

import store from "../app/rtk/store";
type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function SessionProvider({ children, session }: Props) {
  return (
    <Provider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Provider>
  );
}
