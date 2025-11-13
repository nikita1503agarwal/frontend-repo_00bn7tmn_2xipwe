import { motion } from 'framer-motion'
import { PawPrint, Heart, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-indigo-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-600">
            <PawPrint className="w-4 h-4 text-blue-600" /> Together, we can help strays find safety and love
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Give every stray a chance at a better life
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Report a sighting, adopt a friend, volunteer your time, or donate to support rescue and care.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#report" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow">
              <MapPin className="w-5 h-5" /> Report Sighting
            </a>
            <a href="#adopt" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition shadow">
              <Heart className="w-5 h-5 text-pink-600" /> Adopt
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {["rescues", "adoptions", "volunteers"].map((k, i) => (
              <motion.div key={k} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1}} className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-4 shadow-sm">
                <p className="text-2xl font-bold text-gray-900">{[1200, 650, 300][i]}+</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">{k}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <img src="https://images.unsplash.com/photo-1642800978612-381279a6376b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXBweSUyMHJlc2N1ZWQlMjBkb2d8ZW58MHwwfHx8MTc2MzA1NjIxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Happy rescued dog" className="w-full h-[420px] object-cover" />
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-xl p-4 flex items-center gap-3">
              <PawPrint className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-700">Your support helps provide shelter, medical care, and loving homes.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -bottom-6 -right-6 bg-white rounded-2xl border border-gray-200 shadow p-4 w-56">
            <p className="text-xs text-gray-500">Latest sighting</p>
            <p className="font-semibold text-gray-800">Young brown dog near Central Park</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
