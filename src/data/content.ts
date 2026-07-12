import { Testimonial, GalleryItem, ConstructionStep, Amenity } from "@/types";
import { images } from "@/config/images";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Land Investor, Hyderabad",
    content: "Investing with NVRR Developers has been one of the best decisions of my life. Their transparency, professional approach, and vision for integrated townships gave me complete confidence in my investment.",
    image: images.testimonials[0],
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Property Owner, Visakhapatnam",
    content: "What sets NVRR apart is their holistic approach. They are not just selling land — they are building complete communities with hospitals, schools, and everything a family needs.",
    image: images.testimonials[1],
  },
  {
    id: "3",
    name: "Dr. Venkatesh Rao",
    role: "Medical Professional, Kakinada",
    content: "The master plan for the Kakinada development, with its integrated hospital and medical college, is exactly what this region needs. NVRR's vision aligns perfectly with community welfare.",
    image: images.testimonials[2],
  },
];

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Aerial Township View", category: "Drone Views", image: images.gallery[0] },
  { id: "2", title: "Modern Architecture", category: "Architecture", image: images.gallery[1] },
  { id: "3", title: "Master Plan Overview", category: "Masterplans", image: images.gallery[2] },
  { id: "4", title: "Construction Progress", category: "Construction", image: images.gallery[3] },
  { id: "5", title: "Landscaped Gardens", category: "Landscape", image: images.gallery[4] },
  { id: "6", title: "Commercial District", category: "Commercial", image: images.gallery[5] },
  { id: "7", title: "Township Entrance", category: "Township", image: images.gallery[6] },
  { id: "8", title: "Sunset Aerial", category: "Drone Views", image: images.gallery[7] },
  { id: "9", title: "Luxury Villa", category: "Architecture", image: images.gallery[8] },
  { id: "10", title: "Green Corridor", category: "Landscape", image: images.gallery[9] },
  { id: "11", title: "Site Development", category: "Construction", image: images.gallery[10] },
  { id: "12", title: "Community Park", category: "Township", image: images.gallery[11] },
  { id: "13", title: "Luxury Curved Residential Tower", category: "Architecture", image: images.gallery[12] },
  { id: "14", title: "Waterfront Skyscraper Complex", category: "Architecture", image: images.gallery[13] },
  { id: "15", title: "Tiered Garden Terraces", category: "Architecture", image: images.gallery[14] },
  { id: "16", title: "Grand Colonnade Pavilion", category: "Architecture", image: images.gallery[15] },
  { id: "17", title: "Futuristic Wave Facade", category: "Architecture", image: images.gallery[16] },
];

export const galleryCategories = ["All", "Drone Views", "Architecture", "Masterplans", "Construction", "Landscape", "Commercial", "Township"];

export const constructionSteps: ConstructionStep[] = [
  { id: "1", step: 1, title: "Land Acquisition & Due Diligence", description: "Rigorous title verification, environmental assessment, and regulatory approvals before any acquisition.", icon: "Search" },
  { id: "2", step: 2, title: "Master Planning & Design", description: "World-class architects and urban planners create comprehensive township master plans.", icon: "PenTool" },
  { id: "3", step: 3, title: "Infrastructure Development", description: "Roads, utilities, water supply, and smart infrastructure laid as the foundation.", icon: "HardHat" },
  { id: "4", step: 4, title: "Vertical Construction", description: "Residential, commercial, and institutional buildings constructed to premium quality standards.", icon: "Building2" },
  { id: "5", step: 5, title: "Landscaping & Amenities", description: "Parks, lakes, sports facilities, and community amenities brought to life.", icon: "Trees" },
  { id: "6", step: 6, title: "Handover & Community Launch", description: "Seamless handover with 24/7 security, property management, and community programmes.", icon: "Key" },
];

export const amenities: Amenity[] = [
  { id: "1", title: "Club House", description: "Exclusive members' club with dining, events, and recreational facilities.", icon: "Users", category: "Recreation" },
  { id: "2", title: "Swimming Pool", description: "Olympic-standard pool with children's area and poolside lounge.", icon: "Waves", category: "Recreation" },
  { id: "3", title: "Fitness Centre", description: "State-of-the-art gym with personal training and group fitness classes.", icon: "Dumbbell", category: "Recreation" },
  { id: "4", title: "Sports Complex", description: "Cricket ground, football pitch, tennis courts, and indoor stadium.", icon: "Trophy", category: "Recreation" },
  { id: "5", title: "Golf Course", description: "Championship 18-hole golf course with professional coaching.", icon: "Flag", category: "Recreation" },
  { id: "6", title: "Hospital", description: "Multi-specialty hospital with emergency services and specialist departments.", icon: "Hospital", category: "Healthcare" },
  { id: "7", title: "International School", description: "World-class education from kindergarten through senior secondary.", icon: "GraduationCap", category: "Education" },
  { id: "8", title: "University", description: "Higher education campus with engineering, management, and arts programmes.", icon: "BookOpen", category: "Education" },
  { id: "9", title: "Shopping Mall", description: "Premium retail destination with dining, entertainment, and services.", icon: "ShoppingBag", category: "Commercial" },
  { id: "10", title: "IT Park", description: "Grade-A office spaces for technology companies and startups.", icon: "Cpu", category: "Commercial" },
  { id: "11", title: "Temple", description: "Spiritual centre fostering community harmony and cultural heritage.", icon: "Church", category: "Community" },
  { id: "12", title: "Children's Park", description: "Safe, imaginative play spaces for young residents.", icon: "Baby", category: "Community" },
];
