import React from 'react';
import PageHeader from '@/components/PageHeader';
import VideoPlayer from '@/components/VideoPlayer';
import { Play } from 'lucide-react';

const WatchLive = () => {
  const liveImage = '/lovable-uploads/fbae7968-2e39-4996-bf30-c426af6c405e.png';
  
  // Sample YouTube Live video URL - replace with your actual video URL when available
  const videoUrl = "https://www.youtube.com/live/_I0n9JYO5ic?si=Rk3sRNdvdFRJgPRg"; // Set to your video URL when you have one
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Watch Live" accent="." />
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Can't make it to our wedding? You can still be part of our special day by watching the live stream.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <VideoPlayer 
            videoSrc={videoUrl}
            thumbnailSrc={liveImage}
            title="Wedding Live Stream"
            className="mb-8"
          />
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gold/20 mb-12">
            <h3 className="text-2xl font-serif text-gold mb-4">Live Stream Details</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Date:</span>
                <span>December 25, 2025</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Start Time:</span>
                <span>10:00 AM IST (Indian Standard Time)</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Platform:</span>
                <span>YouTube Live</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium min-w-[120px]">Channel:</span>
                <span>Aswin & Priya Wedding</span>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.youtube.com/channel/UC-your-channel-id" // Replace with actual channel URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium inline-flex items-center"
            >
              <Play size={18} className="mr-2" />
              Subscribe to Channel
            </a>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our channel to get notified when we go live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;