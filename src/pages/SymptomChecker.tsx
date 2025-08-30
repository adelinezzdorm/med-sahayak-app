import { useState } from "react"
import { ArrowLeft, ArrowRight, Search, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { MedicalButton } from "@/components/ui/medical-button"
import { MedicalCard, MedicalCardContent, MedicalCardDescription, MedicalCardHeader, MedicalCardTitle } from "@/components/ui/medical-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const SymptomChecker = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const commonSymptoms = [
    "Fever", "Headache", "Cough", "Sore throat", "Runny nose",
    "Body ache", "Fatigue", "Nausea", "Stomach pain", "Dizziness",
    "Chest pain", "Shortness of breath", "Loss of appetite", "Vomiting"
  ]

  const bodyParts = [
    "Head", "Eyes", "Throat", "Chest", "Stomach", "Back", "Arms", "Legs"
  ]

  const severityLevels = [
    { level: "Mild", description: "Slightly bothersome but manageable", color: "bg-green-100 text-green-800" },
    { level: "Moderate", description: "Noticeable discomfort affecting daily activities", color: "bg-yellow-100 text-yellow-800" },
    { level: "Severe", description: "Significant pain/discomfort requiring attention", color: "bg-red-100 text-red-800" }
  ]

  const filteredSymptoms = commonSymptoms.filter(symptom =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Symptom Checker
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your symptoms and get personalized health guidance
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-primary">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <MedicalCard variant="symptom" padding="lg">
          {currentStep === 1 && (
            <div className="space-y-6">
              <MedicalCardHeader>
                <MedicalCardTitle>What symptoms are you experiencing?</MedicalCardTitle>
                <MedicalCardDescription>
                  Select all symptoms that apply to you. You can search for specific symptoms.
                </MedicalCardDescription>
              </MedicalCardHeader>
              
              <MedicalCardContent>
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for symptoms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Selected Symptoms */}
                {selectedSymptoms.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Selected Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.map((symptom) => (
                        <Badge
                          key={symptom}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleSymptomToggle(symptom)}
                        >
                          {symptom} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Symptom Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredSymptoms.map((symptom) => (
                    <MedicalButton
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? "medical" : "symptom"}
                      className="h-auto p-4 text-left justify-start"
                      onClick={() => handleSymptomToggle(symptom)}
                    >
                      {selectedSymptoms.includes(symptom) ? (
                        <div className="flex items-center">
                          <span>{symptom}</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Plus className="h-4 w-4 mr-2" />
                          <span>{symptom}</span>
                        </div>
                      )}
                    </MedicalButton>
                  ))}
                </div>
              </MedicalCardContent>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <MedicalCardHeader>
                <MedicalCardTitle>Which part of your body is affected?</MedicalCardTitle>
                <MedicalCardDescription>
                  Select the area where you're experiencing symptoms.
                </MedicalCardDescription>
              </MedicalCardHeader>
              
              <MedicalCardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {bodyParts.map((part) => (
                    <MedicalButton
                      key={part}
                      variant="symptom"
                      className="h-20 flex-col"
                    >
                      {part}
                    </MedicalButton>
                  ))}
                </div>
              </MedicalCardContent>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <MedicalCardHeader>
                <MedicalCardTitle>How severe are your symptoms?</MedicalCardTitle>
                <MedicalCardDescription>
                  Rate the severity to help us provide better recommendations.
                </MedicalCardDescription>
              </MedicalCardHeader>
              
              <MedicalCardContent>
                <div className="space-y-4">
                  {severityLevels.map((severity) => (
                    <div
                      key={severity.level}
                      className="p-4 border rounded-lg cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{severity.level}</h3>
                          <p className="text-sm text-muted-foreground">{severity.description}</p>
                        </div>
                        <Badge className={severity.color}>{severity.level}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </MedicalCardContent>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <MedicalCardHeader>
                <MedicalCardTitle>Additional Information</MedicalCardTitle>
                <MedicalCardDescription>
                  Any additional details that might help us provide better guidance.
                </MedicalCardDescription>
              </MedicalCardHeader>
              
              <MedicalCardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">When did symptoms start?</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Today</option>
                      <option>Yesterday</option>
                      <option>2-3 days ago</option>
                      <option>A week ago</option>
                      <option>More than a week ago</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Age Group</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>18-25</option>
                      <option>26-35</option>
                      <option>36-45</option>
                      <option>46-55</option>
                      <option>55+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Any known allergies or medical conditions?</label>
                    <textarea 
                      className="w-full p-3 border rounded-md h-24"
                      placeholder="Optional: List any allergies or existing medical conditions..."
                    />
                  </div>
                </div>
              </MedicalCardContent>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <div>
              {currentStep > 1 && (
                <MedicalButton variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </MedicalButton>
              )}
            </div>
            
            <div>
              {currentStep < totalSteps ? (
                <MedicalButton 
                  variant="medical" 
                  onClick={nextStep}
                  disabled={currentStep === 1 && selectedSymptoms.length === 0}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </MedicalButton>
              ) : (
                <Link to="/results">
                  <MedicalButton variant="medical">
                    Get Results
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </MedicalButton>
                </Link>
              )}
            </div>
          </div>
        </MedicalCard>
      </div>
    </div>
  )
}

export default SymptomChecker