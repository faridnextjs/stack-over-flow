import Navbar from "@/components/navigation/navbar/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
export default RootLayout;
