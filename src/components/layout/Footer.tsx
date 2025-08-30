import { Link } from "react-router-dom"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-gradient-medical p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Med Sahayak</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted companion for health guidance and medical prescriptions in India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/symptom-checker" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Symptom Checker
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Emergency</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-medical-error" />
                <span>108 - Ambulance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-medical-error" />
                <span>102 - Medical Helpline</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-medical-error" />
                <span>1075 - COVID Helpline</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@medsahayak.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Med Sahayak. All rights reserved. | 
            <span className="text-medical-error font-medium"> Disclaimer: This is not a substitute for professional medical advice.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer