import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Camera, Clock, Aperture } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryData";

const GalleryDetail = () => {
  const { id } = useParams();
  const index = galleryImages.findIndex((img) => img.id === id);

  if (index === -1) return <Navigate to="/gallery" replace />;

  const image = galleryImages[index];
  const prev = index > 0 ? galleryImages[index - 1] : null;
  const next = index < galleryImages.length - 1 ? galleryImages[index + 1] : null;

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen pt-28 pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Gallery
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
            <div className="lg:col-span-3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-black text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  {image.caption}
                </h1>
                <p className="text-amber-600 font-medium">by {image.student}</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-5">
                <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">{image.course}</p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{image.description}</p>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="text-black font-semibold text-sm tracking-wider uppercase">Technical Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Camera className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{image.camera}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Aperture className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{image.settings}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{image.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
            {prev ? (
              <Link
                to={`/gallery/${prev.id}`}
                className="flex items-center gap-3 group"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Previous</p>
                  <p className="text-black font-medium group-hover:text-amber-600 transition-colors">{prev.caption}</p>
                </div>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                to={`/gallery/${next.id}`}
                className="flex items-center gap-3 text-right group"
              >
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Next</p>
                  <p className="text-black font-medium group-hover:text-amber-600 transition-colors">{next.caption}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryDetail;
