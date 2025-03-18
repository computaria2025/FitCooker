"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Flame } from "lucide-react"

// Mock data for recipes
const allRecipes = [
  {
    id: 1,
    title: "Protein-Packed Quinoa Bowl",
    image: "/placeholder.svg?height=400&width=600",
    category: "Lunch",
    rating: 4.8,
    time: "25 min",
    calories: 420,
    author: "Emma Wilson",
    dietaryTags: ["vegetarian", "gluten-free"],
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
    dietaryTags: ["vegetarian"],
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
    dietaryTags: ["gluten-free", "dairy-free"],
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
    dietaryTags: ["vegetarian"],
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
    dietaryTags: ["vegan", "gluten-free"],
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
    dietaryTags: ["vegetarian", "dairy-free"],
  },
  {
    id: 7,
    title: "Salmon with Roasted Vegetables",
    image: "/placeholder.svg?height=400&width=600",
    category: "Dinner",
    rating: 4.9,
    time: "40 min",
    calories: 520,
    author: "Lisa Anderson",
    dietaryTags: ["gluten-free", "dairy-free", "paleo"],
  },
  {
    id: 8,
    title: "Keto Breakfast Muffins",
    image: "/placeholder.svg?height=400&width=600",
    category: "Breakfast",
    rating: 4.3,
    time: "30 min",
    calories: 280,
    author: "Chris Wilson",
    dietaryTags: ["keto", "gluten-free"],
  },
  {
    id: 9,
    title: "Vegan Chickpea Curry",
    image: "/placeholder.svg?height=400&width=600",
    category: "Dinner",
    rating: 4.7,
    time: "35 min",
    calories: 410,
    author: "Sophia Chen",
    dietaryTags: ["vegan", "gluten-free", "dairy-free"],
  },
]

export default function RecipeGrid() {
  const searchParams = useSearchParams()
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes)

  // Filter recipes based on search parameters when they change
  useEffect(() => {
    const filtered = allRecipes.filter((recipe) => {
      // Search query
      const query = searchParams.get("q")?.toLowerCase()
      if (query && !recipe.title.toLowerCase().includes(query)) {
        return false
      }

      // Meal type
      const mealTypes = searchParams.get("mealType")?.split(",")
      if (mealTypes?.length && !mealTypes.includes(recipe.category.toLowerCase())) {
        return false
      }

      // Dietary preferences
      const diets = searchParams.get("diet")?.split(",")
      if (diets?.length && !diets.some((diet) => recipe.dietaryTags.includes(diet))) {
        return false
      }

      // Calorie range
      const minCalories = Number.parseInt(searchParams.get("minCalories") || "0")
      const maxCalories = Number.parseInt(searchParams.get("maxCalories") || "1000")
      if (recipe.calories < minCalories || recipe.calories > maxCalories) {
        return false
      }

      // Prep time
      const maxTime = Number.parseInt(searchParams.get("maxTime") || "120")
      const recipeTime = Number.parseInt(recipe.time.split(" ")[0])
      if (recipeTime > maxTime) {
        return false
      }

      return true
    })

    setFilteredRecipes(filtered)
  }, [searchParams])

  if (filteredRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
        <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
        <Button asChild>
          <Link href="/recipes">Clear All Filters</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">Showing {filteredRecipes.length} recipes</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="text-sm border rounded-md p-1">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Preparation Time</option>
            <option>Calories (Low to High)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
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
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {recipe.time}
                </div>
                <div className="flex items-center">
                  <Flame className="h-4 w-4 mr-1" />
                  {recipe.calories} cal
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {recipe.dietaryTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </Badge>
                ))}
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
    </div>
  )
}

