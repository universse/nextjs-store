import { auth } from "@clerk/nextjs/server";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  await auth.protect();

  return <>{children}</>;
}
