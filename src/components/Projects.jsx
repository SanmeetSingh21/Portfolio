// src/components/Projects.jsx
import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Projects.jsx
 * - Responsive project cards
 * - Click media to open lightbox (image or video)
 * - Shows "View Code" and optional "Live Demo"
 * - Uses CSS variables for gradient styling (var(--primary-1), var(--primary-2))
 *
 * Make sure you have a placeholder image at: /images/placeholder.png
 */

const data = [
  {
    id: 1,
    title: "SmartEd",
    desc: "Centralized platform for course materials and video lectures (MERN).",
    tags: ["MERN"],
    img: "/images/media/smart-ed.png",
    github: "https://github.com/SanmeetSingh21/SmartEd",
    liveDemo: ""
  },
  {
    id: 2,
    title: "Smart Parking",
    desc: "YOLOv8 & EasyOCR with Arduino barrier control.",
    tags: ["Python", "OpenCV", "YoloV8"],
    media: { type: "video", src: "/images/media/parking.mp4", poster: "/images/parking-thumb.png" },
   
    github: "https://github.com/SanmeetSingh21/Smart-Parking-System",
    liveDemo: ""
  },
  {
    id: 3,
    title: "Medigen",
    desc: "Image → text tool for medicine details (React, OCR).",
    tags: ["React", "Python"],
    img: "/images/medigen-thumb.png",
    github: "https://github.com/SanmeetSingh21/Medigen",
    liveDemo: ""
  }
];

function Tag({ children }) {
  return (
    <span
      className="text-xs px-2 py-1 rounded-full font-medium"
      style={{
        background: "linear-gradient(90deg, rgba(99,102,241,0.10), rgba(37,99,235,0.06))",
        color: "var(--primary-1)",
      }}
    >
      {children}
    </span>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null); // { type: 'image'|'video', src, poster, title }
  const openLightbox = useCallback((media) => setLightbox(media), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  // close on escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeLightbox();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  // helper: safe image src (fallback to placeholder)
  const safeImg = (src) => src || "/images/placeholder.png";

  return (
    <section id="projects" className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Highlighted Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: p.id * 0.03 }}
            whileHover={{ translateY: -6 }}
            className="bg-white rounded-xl shadow p-4 border flex flex-col"
          >
            {/* Media area (clickable to open) */}
            <div className="relative h-44 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
              {/* If media is an object (future-proof), use it; otherwise use p.img */}
              {p.media && p.media.type === "video" ? (
                <>
                  <img
                    src={p.media.poster || safeImg(p.img)}
                    alt={p.media.alt || p.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() =>
                      openLightbox({
                        type: "video",
                        src: p.media.src,
                        poster: p.media.poster,
                        title: p.title,
                      })
                    }
                    aria-label={`Play ${p.title} demo`}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
                  >
                    <span className="inline-flex items-center gap-2 bg-white/95 text-black rounded-full px-3 py-2">
                      <FaExternalLinkAlt /> Play
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={safeImg(p.img)}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/placeholder.png";
                    }}
                  />
                  <button
                    onClick={() =>
                      openLightbox({
                        type: "image",
                        src: p.img || "/images/placeholder.png",
                        title: p.title,
                      })
                    }
                    aria-label={`Open ${p.title} image`}
                    className="absolute inset-0"
                    title="Open media"
                  />
                </>
              )}
            </div>

            {/* Content */}
            <div className="mt-4 flex flex-col flex-grow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>

                <div className="flex gap-2">
                  {(p.tags || []).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mt-2 text-sm flex-grow">{p.desc}</p>

              {/* CTA area */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition"
                    aria-label={`View ${p.title} code on GitHub`}
                  >
                    <FaGithub /> View Code
                  </a>

                  {p.liveDemo ? (
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 rounded bg-gray-100 text-gray-800 hover:bg-gray-200 transition inline-flex items-center gap-2"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                  ) : null}
                </div>

                <div className="text-xs text-gray-400">Click media to enlarge</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="w-full max-w-3xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "video" ? (
              <video
                controls
                src={lightbox.src}
                poster={lightbox.poster}
                className="w-full h-auto bg-black"
              />
            ) : (
              <img src={lightbox.src} alt={lightbox.title || "preview"} className="w-full h-auto object-contain bg-black" />
            )}

            <div className="p-3 flex items-center justify-between bg-black/90">
              <div className="text-sm text-gray-200">{lightbox.title}</div>
              <div>
                <button
                  onClick={closeLightbox}
                  className="px-3 py-2 rounded bg-white text-black font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
