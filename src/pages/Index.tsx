import { ChatInterface } from "@/components/ChatInterface";
import InfoModules from "@/components/InfoModules";
import Header from "@/components/Header";
import ClubsSection from "@/components/ClubsSection";
import campusBg from "@/assets/campus-bg.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Images */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${campusBg})` }}
      />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${patternBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      
        <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 drop-shadow-lg">
              Welcome to <span className="text-primary">Malla Reddy</span>
              <br />
              <span className="text-secondary">Deemed to be University</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Your intelligent campus companion for academic schedules, facility information, 
              student services, and vibrant campus life. Discover our clubs and get instant answers 
              to all your university-related questions.
            </p>
          </div>
        </section>

        {/* Information Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Quick Campus Information
          </h2>
          <InfoModules />
        </section>

        {/* Clubs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Student Clubs & Activities
          </h2>
          <ClubsSection />
        </section>

        {/* Chat Interface */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Ask Your Campus Assistant
          </h2>
          <ChatInterface />
        </section>

        {/* Additional Help Section */}
        <section className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Need More Help?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI assistant can help with dining services, library resources, 
              administrative procedures, club activities, and much more. Just ask!
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-4 py-2 bg-primary/15 text-primary rounded-full border border-primary/30 shadow-sm">
                Academic Schedules
              </span>
              <span className="px-4 py-2 bg-secondary/15 text-secondary rounded-full border border-secondary/30 shadow-sm">
                Facility Hours
              </span>
              <span className="px-4 py-2 bg-accent/15 text-accent rounded-full border border-accent/30 shadow-sm">
                Campus Events
              </span>
              <span className="px-4 py-2 bg-primary/15 text-primary rounded-full border border-primary/30 shadow-sm">
                Student Clubs
              </span>
              <span className="px-4 py-2 bg-secondary/15 text-secondary rounded-full border border-secondary/30 shadow-sm">
                Dining Services
              </span>
              <span className="px-4 py-2 bg-accent/15 text-accent rounded-full border border-accent/30 shadow-sm">
                Library Resources
              </span>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
};

export default Index;