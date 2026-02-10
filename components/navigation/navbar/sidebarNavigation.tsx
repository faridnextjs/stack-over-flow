import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Routes from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/navigation/navbar/navLinks";

const SidebarNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="cursor-pointer invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        // showCloseButton={false}
        className="background-light900_dark200 border-none p-6"
        side="left"
      >
        <SheetHeader className="hidden">
          <SheetTitle>No Close Button</SheetTitle>
          <SheetDescription>
            This sheet doesn&apos;t have a close button in the top-right corner.
            Click outside to close.
          </SheetDescription>
        </SheetHeader>
        <Link href={Routes.HOME} className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={25}
            height={25}
            alt="Dev Site Logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh - 80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav={true} />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3 mb-3">
            <SheetClose asChild>
              <Link href={Routes.SIGN_IN}>
                <Button className="small-medium btn-tertiary min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none cursor-pointer">
                  <span className="primary-text-gradient">Sign in </span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={Routes.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg border px-4 py-3 shadow-none cursor-pointer text-center">
                  Sign up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default SidebarNavigation;
