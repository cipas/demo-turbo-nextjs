import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

import { Layout } from "@acme/ui";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Layout className={inter.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
};

export default trpc.withTRPC(MyApp);
