import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Web Development Intern — Creations Media",
    when: "Aug 2024 – Dec 2024",
    desc: [
      "Developed and maintained full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js) for multiple client projects.",
      "Built reusable React components and responsive UIs with Tailwind, ensuring mobile-first design.",
      "Integrated REST APIs with secure authentication and optimized backend queries in Node.js and MongoDB.",
      "Improved website performance through lazy loading, code splitting, and image optimization.",
      "Collaborated with designers and backend engineers to deliver accessible, SEO-friendly web applications."
    ],
    icon: "/icons/laptop.svg",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Tailwind", "API Integration"],
    type: "work",
  },
  {
    id: 2,
    title: "Graphic Design Intern — Growth Pixel",
    when: "May 2022 – Aug 2022",
    desc: [
      "Designed marketing collateral, social media campaigns, and pitch decks consistent with brand guidelines.",
      "Prepared print-ready files and optimized exports to reduce costs and turnaround time.",
      "Streamlined team workflow by creating reusable design templates, cutting delivery times by ~30%."
    ],
    icon: "/icons/design.svg",
    tags: ["Branding", "Illustration", "Print Production"],
    type: "work",
  },
  {
    id: 3,
    title: "B.Tech, Information Technology — Guru Nanak Dev Engg College",
    when: "2021 – 2025",
    desc: [
      "CGPA: 7.5 / 10",
      
    ],
    icon: "/icons/school.svg",
    tags: ["Web Development", "Computer Vision", "Databases"],
    coursework: [
      "Data Structures & Algorithms",
      "Web Development (MERN Stack)",
      "Database Management Systems (SQL & MongoDB)",
      "Cloud Computing & Deployment",
      "API Design & Integration",
      "Operating Systems"
    ],
    type: "education",
  },
];

function IconImg({ src, alt, size = 40 }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="w-8 h-8 object-contain"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/icons/placeholder.svg";
      }}
    />
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="py-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Experience & Education</h2>
      </div>

      <div className="relative pl-8">
        {/* vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" aria-hidden />

        <div className="space-y-6">
          {items.map((it, idx) => (
            <motion.article
              key={it.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="relative group"
            >
              {/* icon only (no circle background) */}
              <div className="absolute -left-[30px] top-1">
                <IconImg src={it.icon} alt={it.title} />
              </div>

              {/* card */}
              <div className="bg-white rounded-xl p-5 border hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="pr-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>

                    {/* tech tags */}
                    {it.tags && it.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {it.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* description */}
                    <div className="mt-3 space-y-2 text-sm text-gray-600">
                      {Array.isArray(it.desc)
                        ? it.desc.map((d, i) => <p key={i}>{d}</p>)
                        : <p>{it.desc}</p>}
                    </div>

                    {/* coursework (education only) */}
                    {it.coursework && (
                      <div className="mt-3">
                        <div className="text-sm font-medium text-gray-800 mb-2">Relevant coursework</div>
                        <div className="flex flex-wrap gap-2">
                          {it.coursework.map((c) => (
                            <span key={c} className="text-xs px-2 py-1 rounded bg-gray-50 border text-gray-700">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-shrink-0 text-right pt-1 md:pt-0">
                    <div className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {it.when}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
