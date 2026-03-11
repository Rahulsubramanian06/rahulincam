"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [showContactButtons, setShowContactButtons] = useState(false)
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* PARALLAX IMAGE */}
      <section className="h-screen flex items-center justify-center">

        <motion.div
          initial={{scale:1.3}}
          whileInView={{scale:1}}
          transition={{duration:1.2}}
          className="relative w-full h-full overflow-hidden"
        >
          <Image
            src="/myself_white.jpeg"
            alt="Rahul Portrait"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

      </section>
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{opacity:0, y:60}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1}}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          RahulInCam
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.6}}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          Cinematic Photography & Storytelling
        </motion.p>

      </section>




   {/* MASONRY GALLERY */}
<section className="px-10 pb-20">

  <div className="columns-1 md:columns-3 gap-6 space-y-6">

    {[
      "ppl1.jpeg",
      "ppl3.jpeg",
      "ppl4.jpeg",
      "wed2.jpeg",
      "ppl5.jpeg",
      "re1.jpeg",
      "re2.jpeg",
      "kit.jpeg",
      "wed1.jpeg",
      "wed3.jpeg",
      "yellow_portrait.jpeg",
      "gimbal.jpeg"
    ].map((img,i)=>(

      <motion.div
        key={i}
        whileHover={{scale:1.03}}
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:40}}
        transition={{duration:0.6}}
        className="w-full rounded-xl shadow-lg overflow-hidden break-inside-avoid"
      >
        <Image
          src={`/${img}`}
          alt={`Gallery image ${i + 1}`}
          width={400}
          height={500}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover rounded-xl"
        />
      </motion.div>

    ))}

  </div>

</section>


      {/* ABOUT */}
      <section className="py-40 text-center max-w-3xl mx-auto">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          className="text-5xl font-semibold"
        >
          About Rahul
        </motion.h2>

        <p className="mt-8 text-gray-400 leading-relaxed">
          I'm Rahul, a photographer capturing cinematic moments,
          travel stories, and emotions through my lens.
          My goal is to create visual stories that feel timeless.
        </p>

      </section>



{/* CONTACT */}
<section className="pb-40 text-center">

  <h2 className="text-4xl font-semibold">
    Let's Work Together
  </h2>

  <div className="mt-8">
    {!showContactButtons ? (
      <motion.button
        onClick={() => setShowContactButtons(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-8 py-4 bg-white text-black rounded-xl transition font-semibold text-lg shadow-lg hover:shadow-xl"
      >
        Book a Shoot
      </motion.button>
    ) : (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
      >
        {/* Email Button */}
        <motion.a
          href="mailto:rahulincam@gmail.com?subject=Photography Inquiry"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-xl transition font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl gap-2"
          onClick={() => setShowContactButtons(false)}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Email
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919788559791"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-xl transition font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl gap-2"
        >
          <Image
            src="/walogo.png"
            alt="WhatsApp"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          WhatsApp
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+919788559791"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-xl transition font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl gap-2"
          onClick={() => setShowContactButtons(false)}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call
        </motion.a>
      </motion.div>
    )}
  </div>

</section>
      

    </main>
  )
}