import { PawPrint, HeartHandshake, MapPin, HandHeart, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <li>
        <a href="#adopt" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
          <HeartHandshake className="w-4 h-4" /> Adopt
        </a>
      </li>
      <li>
        <a href="#report" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Report Sighting
        </a>
      </li>
      <li>
        <a href="#volunteer" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
          <HandHeart className="w-4 h-4" /> Volunteer
        </a>
      </li>
      <li>
        <a href="#donate" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 shadow transition-colors">
          <HeartHandshake className="w-4 h-4" /> Donate
        </a>
      </li>
    </ul>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800">StrayCare</span>
          </a>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  )
}
