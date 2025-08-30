import { Link } from "react-router-dom"
import { ArrowRight, Shield, Users, MapPin, CheckCircle } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { MedicalCard, MedicalCardContent, MedicalCardDescription, MedicalCardHeader, MedicalCardTitle } from "@/components/ui/medical-card"
import heroImage from "@/assets/medical-hero.jpg"
import symptomIcon from "@/assets/symptom-checker-icon.jpg"
import prescriptionIcon from "@/assets/prescription-icon.jpg"

const Home = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Free Medical Guidance",
      description: "Get reliable health guidance based on your symptoms, completely free of cost."
    },
    {
      icon: Users,
      title: "India-Specific Medicines",
      description: "Suggestions for medicines commonly available in Indian pharmacies with proper dosage."
    },
    {
      icon: MapPin,
      title: "Local Doctor Suggestions",
      description: "Find qualified doctors and medical facilities near your location."
    }
  ]

  const features = [
    {
      icon: symptomIcon,
      title: "Smart Symptom Checker",
      description: "Interactive step-by-step symptom analysis with AI-powered suggestions.",
      link: "/symptom-checker"
    },
    {
      icon: prescriptionIcon,
      title: "Digital Prescriptions",
      description: "Save, print, and manage your digital prescriptions securely.",
      link: "/dashboard"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 110, 253, 0.8), rgba(0, 184, 148, 0.8)), url(${heroImage})`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Health,
              <span className="block text-yellow-200">Our Priority</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Get instant medical guidance, symptom analysis, and prescription suggestions tailored for India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/symptom-checker">
                <MedicalButton variant="hero" size="xl" className="group">
                  Start Symptom Check
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </MedicalButton>
              </Link>
              <Link to="/signup">
                <MedicalButton 
                  variant="outline" 
                  size="xl" 
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  Create Account
                </MedicalButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Med Sahayak?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted healthcare guidance designed specifically for Indian users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <MedicalCard key={index} variant="floating" className="text-center">
                <MedicalCardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-medical rounded-full w-16 h-16 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <MedicalCardTitle className="text-xl">{benefit.title}</MedicalCardTitle>
                </MedicalCardHeader>
                <MedicalCardContent>
                  <MedicalCardDescription className="text-base">
                    {benefit.description}
                  </MedicalCardDescription>
                </MedicalCardContent>
              </MedicalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced healthcare tools at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <MedicalCard variant="interactive" className="text-center h-full">
                  <MedicalCardHeader>
                    <div className="mx-auto mb-4">
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <MedicalCardTitle className="text-xl">{feature.title}</MedicalCardTitle>
                  </MedicalCardHeader>
                  <MedicalCardContent>
                    <MedicalCardDescription className="text-base">
                      {feature.description}
                    </MedicalCardDescription>
                  </MedicalCardContent>
                </MedicalCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-medical text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of users who trust Med Sahayak for reliable health guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/symptom-checker">
                <MedicalButton 
                  variant="outline" 
                  size="xl" 
                  className="bg-white text-primary border-white hover:bg-white/90"
                >
                  Start Free Check-up
                </MedicalButton>
              </Link>
              <Link to="/signup">
                <MedicalButton 
                  variant="ghost" 
                  size="xl" 
                  className="text-white border-2 border-white hover:bg-white hover:text-primary"
                >
                  Create Account
                </MedicalButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home