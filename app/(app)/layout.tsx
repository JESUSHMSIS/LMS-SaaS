import { ClerkProvider } from "@clerk/nextjs";

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
};

export default AppLayout;
