'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const roles = ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT']

export default function OnboardingPage() {
  const [role, setRole] = useState<string>('STUDENT')
  const [schoolCode, setSchoolCode] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await axios.post('/api/onboarding', { role, schoolCode })
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    // Modern Gradient Background
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-emerald-100 p-6">
      
      {/* Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-indigo-500/10">
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Welcome Aboard
          </h1>
          <p className="text-slate-500 text-sm">
            Let's personalize your experience. Choose your role to begin.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Modern Role Selection (Chips instead of Radios) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3!">
              I am a...
            </label>
            <div className="grid grid-cols-2 gap-3!">
              {roles.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-200 ${
                    role === r
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200 ring-2 ring-indigo-600 ring-offset-2'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Styled Input Field */}
          <div className="space-y-2!">
            <label className="block text-sm font-semibold text-slate-700">
              School Access Code
            </label>
            <input
              type="text"
              value={schoolCode}
              onChange={(e) => setSchoolCode(e.target.value.toUpperCase())}
              placeholder="e.g. SCH-1234"
              className="w-full bg-white/50 border border-slate-200 rounded-xl p-3.5! text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all uppercase tracking-widest font-mono"
              required
            />
          </div>

          {error && (
            <div className="p-3! rounded-lg bg-red-50 border border-red-100 text-red-600 text-xs font-medium animate-pulse">
              ⚠️ {error}
            </div>
          )}

          {/* High-End Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full relative group overflow-hidden bg-slate-900 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Setting things up...
                </>
              ) : (
                'Complete Setup'
              )}
            </span>
          </button>
        </form>

        <footer className="mt-8 text-center text-slate-400 text-xs">
          Need help? <span className="text-indigo-500 hover:underline cursor-pointer">Contact Administrator</span>
        </footer>
      </div>
    </div>
  )
}