import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">CampusAI</h1>
              <p className="text-xs text-muted-foreground">Information System</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Dashboard
          </a>
          <a href="#academics" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Academics
          </a>
          <a href="#facilities" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Facilities
          </a>
          <a href="#events" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Events
          </a>
          <a href="#help" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Help
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Quick search..." 
                className="pl-9 w-48"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;