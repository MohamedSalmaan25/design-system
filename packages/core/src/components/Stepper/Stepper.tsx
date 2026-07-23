import { forwardRef, type HTMLAttributes, type ElementRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn.js'
import './Stepper.css'

interface StepData {
  label: string
  optionalText?: string
  icon?: ReactNode
}

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  activeStep: number
  steps: StepData[]
  orientation?: 'horizontal' | 'vertical'
  alternativeLabel?: boolean
  connector?: ReactNode
}

const defaultConnector = <span className="ms-stepper__connector-line" />

const Stepper = forwardRef<ElementRef<'div'>, StepperProps>(
  ({ activeStep, steps, orientation = 'horizontal', alternativeLabel, connector = defaultConnector, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'ms-stepper',
        `ms-stepper--${orientation}`,
        alternativeLabel && 'ms-stepper--alternative-label',
        className,
      )}
      {...props}
    >
      {steps.map((step, index) => {
        const isCompleted = index < activeStep
        const isActive = index === activeStep
        const isLast = index === steps.length - 1

        return (
          <div key={index} className={cn('ms-stepper__step-wrapper', orientation === 'horizontal' && !alternativeLabel && 'ms-stepper__step-wrapper--fill')}>
            <div
              className={cn(
                'ms-stepper__step',
                isActive && 'ms-stepper__step--active',
                isCompleted && 'ms-stepper__step--completed',
              )}
            >
              <div className="ms-stepper__step-icon">
                {step.icon ?? (isCompleted ? 'OK' : index + 1)}
              </div>
              <div className="ms-stepper__step-label">
                {step.label}
                {step.optionalText && <span className="ms-stepper__step-optional">{step.optionalText}</span>}
              </div>
            </div>
            {!isLast && connector && (
              <div className={cn('ms-stepper__connector', isCompleted && 'ms-stepper__connector--active')}>
                {connector}
              </div>
            )}
          </div>
        )
      })}
    </div>
  ),
)
Stepper.displayName = 'Stepper'

export { Stepper, type StepperProps, type StepData }
