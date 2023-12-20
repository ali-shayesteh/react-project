import Header from "./header";
import Footer from "./footer";

export default function MainLayout({children}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="main-container bg-white flex-grow py-12 px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
