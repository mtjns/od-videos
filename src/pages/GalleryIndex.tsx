import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryData";

const GalleryIndex = () => (
  <>
    <Header />
    <div className="bg-white min-h-screen pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-bold tracking-tight mb-4">Student Gallery</h1>
        <p className="text-gray-600 text-xl mb-16">
          Exceptional work from Shutter Theory graduates — proof that great photography can be learned.
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <Link
              to={`/gallery/${img.id}`}
              key={img.id}
              className="break-inside-avoid group cursor-pointer relative block"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-xl transition-all flex items-end">
                <div className="p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-lg">{img.caption}</p>
                  <p className="text-white/70 text-sm mt-1">by {img.student}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default GalleryIndex;
