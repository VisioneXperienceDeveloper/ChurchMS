import { usePathname } from "next/navigation";

export const useTitle = () => {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/": "Dashboard Overview",
    "/groups": "Groups",
    "/members": "Members",
    "/events": "Events",
    "/giving": "Giving",
    "/settings": "Settings",
  };

  const getTitle = () => {
    if (pathname.startsWith("/groups")) {
      const [...rest] = pathname.split("/").filter(Boolean);
      return `${rest.map((item) => item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, " ")).join(" > ")}`;
    }
    return titleMap[pathname] || "Dashboard Overview";
  };

  return getTitle();
};