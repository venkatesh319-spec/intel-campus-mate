import { ChatInterface } from "@/components/ChatInterface";
import InfoModules from "@/components/InfoModules";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to <span className="text-primary">CampusAI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your intelligent campus companion for academic schedules, facility information, 
              and student services. Get instant answers to all your campus-related questions.
            </p>
          </div>
        </section>

        {/* Information Modules */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Quick Campus Information
          </h2>
          <InfoModules />
        </section>

        {/* Chat Interface */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Ask Your Campus Assistant
          </h2>
          <ChatInterface />
        </section>

        {/* Additional Help Section */}
        <section className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need More Help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI assistant can help with dining services, library resources, 
              administrative procedures, and much more. Just ask!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                Academic Schedules
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                Facility Hours
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                Campus Events
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                Dining Services
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                Library Resources
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;