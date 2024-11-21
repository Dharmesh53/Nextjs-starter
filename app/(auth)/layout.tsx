import { redirect } from "next/navigation";
import { UserRole } from "@prisma/client";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  // const user = await getCurrentUser();
  // if(user) {
  //   if(user.role === UserRole.ADMIN) {
  //     redirect("/admin")
  //   }
  //   redirect("/dashboard")
  // }

  return <div className="min-h-screen">{children}</div>;
}
