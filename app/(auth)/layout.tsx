import { redirect } from "next/navigation";
import { UserRole } from "@prisma/client";

import { getCurrentUser } from "@/lib/session";

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === UserRole.ADMIN) {
      redirect("/admin");
    }
    redirect("/dashboard");
  }

  return <>{children}</>;
}
