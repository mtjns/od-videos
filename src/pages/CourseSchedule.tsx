import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Sun, Mountain, Monitor, Palette, Briefcase } from "lucide-react";

const schedule = [
  {
    icon: Camera,
    title: "Beginner Fundamentals",
    dates: "Every Monday & Wednesday",
    time: "6:00 PM – 8:30 PM",
    duration: "6 weeks",
    price: "$449",
    nextStart: "April 7, 2024",
    spots: 4,
    description: "Perfect for those just starting their photography journey. Learn to control your camera, understand exposure, and compose compelling images.",
  },
  {
    icon: Mountain,
    title: "Advanced Composition",
    dates: "Every Tuesday & Thursday",
    time: "6:30 PM – 9:00 PM",
    duration: "8 weeks",
    price: "$699",
    nextStart: "April 9, 2024",
    spots: 6,
    description: "Take your compositions to the next level with advanced techniques in visual storytelling, dynamic framing, and creative rule-breaking.",
  },
  {
    icon: Sun,
    title: "Studio Lighting Mastery",
    dates: "Saturdays",
    time: "10:00 AM – 2:00 PM",
    duration: "6 weeks",
    price: "$799",
    nextStart: "April 13, 2024",
    spots: 2,
    description: "Master both natural and artificial lighting setups for portraits, product photography, and creative projects in our fully-equipped studio.",
  },
  {
    icon: Monitor,
    title: "Post-Processing Workflow",
    dates: "Sundays",
    time: "1:00 PM – 4:00 PM",
    duration: "4 weeks",
    price: "$349",
    nextStart: "April 14, 2024",
    spots: 8,
    description: "Learn professional editing workflows in Adobe Lightroom and Photoshop. From RAW processing to final export, master every step.",
  },
  {
    icon: Palette,
    title: "Genre Specialization: Portraits",
    dates: "Every Wednesday",
    time: "7:00 PM – 9:30 PM",
    duration: "5 weeks",
    price: "$549",
    nextStart: "May 1, 2024",
    spots: 5,
    description: "Deep dive into portrait photography — environmental portraits, headshots, creative portraiture, and working with models.",
  },
  {
    icon: Briefcase,
    title: "Photography Business Bootcamp",
    dates: "Fri & Sat (intensive)",
    time: "9:00 AM – 5:00 PM",
    duration: "2 weekends",
    price: "$599",
    nextStart: "May 10, 2024",
    spots: 10,
    description: "Build a sustainable photography business. Cover pricing, contracts, client management, marketing, and portfolio development.",
  },
];

const workshops = [
  { title: "Golden Hour Landscape Walk", date: "April 20, 2024", location: "Columbia River Gorge", price: "$89" },
  { title: "Street Photography Downtown", date: "April 27, 2024", location: "Portland Pearl District", price: "$69" },
  { title: "Astrophotography Night Shoot", date: "May 4, 2024", location: "Mt. Hood National Forest", price: "$129" },
  { title: "Spring Macro Workshop", date: "May 18, 2024", location: "Portland Japanese Garden", price: "$79" },
];

const CourseSchedule = () => (
  <>
    <Header />
    <div className="bg-white min-h-screen pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-bold tracking-tight mb-4">Course Schedule</h1>
        <p className="text-gray-600 text-xl mb-16">Spring 2024 session — Enrollment now open</p>

        <div className="space-y-8">
          {schedule.map((course) => (
            <div key={course.title} className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <course.icon className="w-7 h-7 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h2 className="text-black text-xl font-semibold">{course.title}</h2>
                    <span className="text-amber-600 text-2xl font-bold">{course.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-white px-3 py-1.5 rounded-full text-gray-700 border border-gray-200">
                      📅 {course.dates}
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-full text-gray-700 border border-gray-200">
                      🕐 {course.time}
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-full text-gray-700 border border-gray-200">
                      ⏱ {course.duration}
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-full text-gray-700 border border-gray-200">
                      🚀 Starts {course.nextStart}
                    </span>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${course.spots <= 3 ? "bg-red-50 text-red-600 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
                      {course.spots} spots left
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-black text-3xl font-bold tracking-tight mb-8">Upcoming Workshops</h2>
          <p className="text-gray-600 text-lg mb-10">
            One-day field experiences led by Sarah Chen. Open to all skill levels unless noted.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((w) => (
              <div key={w.title} className="border border-gray-200 rounded-xl p-6 hover:border-amber-400 transition-colors">
                <h3 className="text-black text-lg font-semibold mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm mb-1">{w.date} · {w.location}</p>
                <p className="text-amber-600 font-bold text-lg mt-3">{w.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Not sure which course is right for you? Book a free 15-minute consultation with Sarah
            to discuss your goals and find the perfect fit.
          </p>
          <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105 text-lg">
            BOOK FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default CourseSchedule;
