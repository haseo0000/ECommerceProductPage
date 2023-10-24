"use client";

import Navbar from "@/app/components/navbar/navbar";
import { store } from "./store";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
    </Provider>
  );
}
