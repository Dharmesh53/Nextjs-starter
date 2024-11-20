import { auth } from "auth";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Navbar />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
