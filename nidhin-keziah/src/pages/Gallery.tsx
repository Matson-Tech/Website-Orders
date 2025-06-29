
import React from 'react';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';

const Gallery = () => {
  // New images from the gallery uploads
  const images = [
    '/lovable-uploads/c9f2734a-be22-44a9-9dae-de1b642f79ad.png',
    '/lovable-uploads/dad0bffa-467e-43ef-8205-b0290d3e7b8b.png',
    '/lovable-uploads/b82e247c-364b-4e6f-8513-603e75003644.png',
    '/lovable-uploads/3cb98056-8e84-4120-9dca-ef26a8884ea3.png',
    '/lovable-uploads/360ed0a4-45d7-4e43-8657-6730f1d6549e.png',
    '/lovable-uploads/2a035ac1-facf-47ef-b98f-48f038af143c.png',
    '/lovable-uploads/63441013-2638-4364-9ad8-5f727e362fd0.png',
    '/lovable-uploads/10773488-e998-49c1-a5f5-53b4b254b887.png',
    '/lovable-uploads/38f346de-0223-401e-9904-03be4c2cfa15.png',
    '/lovable-uploads/3b318d65-6c79-4259-9990-7151778d6816.png',
    '/lovable-uploads/5a755230-be42-495a-b9fb-9cced5c6fce3.png',
    '/lovable-uploads/578a1d93-946d-48cd-a428-1536c9cd99bb.png',
    '/lovable-uploads/e3c9e122-6ec1-4279-934b-776e832c0e99.png',
    '/lovable-uploads/5f703e7c-9589-43cf-afd3-a2f8191d9819.png',
    '/lovable-uploads/23504ddb-051c-4ebe-aa2e-15d747311bc6.png',
    '/lovable-uploads/b7860f15-fed0-4d8e-bfc4-3b92be17bb59.png',
    '/lovable-uploads/58fb7d74-3873-4c07-b8e8-3aeeb410a551.png',
    '/lovable-uploads/c5b5241f-3b1c-4ca6-b5b7-d2b1db975de9.png',
    '/lovable-uploads/5575e6c4-f4a7-4c18-be6d-136ec5d8d6de.png',
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
