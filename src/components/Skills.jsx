import React from "react";
import { motion } from "framer-motion";

/*
  Skills.jsx
  - Uses icons from /public/icons/<name>.svg
  - Animated progress bars (Framer Motion)
  - Grid grouped into Core / Tools
  - Filenames expected: react.svg, javascript.svg, nodejs.svg, mongodb.svg,
    python.svg, opencv.svg, yolov8.svg, git.svg, figma.svg
*/

const SKILLS = [
  { id: "react", name: "React", group: "Core", level: 92, color: "#61DAFB", icon: "/icons/react.svg" },
  { id: "javascript", name: "JavaScript", group: "Core", level: 90, color: "#F7DF1E", icon: "/icons/javascript.svg" },
  { id: "nodejs", name: "Node.js", group: "Core", level: 82, color: "#3C873A", icon: "/icons/nodejs.svg" },
  { id: "mongodb", name: "MongoDB", group: "Core", level: 78, color: "#47A248", icon: "/icons/mongodb.svg" },
  { id: "python", name: "Python", group: "Core", level: 74, color: "#3572A5", icon: "/icons/python.svg" },

  { id: "opencv", name: "OpenCV", group: "Tools", level: 72, color: "#2D8CFF", icon: "/icons/opencv.svg" },
  { id: "yolov8", name: "YOLOv8", group: "Tools", level: 70, color: "#FF7A59", icon: "/icons/yolov8.svg" },
  { id: "git", name: "Git", group: "Tools", level: 86, color: "#F05032", icon: "/icons/git.svg" },
  { id: "figma", name: "Figma", group: "Tools", level: 68, color: "#F24E1E", icon: "/icons/figma.svg" }
];

function IconImg({ src, name, size = 40 }) {
  return (
    <img
      src={src}
      alt={name}
      className="w-10 h-10 object-contain"
      onError={(e) => {
        // fallback to placeholder if the icon isn't found
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/icons/placeholder.svg";
      }}
      style={{ width: size, height: size }}
    />
  );
}

export default function Skills() {
  const groups = SKILLS.reduce((acc, s) => {
    acc[s.group] = acc[s.group] || [];
    acc[s.group].push(s);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.keys(groups).map((group) => (
          <div key={group} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{group}</h3>
              <div className="text-sm text-gray-500">{groups[group].length} items</div>
            </div>

            <div className="space-y-4">
              {groups[group].map((skill) => (
                <div key={skill.id} className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 rounded-lg bg-gray-50 p-2">
                    <IconImg src={skill.icon} name={skill.name} />
                  </div>

                  {/* Name + percent + progress */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900 truncate">{skill.name}</div>
                      <div className="text-xs text-gray-500 ml-4">{skill.level}%</div>
                    </div>

                    {/* Animated progress bar */}
                    <div
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                      className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, rgba(0,0,0,0.08))`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
