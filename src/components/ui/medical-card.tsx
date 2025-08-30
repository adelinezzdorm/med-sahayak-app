import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const medicalCardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "shadow-card hover:shadow-medical",
        floating: "shadow-floating hover:shadow-xl transform hover:-translate-y-1",
        gradient: "bg-gradient-card border-0 text-primary",
        symptom: "border-primary/20 hover:border-primary/40 hover:shadow-medical",
        prescription: "border-secondary/20 hover:border-secondary/40 hover:shadow-card",
        interactive: "cursor-pointer hover:shadow-floating transform hover:scale-[1.02] transition-all duration-300"
      },
      padding: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default"
    }
  }
)

export interface MedicalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof medicalCardVariants> {}

const MedicalCard = React.forwardRef<HTMLDivElement, MedicalCardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(medicalCardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
MedicalCard.displayName = "MedicalCard"

const MedicalCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
MedicalCardHeader.displayName = "MedicalCardHeader"

const MedicalCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight text-primary", className)}
    {...props}
  />
))
MedicalCardTitle.displayName = "MedicalCardTitle"

const MedicalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
MedicalCardDescription.displayName = "MedicalCardDescription"

const MedicalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
MedicalCardContent.displayName = "MedicalCardContent"

const MedicalCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
MedicalCardFooter.displayName = "MedicalCardFooter"

export {
  MedicalCard,
  MedicalCardHeader,
  MedicalCardFooter,
  MedicalCardTitle,
  MedicalCardDescription,
  MedicalCardContent,
}