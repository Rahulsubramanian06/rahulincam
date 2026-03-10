"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{opacity:0, y:60}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          RahulInCam
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.6}}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          Cinematic Photography & Storytelling
        </motion.p>

      </section>


      {/* PARALLAX IMAGE */}
      <section className="h-[120vh] flex items-center justify-center">

        <motion.img
          initial={{scale:1.3}}
          whileInView={{scale:1}}
          transition={{duration:1.2}}
          src="/myself_white.jpeg"
          className="rounded-xl w-[80%] shadow-2xl"
        />

      </section>


   {/* MASONRY GALLERY */}
<section className="px-10 pb-20">

  <div className="columns-1 md:columns-3 gap-6 space-y-6">

    {[
      "ppl1.jpeg",
      "ppl2.jpeg",
      "ppl3.jpeg",
      "ppl4.jpeg",
      "ppl5.jpeg",
      "re1.jpeg",
      "re2.jpeg",
      "kit.jpeg",
      "wed1.jpeg",
      "wed2.jpeg",
      "wed3.jpeg",
      "yellow_portrait.jpeg",
      "gimbal.jpeg"
    ].map((img,i)=>(

      <motion.img
        key={i}
        src={`/${img}`}
        whileHover={{scale:1.03}}
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:40}}
        transition={{duration:0.6}}
        className="w-full rounded-xl shadow-lg"
      />

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

  <motion.a
    href="mailto:rahul@rahulincam.com?subject=Photography Inquiry"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block mt-8 px-8 py-4 bg-white text-black rounded-xl transition"
  >
    Book a Shoot
  </motion.a>

</section>
      

    </main>
  )
}