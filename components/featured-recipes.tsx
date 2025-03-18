"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Flame, ChevronLeft, ChevronRight } from "lucide-react"

// Mock data for featured recipes
const featuredRecipes = [
  {
    id: 1,
    title: "Protein-Packed Quinoa Bowl",
    image: "/placeholder.svg?height=400&width=600",
    category: "Lunch",
    rating: 4.8,
    time: "25 min",
    calories: 420,
    author: "Emma Wilson",
  },
  {
    id: 2,
    title: "Greek Yogurt Parfait",
    image: "/placeholder.svg?height=400&width=600",
    category: "Breakfast",
    rating: 4.6,
    time: "10 min",
    calories: 310,
    author: "Michael Brown",
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    image: "/placeholder.svg?height=400&width=600",
    category: "Dinner",
    rating: 4.9,
    time: "30 min",
    calories: 380,
    author: "Sarah Johnson",
  },
  {
    id: 4,
    title: "Avocado & Egg Toast",
    image: "/placeholder.svg?height=400&width=600",
    category: "Breakfast",
    rating: 4.7,
    time: "15 min",
    calories: 290,
    author: "David Lee",
  },
  {
    id: 5,
    title: "Sweet Potato Buddha Bowl",
    image: "/placeholder.svg?height=400&width=600",
    category: "Lunch",
    rating: 4.5,
    time: "35 min",
    calories: 450,
    author: "Jessica Taylor",
  },
  {
    id: 6,
    title: "Protein Smoothie Bowl",
    image: "/placeholder.svg?height=400&width=600",
    category: "Breakfast",
    rating: 4.4,
    time: "10 min",
    calories: 320,
    author: "Ryan Martinez",
  },
]

export default function FeaturedRecipes() {
  const [currentPage, setCurrentPage] = useState(0)
  const recipesPerPage = 3
  const totalPages = Math.ceil(featuredRecipes.length / recipesPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentRecipes = featuredRecipes.slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentRecipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden border-none shadow-lg recipe-card">
            <div className="relative h-48">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{recipe.category}</Badge>
            </div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm font-medium">{recipe.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">By {recipe.author}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {recipe.time}
                </div>
                <div className="flex items-center">
                  <Flame className="h-4 w-4 mr-1" />
                  {recipe.calories} cal
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        <Button variant="outline" size="icon" onClick={prevPage} className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index ? "default" : "outline"}
            size="icon"
            onClick={() => setCurrentPage(index)}
            className={`rounded-full ${currentPage === index ? "bg-primary text-primary-foreground" : ""}`}
          >
            {index + 1}
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextPage} className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

