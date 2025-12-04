import type { Metadata } from "next";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Dashboard",
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
