"use client"

import { useState } from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    setError("")
    setLoading(true)

    setTimeout(() => {
      // Mock login logic
      if (email === "admin@smartbiz.com" && password === "123456") {
        alert("Login successful!")
        router.push("/dashboard") // normal admin dashboard
      } 
      else if (email === "staff@smartbiz.com" && password === "Temp1234") {
        // first-time login with temporary PIN
        router.push("/change-password")
      } 
      else {
        setError("Invalid email or password")
      }

      setLoading(false)
    }, 1000)
  }

  return (
    <main className="flex min-h-screen">

      {/* Branding panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-700 to-emerald-500 text-white flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-bold mb-6">SmartBiz Namibia</h1>
        <p className="text-lg text-center max-w-md mb-8">
          Manage inventory, sales, and profits efficiently.
        </p>
        <div className="space-y-3 text-sm opacity-90">
          <p>📦 Inventory Tracking</p>
          <p>💰 Sales Management</p>
          <p>📊 Profit Reports</p>
        </div>
      </div>

      {/* Login panel */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-6">Login to continue</p>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg p-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="text-right text-sm">
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            If you don't have an account, contact your administrator.
          </p>
        </div>
      </div>
    </main>
  )
}