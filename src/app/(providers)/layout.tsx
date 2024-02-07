"use client";
import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import { Provider } from "react-redux";
import store from "../_store/store";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}

export default ProvidersLayout;
