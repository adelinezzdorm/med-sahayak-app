import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Eye, EyeOff, Mail, Phone } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { MedicalCard, MedicalCardContent, MedicalCardDescription, MedicalCardHeader, MedicalCardTitle } from "@/components/ui/medical-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState("email")

  return (
    <div className="min-h-screen bg-gradient-card flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <MedicalCard variant="floating" padding="lg">
          <MedicalCardHeader className="text-center">
            <MedicalCardTitle className="text-2xl">Welcome Back</MedicalCardTitle>
            <MedicalCardDescription>
              Sign in to access your health dashboard
            </MedicalCardDescription>
          </MedicalCardHeader>

          <MedicalCardContent>
            <Tabs value={loginMethod} onValueChange={setLoginMethod} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded border-muted" />
                    <span>Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                    Forgot password?
                  </Link>
                </div>

                <MedicalButton variant="medical" size="lg" className="w-full">
                  Sign In with Email
                </MedicalButton>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                      <span className="text-sm">+91</span>
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your 10-digit mobile number"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <MedicalButton variant="medical" size="lg" className="w-full">
                  Send OTP
                </MedicalButton>

                <div className="text-center text-sm text-muted-foreground">
                  We'll send a verification code to your mobile number
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </MedicalCardContent>
        </MedicalCard>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login