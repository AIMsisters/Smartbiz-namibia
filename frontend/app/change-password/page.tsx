"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ChangePassword() {
  const router = useRouter()
  const [tempPassword, setTempPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault()
    if (!tempPassword || !newPassword || !confirmPassword) {
      setError("Please fill all fields")
      return
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setError("")
    setLoading(true)

    // Mock password change
    setTimeout(() => {
      alert("Password changed successfully! Login with your new password.")
      router.push("/") // redirect to login
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4">Change Password</h2>
        <p className="text-center text-gray-500 mb-6">
          This is your first login. Set a new password.
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleChange} className="space-y-4">
          <input
            type="password"
            placeholder="Temporary password"
            value={tempPassword}
            onChange={(e) => setTempPassword(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {loading ? "Saving..." : "Save New Password"}
          </button>
        </form>
      </div>
    </main>
  )
}