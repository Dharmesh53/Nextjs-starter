import { NavMobile } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

export default function MarketingLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Navbar scroll={true} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
