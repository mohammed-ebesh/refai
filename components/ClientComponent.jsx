"use client";

import { Provider } from "react-redux";
import store from "../app/rtk/store";

export default function ClientComponent({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
