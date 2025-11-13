import { motion } from 'framer-motion'
import { HeartHandshake, MapPinned, Users, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Adopt & Foster',
    description: 'Browse animals ready for adoption or offer a loving foster home.',
    icon: HeartHandshake,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Report Sightings',
    description: 'Quickly report where you saw a stray so rescuers can help fast.',
    icon: MapPinned,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Volunteer Network',
    description: 'Join our rescue, transport, and outreach teams and make impact.',
    icon: Users,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Medical Support',
    description: 'We work with vets to give immediate care to injured animals.',
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-600'
  }
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">A community-driven platform to protect, rescue and rehome strays.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`absolute inset-x-0 -top-20 h-40 bg-gradient-to-r ${f.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="p-6 relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow` }>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
