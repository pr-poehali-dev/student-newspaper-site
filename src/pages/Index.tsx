import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-newspaper-white">
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
      <Footer />
    </div>
  );
};

export default Index;
