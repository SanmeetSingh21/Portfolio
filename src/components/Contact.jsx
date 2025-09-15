// // src/components/Contact.jsx
// import React, { useState } from "react";
// import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

// export default function Contact() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <section id="contact" className="py-20 flex justify-center">
//       <div
//         className="flip-card w-[600px] h-[320px]"  // 👈 bigger width & height
//         onClick={() => setIsFlipped(!isFlipped)}
//       >
//         <div
//           className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}
//         >
//           {/* Front side */}
//           <div className="flip-card-front flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Let’s build something together 🚀
//             </h2>
//             <p className="mt-4 text-gray-600 text-base leading-relaxed">
//               I work on MERN stack apps, computer vision integrations,
//               and performance-optimized frontends.  <br></br>
//             </p><br></br>
//             <h3 className="text-1 font-bold text-gray-900">
//               *Hover over or click this card to reveal my contact details.*
//             </h3>

//           </div>

//           {/* Back side */}
//           <div className="flip-card-back flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#1B263B] to-[#415A77] text-white p-8 text-center">
//             <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

//             <div className="space-y-2 text-sm">
//               <p className="flex items-center gap-2">
//                 <FaEnvelope /> sanmeetsingh2121@gmail.com
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaPhone /> +91 9354349259
//               </p>
//             </div>

//             <div className="flex gap-8 mt-6">
//               <a
//                 href="https://www.linkedin.com/in/singh-sanmeet/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400 transition"
//               >
//                 <FaLinkedin size={28} />
//               </a>
//               <a
//                 href="https://github.com/SanmeetSingh21"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-300 transition"
//               >
//                 <FaGithub size={28} />
//               </a>
//             </div>

//             <p className="mt-5 text-xs opacity-80">
//               Tap anywhere outside buttons to flip back
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto flex justify-center">
        <div
          className="flip-card w-full sm:w-[520px] h-auto"
          onClick={() => setIsFlipped(!isFlipped)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsFlipped(!isFlipped);
          }}
        >
          <div
            className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}
            style={{ minHeight: "260px" }}
          >
            {/* FRONT */}
            <div className="flip-card-front card-front bg-white rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Let’s build something together 🚀
              </h2>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                I work on MERN stack apps, computer vision integrations, and performance-optimized
                frontends.</p><br></br>
                <p> *Hover or click this card to reveal my contact details.*
              </p>
            </div>

            {/* BACK */}
            <div
              className="flip-card-back card-back rounded-2xl p-6 sm:p-8 text-center text-white flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg,#415A77,#1B263B)" }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Contact Me</h3>

              <div className="space-y-3 text-sm sm:text-base">
                <p className="flex items-center justify-center gap-3">
                  <FaEnvelope />{" "}
                  <a href="mailto:sanmeetsingh2121@gmail.com" className="underline">
                    sanmeetsingh2121@gmail.com
                  </a>
                </p>

                <p className="flex items-center justify-center gap-3">
                  <FaPhone /> <a href="tel:+919876543210" className="underline">+91 9354349259</a>
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 mt-5">
                <a href="https://www.linkedin.com/in/singh-sanmeet/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-300">
                  <FaLinkedin size={26} />
                </a>
                <a href="https://github.com/SanmeetSingh21" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300">
                  <FaGithub size={26} />
                </a>
              </div>

              <p className="mt-4 text-xs opacity-80">Tap anywhere to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
