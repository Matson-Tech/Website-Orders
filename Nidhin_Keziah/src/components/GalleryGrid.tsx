
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryGridProps {
  images: string[];
  limit?: number;
}

export default function GalleryGrid({ images, limit }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayImages = limit ? images.slice(0, limit) : images;
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayImages.map((image, index) => (
          <div 
            key={index} 
            className="aspect-[3/4] overflow-hidden rounded-lg border border-gold/20 shadow-sm hover:shadow-md transition-all cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Aswin and Priya - photo ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-hidden p-1">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
