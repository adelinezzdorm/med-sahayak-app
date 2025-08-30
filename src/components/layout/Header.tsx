import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, User, Heart } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/symptom-checker", label: "Symptom Checker" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-full bg-gradient-medical p-2">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">Med Sahayak</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href) 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <MedicalButton variant="ghost" size="sm">
              Login
            </MedicalButton>
          </Link>
          <Link to="/signup">
            <MedicalButton variant="medical" size="sm">
              Sign Up
            </MedicalButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors",
                  isActive(item.href) 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <MedicalButton variant="ghost" size="sm" className="w-full">
                  Login
                </MedicalButton>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <MedicalButton variant="medical" size="sm" className="w-full">
                  Sign Up
                </MedicalButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header