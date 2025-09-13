import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Music, 
  Camera, 
  Palette, 
  Users, 
  Star 
} from "lucide-react";

const clubs = [
  {
    id: 1,
    name: "Sports Club",
    description: "Athletic excellence and team spirit across multiple sports disciplines",
    icon: Trophy,
    activities: ["Cricket", "Football", "Basketball", "Athletics", "Tennis"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 2,
    name: "Dance Club",
    description: "Express yourself through various dance forms and choreography",
    icon: Users,
    activities: ["Classical", "Contemporary", "Hip-Hop", "Folk", "Bollywood"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    id: 3,
    name: "Cultural Club",
    description: "Celebrate diversity through cultural events and festivals",
    icon: Star,
    activities: ["Festivals", "Drama", "Debates", "Literature", "Heritage"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    id: 4,
    name: "Arts Club",
    description: "Unleash creativity through visual arts and crafts",
    icon: Palette,
    activities: ["Painting", "Sculpture", "Crafts", "Digital Art", "Sketching"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 5,
    name: "Music Club",
    description: "Harmonize your passion for music and performance",
    icon: Music,
    activities: ["Vocals", "Instruments", "Composition", "Recording", "Concerts"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    id: 6,
    name: "Photography Club",
    description: "Capture moments and tell stories through the lens",
    icon: Camera,
    activities: ["Portrait", "Landscape", "Event", "Studio", "Digital Editing"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const ClubsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club) => {
        const IconComponent = club.icon;
        return (
          <Card 
            key={club.id} 
            className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 mx-auto ${club.bgColor} rounded-full flex items-center justify-center mb-4`}>
                <IconComponent className={`w-8 h-8 ${club.color}`} />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                {club.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {club.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">Activities:</h4>
                <div className="flex flex-wrap gap-2">
                  {club.activities.map((activity, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className={`${club.color} border-current/30 ${club.bgColor}`}
                    >
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ClubsSection;