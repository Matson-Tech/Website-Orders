
import React from 'react';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';


import img1 from '@/assets/image1.jpg';
import img2 from '@/assets/image2.jpg';
import img3 from '@/assets/image3.jpg';
import img4 from '@/assets/image4.jpg';
import img5 from '@/assets/image5.jpg';
import img6 from '@/assets/image6.jpg';
import img7 from '@/assets/image7.jpg';

const Gallery = () => {
  // New images from the gallery uploads
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Our Journey Together" />
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Browse through our favorite memories - from our first dates to our engagement celebrations in traditional attire.
          </p>
        </div>
        
        <GalleryGrid images={images} />
        
        <div className="mt-12 text-center">
          {/* <p className="text-muted-foreground mb-6">
            More photos will be added after our engagement ceremony on December 25th, 2025
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
