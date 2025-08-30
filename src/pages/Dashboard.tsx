import { useState } from "react"
import { Calendar, Download, Eye, FileText, History, Plus, Star, User } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { MedicalCard, MedicalCardContent, MedicalCardDescription, MedicalCardHeader, MedicalCardTitle } from "@/components/ui/medical-card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("prescriptions")

  const recentPrescriptions = [
    {
      id: 1,
      date: "2024-01-15",
      condition: "Common Cold",
      medicines: ["Paracetamol", "Cetirizine", "Throat lozenges"],
      status: "Active",
      severity: "Mild"
    },
    {
      id: 2,
      date: "2024-01-10",
      condition: "Headache",
      medicines: ["Aspirin", "Rest"],
      status: "Completed",
      severity: "Moderate"
    },
    {
      id: 3,
      date: "2024-01-05",
      condition: "Stomach Upset",
      medicines: ["ORS", "Probiotics"],
      status: "Completed",
      severity: "Mild"
    }
  ]

  const bookmarkedDoctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "General Physician",
      location: "Mumbai Central",
      rating: 4.8,
      distance: "2.5 km"
    },
    {
      name: "Dr. Raj Patel",
      specialty: "Internal Medicine",
      location: "Andheri West",
      rating: 4.6,
      distance: "5.1 km"
    }
  ]

  const healthStats = [
    { label: "Total Check-ups", value: "12", icon: FileText },
    { label: "Active Prescriptions", value: "1", icon: Calendar },
    { label: "Saved Doctors", value: "2", icon: User },
    { label: "Health Score", value: "85%", icon: Star }
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Health Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your health journey and manage your medical records
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {healthStats.map((stat, index) => (
            <MedicalCard key={index} variant="gradient" className="text-center">
              <MedicalCardContent className="p-4">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </MedicalCardContent>
            </MedicalCard>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="doctors">Saved Doctors</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="prescriptions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-primary">Your Prescriptions</h2>
              <Link to="/symptom-checker">
                <MedicalButton variant="medical">
                  <Plus className="h-4 w-4 mr-2" />
                  New Check-up
                </MedicalButton>
              </Link>
            </div>

            <div className="space-y-4">
              {recentPrescriptions.map((prescription) => (
                <MedicalCard key={prescription.id} variant="prescription">
                  <MedicalCardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">
                          {prescription.condition}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(prescription.date).toLocaleDateString('en-IN')}
                          </span>
                          <Badge 
                            variant={prescription.status === "Active" ? "default" : "secondary"}
                            className={prescription.status === "Active" ? "bg-medical-success" : ""}
                          >
                            {prescription.status}
                          </Badge>
                          <Badge variant="outline">
                            {prescription.severity}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <MedicalButton variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </MedicalButton>
                        <MedicalButton variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </MedicalButton>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Prescribed Medicines:</h4>
                      <div className="flex flex-wrap gap-2">
                        {prescription.medicines.map((medicine, index) => (
                          <Badge key={index} variant="secondary" className="bg-medical-blue-light text-primary">
                            {medicine}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </MedicalCardContent>
                </MedicalCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-primary">Saved Doctors</h2>
              <MedicalButton variant="medical">
                <Plus className="h-4 w-4 mr-2" />
                Find Doctors
              </MedicalButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookmarkedDoctors.map((doctor, index) => (
                <MedicalCard key={index} variant="interactive">
                  <MedicalCardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-primary">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <span className="font-medium">Location:</span>
                        <span className="ml-2">{doctor.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Distance:</span>
                        <span className="ml-2">{doctor.distance}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <MedicalButton variant="medical" size="sm" className="flex-1">
                        Book Appointment
                      </MedicalButton>
                      <MedicalButton variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </MedicalButton>
                    </div>
                  </MedicalCardContent>
                </MedicalCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <MedicalCard variant="default">
              <MedicalCardHeader>
                <MedicalCardTitle>Profile Information</MedicalCardTitle>
                <MedicalCardDescription>
                  Manage your personal and medical information
                </MedicalCardDescription>
              </MedicalCardHeader>
              <MedicalCardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-md"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border rounded-md"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Age</label>
                    <input 
                      type="number" 
                      className="w-full p-3 border rounded-md"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Medical History</label>
                  <textarea 
                    className="w-full p-3 border rounded-md h-24"
                    placeholder="Any chronic conditions, allergies, or important medical history..."
                  />
                </div>

                <MedicalButton variant="medical" size="lg">
                  Update Profile
                </MedicalButton>
              </MedicalCardContent>
            </MedicalCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard