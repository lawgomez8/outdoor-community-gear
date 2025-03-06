
import React from 'react';
import { Users, Mountain, Map } from 'lucide-react';

const CommunitySection = () => {
  // Sample community events
  const events = [
    {
      title: "Mt. Whitney Summit Challenge",
      date: "August 15-17, 2023",
      location: "California",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Red Rock Canyon Climbing Meetup",
      date: "September 5, 2023",
      location: "Nevada",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
    },
    {
      title: "Appalachian Trail Weekend Hike",
      date: "October 12-14, 2023",
      location: "Virginia",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
    }
  ];

  return (
    <section id="community" className="relative bg-forest-50 section-padding overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-forest-100 to-transparent opacity-70 -z-10 blur-3xl"></div>
      
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="badge bg-forest-100 text-forest-800 mb-4">Join Our Community</span>
          <h2 className="heading-lg mb-4">Connect With Fellow Adventurers</h2>
          <p className="text-muted-foreground text-lg">
            We're building a community of passionate hikers and climbers who share their experiences,
            inspire each other, and organize events to explore the great outdoors together.
          </p>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center">
                <Users size={32} className="text-forest-600" />
              </div>
            </div>
            <h3 className="heading-sm mb-3">Community Events</h3>
            <p className="text-muted-foreground">
              Join group hikes, climbing sessions, and outdoor workshops organized by our community members.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center">
                <Mountain size={32} className="text-forest-600" />
              </div>
            </div>
            <h3 className="heading-sm mb-3">Trail Reports</h3>
            <p className="text-muted-foreground">
              Get real-time updates and reports from trails and climbing spots from our community members.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center">
                <Map size={32} className="text-forest-600" />
              </div>
            </div>
            <h3 className="heading-sm mb-3">Exclusive Routes</h3>
            <p className="text-muted-foreground">
              Access curated maps and routes for the best hiking and climbing experiences worldwide.
            </p>
          </div>
        </div>

        {/* Upcoming events */}
        <div className="mb-12">
          <h3 className="heading-md text-center mb-10">Upcoming Community Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-muted-foreground mb-1">{event.date}</p>
                  <p className="text-forest-600 font-medium">{event.location}</p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <button className="w-full py-3 rounded-md bg-white text-forest-800 font-medium hover:bg-forest-50 transition-colors">
                    RSVP Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-forest-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Ready to join our community?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Sign up for our newsletter to receive updates on community events, trail reports,
            and exclusive offers for our members.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-400"
            />
            <button className="px-6 py-3 rounded-md bg-clay-500 hover:bg-clay-600 text-white font-medium transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
