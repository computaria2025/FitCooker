"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Fitness Trainer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "FitCooker has transformed how I plan meals for my clients. The nutritional information is accurate and the recipes are delicious. My clients love the variety!",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Marathon Runner",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As an athlete, I need proper nutrition to fuel my training. FitCooker recipes have helped me maintain my energy levels while keeping meals interesting and tasty.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Weight Loss Journey",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "I've lost 30 pounds using recipes from FitCooker! The detailed nutritional information helps me stay on track with my calorie goals while enjoying delicious food.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Bodybuilder",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Finding high-protein recipes that taste good was always a challenge until I discovered FitCooker. Now meal prep is something I look forward to each week.",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerView = 2
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerView,
    (currentIndex + 1) * testimonialsPerView,
  )

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-none shadow-lg recipe-card">
            <CardContent className="p-8">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Button
            key={index}
            variant={currentIndex === index ? "default" : "outline"}
            size="icon"
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full ${currentIndex === index ? "bg-primary text-primary-foreground" : ""}`}
          >
            {index + 1}
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

