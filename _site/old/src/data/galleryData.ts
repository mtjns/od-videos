import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  student: string;
  course: string;
  camera: string;
  settings: string;
  description: string;
  date: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "golden-hour-portrait",
    src: g1,
    alt: "Portrait in golden hour light",
    caption: "Golden Hour Portrait",
    student: "Aisha Thompson",
    course: "Advanced Composition",
    camera: "Sony A7III · 85mm f/1.4",
    settings: "f/1.8 · 1/500s · ISO 200",
    description: "Captured during the final workshop of our Advanced Composition course, Aisha waited for the perfect moment when the setting sun created a natural rim light. The shallow depth of field isolates the subject beautifully against the warm bokeh background, demonstrating mastery of aperture control and timing.",
    date: "October 14, 2023",
  },
  {
    id: "aerial-autumn",
    src: g2,
    alt: "Aerial landscape of autumn forest",
    caption: "Aerial Autumn",
    student: "David Kim",
    course: "Genre Specialization: Landscape",
    camera: "DJI Mavic 3 · Hasselblad 24mm",
    settings: "f/2.8 · 1/1000s · ISO 100",
    description: "David's drone work during the fall landscape workshop captured this stunning bird's-eye view of a winding river cutting through peak autumn foliage. The composition uses the river as a natural leading line, drawing the viewer's eye through the image while the vibrant reds and oranges create a tapestry of color.",
    date: "November 2, 2023",
  },
  {
    id: "urban-street",
    src: g3,
    alt: "Street photography candid moment",
    caption: "Urban Street",
    student: "Marcus Rivera",
    course: "Genre Specialization: Street",
    camera: "Fujifilm X-T5 · 23mm f/2",
    settings: "f/5.6 · 1/250s · ISO 400",
    description: "Shot during our downtown Portland street photography walk, Marcus captured this decisive moment of a passerby against vibrant street art. The contrast between the human figure and the bold graffiti creates visual tension, while the diagonal shadows add depth and movement to the frame.",
    date: "September 22, 2023",
  },
  {
    id: "macro-details",
    src: g4,
    alt: "Macro water droplets on rose petals",
    caption: "Macro Details",
    student: "Elena Vasquez",
    course: "Beginner Fundamentals",
    camera: "Canon R6 · 100mm Macro f/2.8L",
    settings: "f/4 · 1/160s · ISO 320",
    description: "Elena's macro work is a testament to patience and precision. These water droplets on rose petals were captured early morning at the Portland Japanese Garden, using a focus rail for pin-sharp detail. The image reveals a miniature world invisible to the naked eye — each droplet acting as a tiny lens reflecting the garden.",
    date: "August 18, 2023",
  },
  {
    id: "star-trails",
    src: g5,
    alt: "Star trails over mountain silhouette",
    caption: "Star Trails",
    student: "James Park",
    course: "Genre Specialization: Landscape",
    camera: "Nikon Z8 · 14-24mm f/2.8",
    settings: "f/2.8 · 30s × 240 frames · ISO 3200",
    description: "This stunning star trail composite was created from 240 individual 30-second exposures during our astrophotography night workshop at Mt. Hood. James stacked the images to create concentric circles of light around the North Star, with the mountain providing a dramatic anchoring foreground element.",
    date: "July 8, 2023",
  },
  {
    id: "bw-portrait",
    src: g6,
    alt: "Black and white dramatic portrait",
    caption: "B&W Portrait",
    student: "Sofia Andersson",
    course: "Studio Lighting Mastery",
    camera: "Canon R5 · 50mm f/1.2L",
    settings: "f/2.0 · 1/200s · ISO 100",
    description: "Created during our studio lighting intensive, Sofia used a single strip light with a grid to carve dramatic shadows across the subject's face. The conversion to black and white emphasizes the interplay between light and shadow, creating a timeless and emotionally charged portrait.",
    date: "December 1, 2023",
  },
  {
    id: "architecture",
    src: g7,
    alt: "Symmetrical architectural interior",
    caption: "Architecture",
    student: "Ryan O'Brien",
    course: "Advanced Composition",
    camera: "Sony A7RV · 16-35mm f/2.8 GM",
    settings: "f/8 · 1/60s · ISO 400",
    description: "Ryan's architectural study showcases perfect symmetry and geometric precision. Shot looking directly upward in a modern atrium, the converging lines create a powerful sense of depth. The even lighting and careful post-processing bring out the subtle color accents in the glass and steel structure.",
    date: "November 15, 2023",
  },
  {
    id: "food-styling",
    src: g8,
    alt: "Food photography flat lay",
    caption: "Food Styling",
    student: "Mei Lin Chen",
    course: "Genre Specialization: Commercial",
    camera: "Canon R6 Mark II · 35mm f/1.4L",
    settings: "f/5.6 · 1/125s · ISO 200",
    description: "Mei Lin's overhead flat lay demonstrates professional food styling techniques learned in our commercial photography module. The careful arrangement of fresh ingredients on marble creates a vibrant, editorial-quality image. Natural window light with a reflector provides soft, even illumination.",
    date: "October 28, 2023",
  },
  {
    id: "action-sports",
    src: g9,
    alt: "Surfer catching a wave",
    caption: "Action Sports",
    student: "Jake Morrison",
    course: "Advanced Composition",
    camera: "Nikon Z9 · 200-600mm f/5.6-6.3",
    settings: "f/6.3 · 1/2000s · ISO 640",
    description: "Captured during a weekend field trip to the Oregon coast, Jake froze this surfer mid-ride with impeccable timing. The high shutter speed captures every droplet of spray, while the telephoto compression creates an intimate perspective that puts the viewer right in the action.",
    date: "September 9, 2023",
  },
];
