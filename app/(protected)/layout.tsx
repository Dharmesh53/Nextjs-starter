import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { UserAccountNav } from "@/components/layout/user-account-nav";

export default async function ProtectedLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="relative flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-50 flex h-14 bg-background px-4 lg:h-[60px] xl:px-8">
          <div className="flex w-full items-center justify-end gap-x-3 px-0">
            <ModeToggle />
            <UserAccountNav user={user} />
          </div>
        </header>

        <main className="flex-1 p-4 xl:px-8">
          <div className="flex h-full flex-col gap-4 px-0 lg:gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
