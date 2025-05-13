"use client"

import { useEffect, useState } from "react"

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    if (
      theme === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark")
      setTheme("dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
      setTheme("light")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <button id="theme-toggle" className="theme-toggle" aria-label="Alternar tema" onClick={toggleTheme}>
      <span className="material-icons light-icon">light_mode</span>
      <span className="material-icons dark-icon">dark_mode</span>
    </button>
  )
}

export default ThemeToggle
