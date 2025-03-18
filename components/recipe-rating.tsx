"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface RecipeRatingProps {
  recipeId: number
}

export default function RecipeRating({ recipeId }: RecipeRatingProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  const handleMouseEnter = (value: number) => {
    setHoveredRating(value)
  }

  const handleMouseLeave = () => {
    setHoveredRating(0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the rating and comment to your API
    console.log({
      recipeId,
      rating,
      comment,
    })

    // Show success message
    setSubmitted(true)

    // Reset form
    setRating(0)
    setComment("")

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-card border rounded-lg p-6">
      {submitted ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-xl font-semibold mb-2">Thank you for your review!</div>
          <p className="text-muted-foreground">Your feedback helps our community find the best recipes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="mb-2 font-medium">Your Rating</p>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRatingChange(value)}
                  onMouseEnter={() => handleMouseEnter(value)}
                  onMouseLeave={handleMouseLeave}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-8 w-8 ${
                      (hoveredRating || rating) >= value ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="comment" className="block mb-2 font-medium">
              Your Review (optional)
            </label>
            <Textarea
              id="comment"
              placeholder="Share your experience with this recipe..."
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={rating === 0}
          >
            Submit Review
          </Button>
        </form>
      )}
    </div>
  )
}

