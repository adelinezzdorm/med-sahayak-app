import { Link } from "react-router-dom"
import { ArrowLeft, Download, Printer, MapPin, AlertTriangle, Check } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { MedicalCard, MedicalCardContent, MedicalCardDescription, MedicalCardHeader, MedicalCardTitle } from "@/components/ui/medical-card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

const Results = () => {
  const analyzedSymptoms = ["Fever", "Headache", "Sore throat", "Body ache"]
  
  const possibleConditions = [
    {
      name: "Common Cold",
      probability: "High",
      description: "Viral infection of the upper respiratory tract",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Viral Fever",
      probability: "Medium",
      description: "Body's response to viral infection",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Flu (Influenza)",
      probability: "Medium",
      description: "Respiratory illness caused by influenza viruses",
      color: "bg-purple-100 text-purple-800"
    }
  ]

  const recommendedMedicines = [
    {
      name: "Paracetamol (Crocin/Dolo 650)",
      dosage: "1 tablet every 6-8 hours",
      purpose: "For fever and body ache",
      precaution: "Do not exceed 4 tablets in 24 hours",
      availability: "Available at all pharmacies"
    },
    {
      name: "Cetirizine (Zyrtec/Alerid)",
      dosage: "1 tablet at bedtime",
      purpose: "For runny nose and allergic symptoms",
      precaution: "May cause drowsiness",
      availability: "Over-the-counter"
    },
    {
      name: "Throat lozenges (Strepsils/Cofsils)",
      dosage: "1 lozenge every 2-3 hours",
      purpose: "For sore throat relief",
      precaution: "Do not exceed 8 lozenges per day",
      availability: "Available without prescription"
    }
  ]

  const homeRemedies = [
    "Drink plenty of warm water and fluids",
    "Gargle with warm salt water for sore throat",
    "Take adequate rest (7-8 hours sleep)",
    "Have warm soup or herbal tea",
    "Use steam inhalation for congestion"
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/symptom-checker" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Symptom Checker
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Your Health Analysis
          </h1>
          <p className="text-muted-foreground text-lg">
            Based on your symptoms, here's our assessment and recommendations
          </p>
        </div>

        {/* Disclaimer Alert */}
        <Alert className="mb-8 border-medical-warning bg-medical-warning/10">
          <AlertTriangle className="h-4 w-4 text-medical-warning" />
          <AlertDescription className="text-medical-warning font-medium">
            <strong>Important Disclaimer:</strong> This analysis is for informational purposes only and is not a substitute for professional medical advice. 
            Please consult a qualified doctor for proper diagnosis and treatment.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          {/* Analyzed Symptoms */}
          <MedicalCard variant="default">
            <MedicalCardHeader>
              <MedicalCardTitle>Analyzed Symptoms</MedicalCardTitle>
              <MedicalCardDescription>
                Based on the symptoms you reported
              </MedicalCardDescription>
            </MedicalCardHeader>
            <MedicalCardContent>
              <div className="flex flex-wrap gap-2">
                {analyzedSymptoms.map((symptom) => (
                  <Badge key={symptom} variant="secondary" className="bg-primary/10 text-primary">
                    {symptom}
                  </Badge>
                ))}
              </div>
            </MedicalCardContent>
          </MedicalCard>

          {/* Possible Conditions */}
          <MedicalCard variant="default">
            <MedicalCardHeader>
              <MedicalCardTitle>Possible Conditions</MedicalCardTitle>
              <MedicalCardDescription>
                Common conditions that match your symptoms
              </MedicalCardDescription>
            </MedicalCardHeader>
            <MedicalCardContent>
              <div className="space-y-4">
                {possibleConditions.map((condition, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-primary">{condition.name}</h3>
                      <Badge className={condition.color}>{condition.probability} Probability</Badge>
                    </div>
                    <p className="text-muted-foreground">{condition.description}</p>
                  </div>
                ))}
              </div>
            </MedicalCardContent>
          </MedicalCard>

          {/* Recommended Medicines */}
          <MedicalCard variant="default">
            <MedicalCardHeader>
              <MedicalCardTitle>Recommended Medicines (OTC)</MedicalCardTitle>
              <MedicalCardDescription>
                Over-the-counter medicines commonly available in India
              </MedicalCardDescription>
            </MedicalCardHeader>
            <MedicalCardContent>
              <div className="space-y-6">
                {recommendedMedicines.map((medicine, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-medical-blue-light/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{medicine.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{medicine.purpose}</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>Dosage:</strong> {medicine.dosage}</p>
                          <p className="text-sm text-medical-warning"><strong>Precaution:</strong> {medicine.precaution}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {medicine.availability}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MedicalCardContent>
          </MedicalCard>

          {/* Home Remedies */}
          <MedicalCard variant="default">
            <MedicalCardHeader>
              <MedicalCardTitle>Home Remedies & Care</MedicalCardTitle>
              <MedicalCardDescription>
                Natural remedies to support your recovery
              </MedicalCardDescription>
            </MedicalCardHeader>
            <MedicalCardContent>
              <div className="space-y-3">
                {homeRemedies.map((remedy, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{remedy}</p>
                  </div>
                ))}
              </div>
            </MedicalCardContent>
          </MedicalCard>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MedicalCard variant="interactive" className="text-center">
              <MedicalCardContent className="p-6">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Save as PDF</h3>
                <p className="text-sm text-muted-foreground mb-4">Download this analysis</p>
                <MedicalButton variant="medical" size="sm" className="w-full">
                  Download PDF
                </MedicalButton>
              </MedicalCardContent>
            </MedicalCard>

            <MedicalCard variant="interactive" className="text-center">
              <MedicalCardContent className="p-6">
                <Printer className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Print Prescription</h3>
                <p className="text-sm text-muted-foreground mb-4">Print for your records</p>
                <MedicalButton variant="medical" size="sm" className="w-full">
                  Print Now
                </MedicalButton>
              </MedicalCardContent>
            </MedicalCard>

            <MedicalCard variant="interactive" className="text-center">
              <MedicalCardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Find Doctors</h3>
                <p className="text-sm text-muted-foreground mb-4">Locate doctors nearby</p>
                <MedicalButton variant="medical" size="sm" className="w-full">
                  Find Doctors
                </MedicalButton>
              </MedicalCardContent>
            </MedicalCard>
          </div>

          {/* Save to Dashboard */}
          <div className="text-center">
            <Link to="/dashboard">
              <MedicalButton variant="hero" size="lg">
                Save to Dashboard
              </MedicalButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results