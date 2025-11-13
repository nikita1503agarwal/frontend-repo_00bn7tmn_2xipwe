import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="donate" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold">Your kindness saves lives</h3>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">Every contribution helps fund rescues, medical care, food and shelter. Join our mission to make every stray safe and loved.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#volunteer" className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow hover:opacity-90">Become a volunteer</a>
            <a href="#report" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 font-semibold hover:bg-white/15">Report a sighting</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
