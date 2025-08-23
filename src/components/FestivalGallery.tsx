import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface FestivalGalleryProps {
  images: string[];
  title: string;
}

const FestivalGallery: React.FC<FestivalGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  // Handle keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showLightbox) return;

      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox]);

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title} Gallery</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <OptimizedImage
              src={image}
              alt={`${title} celebration ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-orange-500 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="max-w-4xl max-h-screen p-4">
            <OptimizedImage
              src={images[currentIndex]}
              alt={`${title} celebration ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
          
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-orange-500 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalGallery;