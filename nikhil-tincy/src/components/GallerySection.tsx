import React, { useState } from 'react';
import { Plus, X, ArrowRight, Camera, Images, Eye, Heart, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useContent } from '@/contexts/ContentContext';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Photo Item Component
interface SortablePhotoItemProps {
  photo: { id: string; url: string; alt: string };
  index: number;
  isAuthenticated: boolean;
  onImageClick: (url: string) => void;
}

const SortablePhotoItem: React.FC<SortablePhotoItemProps> = ({ photo, index, isAuthenticated, onImageClick }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: photo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className="group relative animate-fade-in-up"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-rose-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-rose-200">
          {/* Drag Handle - Only show when authenticated */}
          {isAuthenticated && (
            <div
              {...attributes}
              {...listeners}
              className="absolute top-2 left-2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg hover:bg-white transition-colors"
            >
              <GripVertical className="w-4 h-4 text-rose-500" />
            </div>
          )}
          
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt || `Gallery image ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Hover Controls */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button
                variant="ghost"
                size="lg"
                className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-rose-500 hover:text-rose-600 shadow-lg"
                onClick={() => onImageClick(photo.url)}
              >
                <Eye className="w-8 h-8" />
              </Button>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-rose-100 rounded-full opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-pink-100 rounded-full opacity-40"></div>
        </div>
      </div>
    </motion.div>
  );
};

export const GallerySection: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { content, reorderGalleryPhotos } = useContent();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get all photos from the gallery (not just first 3, so reordering works properly)
  const gallery = content.gallery || { title: 'Gallery', photos: [] };
  const allPhotos = gallery.photos;
  const displayPhotos = allPhotos.slice(0, 3);

  // Set up sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag end event
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = allPhotos.findIndex((photo) => photo.id === active.id);
    const newIndex = allPhotos.findIndex((photo) => photo.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const reorderedPhotos = arrayMove(allPhotos, oldIndex, newIndex);
      
      try {
        await reorderGalleryPhotos(reorderedPhotos);
      } catch (error) {
        console.error('Failed to reorder photos:', error);
      }
    }
  };

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-rose-400 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-rose-300 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-pink-400 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-rose-300 rotate-45"></div>
        </div>
      </div>

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
           <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl font-bold text-rose-500 mb-6">
            Gallery
          </h2>
          </motion.p>
          <div className="decorative-border mx-auto mb-8"></div>
           <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
          <p className="sans-font text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Capturing the beautiful moments of our journey together
          </p>
          </motion.p>
        </div>

        {/* Modern Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          {displayPhotos.length > 0 ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={allPhotos.map((photo) => photo.id)}
                strategy={rectSortingStrategy}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayPhotos.map((photo, index) => (
                    <SortablePhotoItem
                      key={photo.id}
                      photo={photo}
                      index={index}
                      isAuthenticated={isAuthenticated}
                      onImageClick={setSelectedImage}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-rose-100/50 max-w-md mx-auto">
               <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Images className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-rose-500 rounded-full animate-pulse opacity-20"></div>
                </div>
                </motion.p>
                 <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                <h3 className="serif-font text-2xl font-semibold text-gray-800 mb-4">
                  Gallery Coming Soon
                </h3>
                </motion.p>
                 <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                <p className="sans-font text-gray-600 leading-relaxed">
                  We're preparing beautiful memories to share with you. Check back soon!
                </p>
                </motion.p>
              </div>
            </div>
          )}
        </div>

        {/* View Full Gallery Button */}
        {displayPhotos.length > 0 && (
           <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
          <div className="text-center mt-16">
            <Link to="/gallery">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-medium group">
                <Images className="w-6 h-6 mr-3" />
                View Full Gallery
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          </motion.p>
        )}

        {/* Bottom Message */}
        <div className="mt-20 text-center">
           <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-rose-100">
            <Heart className="w-6 h-6 text-rose-500" />
            <p className="script-font text-xl text-gray-700">Every picture tells our story</p>
            <Heart className="w-6 h-6 text-rose-500" />
          </div>
          </motion.p>
        </div>

        {/* Enhanced Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                 <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 shadow-lg"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
                </motion.p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
