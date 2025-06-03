import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import Sidebar from "@/components/Sidebar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-newspaper-dark-bg dark-newspaper relative">
      {/* Background decorative stars */}
      <div className="fixed top-20 left-1/4 star-decoration star-top-left star-small opacity-20 pointer-events-none"></div>
      <div className="fixed top-40 right-1/3 star-decoration star-top-right star-small opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-32 left-1/3 star-decoration star-bottom-left star-small opacity-20 pointer-events-none"></div>

      <Header />
      <Hero />
      <div className="grid lg:grid-cols-3 gap-0">
        <div className="lg:col-span-2">
          <NewsGrid />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
