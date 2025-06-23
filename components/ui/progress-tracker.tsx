"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, Circle, Clock, Lock } from "lucide-react"

export interface Step {
  id: string;
  title: string;
  description?: string;
  status: "completed" | "current" | "upcoming" | "locked";
  estimatedTime?: number;
}

interface ProgressTrackerProps {
  steps: Step[];
  currentStep: string;
  className?: string;
  orientation?: "vertical" | "horizontal";
  showEstimatedTime?: boolean;
}

const ProgressTracker = React.forwardRef<
  HTMLDivElement,
  ProgressTrackerProps
>(({ steps, currentStep, className, orientation = "vertical", showEstimatedTime = true, ...props }, ref) => {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  const getStepIcon = (step: Step, index: number) => {
    switch (step.status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-success" />;
      case "current":
        return <Circle className="h-6 w-6 text-primary animate-pulse-soft" />;
      case "locked":
        return <Lock className="h-6 w-6 text-disabled" />;
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStepClasses = (step: Step, index: number) => {
    const baseClasses = "group relative transition-all duration-300";
    switch (step.status) {
      case "completed":
        return cn(baseClasses, "text-success");
      case "current":
        return cn(baseClasses, "text-primary");
      case "locked":
        return cn(baseClasses, "text-disabled cursor-not-allowed");
      default:
        return cn(baseClasses, "text-muted-foreground hover:text-foreground");
    }
  };

  const getConnectorClasses = (step: Step, index: number) => {
    const isCompleted = step.status === "completed";
    const isBeforeCurrent = index < currentIndex;
    
    if (orientation === "horizontal") {
      return cn(
        "absolute top-3 left-8 w-full h-0.5 transition-colors duration-300",
        isCompleted || isBeforeCurrent ? "bg-success" : "bg-border"
      );
    }
    
    return cn(
      "absolute left-3 top-8 w-0.5 h-full transition-colors duration-300",
      isCompleted || isBeforeCurrent ? "bg-success" : "bg-border"
    );
  };

  if (orientation === "horizontal") {
    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-8 overflow-x-auto pb-4", className)}
        {...props}
      >
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex-shrink-0">
            <div className={getStepClasses(step, index)}>
              <div className="flex flex-col items-center space-y-2 min-w-[120px]">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-current bg-background">
                  {getStepIcon(step, index)}
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">{step.title}</div>
                  {step.description && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {step.description}
                    </div>
                  )}
                  {showEstimatedTime && step.estimatedTime && (
                    <div className="flex items-center justify-center mt-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.estimatedTime}min
                    </div>
                  )}
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={getConnectorClasses(step, index)} />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("space-y-4", className)}
      {...props}
    >
      {steps.map((step, index) => (
        <div key={step.id} className="relative">
          <div className={getStepClasses(step, index)}>
            <div className="flex items-start space-x-4">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-current bg-background flex-shrink-0">
                {getStepIcon(step, index)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{step.title}</div>
                {step.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {step.description}
                  </div>
                )}
                {showEstimatedTime && step.estimatedTime && (
                  <div className="flex items-center mt-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    Estimated time: {step.estimatedTime} minutes
                  </div>
                )}
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={getConnectorClasses(step, index)} />
          )}
        </div>
      ))}
    </div>
  );
});

ProgressTracker.displayName = "ProgressTracker";

export { ProgressTracker, type Step } 