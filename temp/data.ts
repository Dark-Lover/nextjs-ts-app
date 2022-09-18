interface MenuItem {
  path: string;
  name: string;
}
export const menuItems: MenuItem[] = [
  { path: "/", name: "Home" },
  { path: "/bestsellers", name: "BestSellers" },
  { path: "/products", name: "Products" },
  { path: "/contact", name: "Contact" },
];
