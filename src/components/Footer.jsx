import { PawPrint } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white">
            <PawPrint className="w-4 h-4" />
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} StrayCare. All rights reserved.</p>
        </div>
        <div className="text-sm text-gray-500">Made with compassion for every paw.</div>
      </div>
    </footer>
  )
}
