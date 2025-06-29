import React, { useState } from 'react';
import { Video } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoSrc?: string; // YouTube URL or local video URL
  thumbnailSrc: string; // Not used but kept for interface compatibility
  title?: string;
  autoPlay?: boolean;
  className?: string;
}

const VideoPlayer = ({
  videoSrc,
  thumbnailSrc,
  title,
  autoPlay = false,
  className,
}: VideoPlayerProps) => {
  const [error, setError] = useState<string | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/live\/)([^"&?\/\s]{11})/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      if (!videoId) {
        console.error('Invalid YouTube URL:', url);
        setError('Invalid YouTube URL');
        return null;
      }
      // Add autoplay and mute parameters if autoPlay is true
      const params = autoPlay ? '?autoplay=1&mute=1&rel=0&enablejsapi=1&controls=1' : '?rel=0&enablejsapi=1&controls=1';
      return `https://www.youtube.com/embed/${videoId}${params}`;
    } catch (err) {
      console.error('Error parsing YouTube URL:', err);
      setError('Error loading YouTube video');
      return null;
    }
  };

  const isYouTubeVideo = videoSrc && (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be'));
  const youtubeEmbedUrl = isYouTubeVideo && videoSrc ? getYouTubeEmbedUrl(videoSrc) : null;

  return (
    <div className={cn("relative rounded-lg overflow-hidden shadow-lg", className)}>
      {/* YouTube video player */}
      {youtubeEmbedUrl && !error && (
        <div className="relative w-full aspect-video">
          <iframe
            src={youtubeEmbedUrl}
            className="w-full h-full"
            title={title || "YouTube video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onError={() => setError('Failed to load YouTube video')}
          />
        </div>
      )}

      {/* Local video player (fallback for non-YouTube videos) */}
      {videoSrc && !isYouTubeVideo && !error && (
        <div className="relative w-full">
          <video
            src={videoSrc}
            className="w-full aspect-video"
            autoPlay={autoPlay}
            muted={autoPlay} // Mute for local videos to ensure autoplay
            controls
            onError={() => setError('Failed to load video')}
          />
        </div>
      )}

      {/* Error or fallback message */}
      {(!videoSrc || error) && (
        <div className="w-full aspect-video bg-gray-100 flex flex-col items-center justify-center text-muted-foreground">
          <Video size={48} className="mb-4 opacity-50" />
          <p>{error || 'Video will be available soon'}</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;