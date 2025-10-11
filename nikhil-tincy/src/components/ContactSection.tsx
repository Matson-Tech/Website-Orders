import React from "react";
import {
  Phone,
  Mail,
  Heart,
  MessageCircle,
  MapPin,
  Calendar,
} from "lucide-react";
import { EditableText } from "./EditableText";
import { useContent } from "@/contexts/ContentContext";
import { motion } from "framer-motion";
export const ContactSection: React.FC = () => {
  const { content, updateContent } = useContent();

  const updateContactField = (
    person: "bride" | "groom",
    field: string,
    value: string
  ) => {
    updateContent("contact", {
      ...content.contact,
      [person]: { ...content.contact[person], [field]: value },
    });
  };

  // Get names from hero section, fallback to contact names
  const brideName =
    content?.hero?.brideName || content.contact.bride.name || "Bride";
  const groomName =
    content?.hero?.groomName || content.contact.groom.name || "Groom";

  const contactCards = [
    {
      person: "groom" as const,
      data: content.contact.groom,
      name: brideName, // Fixed: bride name for groom card
      role: "The Groom",
      bgColor: "bg-rose-500",
      accentColor: "bg-rose-100",
      textColor: "text-rose-600",
    },
    {
      person: "bride" as const,
      data: content.contact.bride,
      name: groomName, // Fixed: groom name for bride card
      role: "The Bride",
      bgColor: "bg-rose-500",
      accentColor: "bg-rose-100",
      textColor: "text-rose-600",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-rose-400 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-rose-300 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-purple-400 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-pink-300 rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-pink-300 rounded-full"></div>
        </div>
      </div>

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl font-bold text-rose-500 mb-6">
            Get in Touch
          </h2>
          <div className="decorative-border mx-auto mb-8"></div>
          <p className="sans-font text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our special day? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {contactCards.map((card, index) => (
              <div
                key={card.person}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-100/50 relative overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Decorative corner elements */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${card.accentColor} rounded-full -translate-y-16 translate-x-16 opacity-60`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-24 h-24 ${card.accentColor} rounded-full translate-y-12 -translate-x-12 opacity-40`}
                ></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div
                      className={`w-20 h-20 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                    >
                      <Heart className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="serif-font text-3xl font-bold text-gray-800 mb-2">
                      {card.name}
                    </h3>
                    <p
                      className={`sans-font text-lg ${card.textColor} font-medium`}
                    >
                      {card.role}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                      <div
                        className={`${card.bgColor} p-3 rounded-full shadow-lg flex-shrink-0`}
                      >
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                        <EditableText
                          value={card.data.phone}
                          onSave={(value) =>
                            updateContactField(card.person, "phone", value)
                          }
                        >
                          <a
                            href={`tel:${card.data.phone}`}
                            className="sans-font text-gray-800 hover:text-rose-600 transition-colors text-lg font-medium"
                          >
                            {card.data.phone}
                          </a>
                        </EditableText>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                      <div
                        className={`${card.bgColor} p-3 rounded-full shadow-lg flex-shrink-0`}
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <EditableText
                          value={card.data.email}
                          onSave={(value) =>
                            updateContactField(card.person, "email", value)
                          }
                        >
                          <a
                            href={`mailto:${card.data.email}`}
                            className="sans-font text-gray-800 hover:text-rose-600 transition-colors text-lg font-medium break-all"
                          >
                            {card.data.email}
                          </a>
                        </EditableText>
                      </div>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div
                      className={`w-2 h-2 ${card.bgColor} rounded-full opacity-60`}
                    ></div>
                    <div
                      className={`w-2 h-2 ${card.bgColor} rounded-full opacity-50`}
                    ></div>
                    <div
                      className={`w-2 h-2 ${card.bgColor} rounded-full opacity-40`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Contact Info */}
          <div className="bg-rose-500 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Geometric decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/10 rotate-45"></div>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h3 className="serif-font text-2xl md:text-3xl font-bold mb-4">
                  We Can't Wait to Celebrate With You!
                </h3>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="sans-font text-lg opacity-90 max-w-2xl mx-auto leading-relaxed mb-8">
                  For any questions about the engagement, transportation, or
                  special arrangements, please don’t hesitate to reach out to
                  either of us.
                </p>
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80">Engagement Date</p>
                    <p className="font-semibold">{content.hero.date}</p>
                  </div>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80">Engagement Location</p>
                    <p className="font-semibold">{content.hero.venue}</p>
                  </div>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80">Response Time</p>
                    <p className="font-semibold">Within 24 hours</p>
                  </div>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
