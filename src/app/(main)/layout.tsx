import Navbar from "../../components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="pt-[57px]">
        <div className="bg-[var(--accent)] text-white text-center py-2 px-4 text-xs font-mono uppercase tracking-[0.2em]">
          This page is under Work in Progress
        </div>
        {children}
      </div>
    </>
  );
}
