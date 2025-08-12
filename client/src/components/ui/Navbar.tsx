import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggleButton from "@/ThemeToggleButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  
  return (
    <div className="flex justify-between w-full">
      
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {/* Dashboard */}
          <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/dashboard">Dashboard</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

          {/* Add  */}
          <NavigationMenuItem>
          <NavigationMenuTrigger>Accounts & Cards</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/addbank">Add Bank Account</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/addcredit">Add Credit Card</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/rmbank">Remove Bank Account</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/rmcredit">Remove Credit Card</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <ThemeToggleButton />
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  to,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
