import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Calendar, Users, BookOpen, Utensils } from "lucide-react";

const InfoModules = () => {
  const academicInfo = [
    { label: "Fall Semester", value: "Aug 28 - Dec 15", status: "Current" },
    { label: "Registration", value: "Nov 15 - Dec 1", status: "Upcoming" },
    { label: "Final Exams", value: "Dec 11 - Dec 15", status: "Upcoming" },
  ];

  const facilityHours = [
    { name: "Main Library", hours: "Mon-Fri: 7 AM - 11 PM", icon: BookOpen },
    { name: "Recreation Center", hours: "Daily: 5 AM - 11 PM", icon: Users },
    { name: "Student Union", hours: "Mon-Fri: 6 AM - 12 AM", icon: MapPin },
    { name: "Dining Hall", hours: "Daily: 7 AM - 9 PM", icon: Utensils },
  ];

  const upcomingEvents = [
    { title: "Career Fair", date: "Oct 25", time: "10 AM - 4 PM", location: "Student Center" },
    { title: "Fall Festival", date: "Oct 31", time: "6 PM - 10 PM", location: "Campus Quad" },
    { title: "Study Abroad Info", date: "Nov 5", time: "2 PM - 4 PM", location: "Library Hall" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Academic Schedule */}
      <Card className="bg-gradient-card backdrop-blur-sm shadow-card border-primary/20 hover:shadow-elegant transition-all duration-300">
        <CardHeader className="bg-gradient-subtle">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Academic Schedule
          </CardTitle>
          <CardDescription>Important dates and deadlines</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {academicInfo.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
                <Badge 
                  variant={item.status === "Current" ? "default" : "secondary"}
                  className="ml-2"
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Facility Hours */}
      <Card className="bg-gradient-card backdrop-blur-sm shadow-card border-secondary/20 hover:shadow-elegant transition-all duration-300">
        <CardHeader className="bg-gradient-subtle">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-secondary" />
            Facility Hours
          </CardTitle>
          <CardDescription>Operating hours for campus facilities</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {facilityHours.map((facility, index) => (
              <div key={index} className="flex items-center gap-3">
                <facility.icon className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="font-medium">{facility.name}</p>
                  <p className="text-sm text-muted-foreground">{facility.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campus Events */}
      <Card className="bg-gradient-card backdrop-blur-sm shadow-card border-accent/20 hover:shadow-elegant transition-all duration-300">
        <CardHeader className="bg-gradient-subtle">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-accent" />
            Upcoming Events
          </CardTitle>
          <CardDescription>Don't miss these campus activities</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-4">
                <h4 className="font-medium">{event.title}</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {event.date} at {event.time}
                  </p>
                  <p className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoModules;