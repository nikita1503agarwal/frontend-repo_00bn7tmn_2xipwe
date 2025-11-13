import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 origin-left z-[60]" />
  )
}

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Register GSAP ScrollTrigger
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)

      // Reveal on scroll for elements with .reveal
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // Subtle parallax on images with .parallax-img
      gsap.utils.toArray('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="report" className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 reveal">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Report a sighting</h3>
              <p className="mt-3 text-gray-600">Help rescuers act quickly. Share details about the stray you saw and where.</p>
              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Location or landmark" />
                <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Other</option>
                </select>
                <input className="px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Notes (optional)" />
                <button type="button" className="col-span-1 sm:col-span-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Submit report</button>
              </form>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2 reveal">
              <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop" alt="Stray cat" className="w-full h-[360px] object-cover parallax-img" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="adopt" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto reveal">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured friends looking for a home</h3>
              <p className="mt-2 text-gray-600">Adopt today and change a life forever.</p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                name: 'Milo', species: 'Dog', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1600&auto=format&fit=crop'
              }, { name: 'Luna', species: 'Cat', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop' }, { name: 'Rocky', species: 'Dog', img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop' }].map((a, i) => (
                <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow reveal">
                  <div className="relative">
                    <img src={a.img} alt={a.name} className="w-full h-56 object-cover parallax-img" />
                    <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-900">{a.name}</p>
                    <p className="text-sm text-gray-500">{a.species}</p>
                    <a href="#" className="mt-3 inline-block text-blue-600 hover:text-blue-700 font-medium">Learn more →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="reveal">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Volunteer with us</h3>
              <p className="mt-3 text-gray-600">Join our network of rescuers, fosters, transporters, and advocates.</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {['Rescue & first aid', 'Foster & socialization', 'Transport to vets/shelters', 'Community outreach'].map((t) => (
                  <li key={t} className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-xl px-4 py-3"><span className="w-2 h-2 rounded-full bg-emerald-500" />{t}</li>
                ))}
              </ul>
              <button className="mt-6 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Sign up</button>
            </motion.div>
            <div className="reveal">
              <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1600&auto=format&fit=crop" alt="Volunteer with dog" className="w-full h-[360px] object-cover parallax-img" />
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
