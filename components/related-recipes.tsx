import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Mock data for related recipes
const relatedRecipes = [
  {
    id: 2,
    title: "Greek Yogurt Parfait",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    category: "Breakfast",
  },
  {
    id: 5,
    title: "Sweet Potato Buddha Bowl",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    category: "Lunch",
  },
  {
    id: 9,
    title: "Vegan Chickpea Curry",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    category: "Dinner",
  },
]

interface RelatedRecipesProps {
  currentRecipeId: number
}

export default function RelatedRecipes({ currentRecipeId }: RelatedRecipesProps) {
  // Filter out the current recipe
  const filteredRecipes = relatedRecipes.filter((recipe) => recipe.id !== currentRecipeId)

  return (
    <div className="space-y-4">
      {filteredRecipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <Card className="overflow-hidden border-none shadow-md recipe-card">
            <CardContent className="p-0">
              <div className="flex">
                <div className="relative w-24 h-24">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                </div>
                <div className="p-3 flex-1">
                  <div className="text-xs text-muted-foreground mb-1">{recipe.category}</div>
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">{recipe.title}</h4>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-xs">{recipe.rating}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

