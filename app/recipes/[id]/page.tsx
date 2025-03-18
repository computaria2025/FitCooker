import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Flame, ChefHat, Printer, Share2, Bookmark, Heart } from "lucide-react"
import NutritionTable from "@/components/nutrition-table"
import RecipeRating from "@/components/recipe-rating"
import RelatedRecipes from "@/components/related-recipes"

// Mock recipe data
const getRecipe = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Protein-Packed Quinoa Bowl",
    image: "/placeholder.svg?height=800&width=1200",
    category: "Lunch",
    rating: 4.8,
    reviewCount: 124,
    time: "25 min",
    calories: 420,
    servings: 2,
    author: {
      name: "Emma Wilson",
      image: "/placeholder.svg?height=200&width=200",
    },
    dietaryTags: ["vegetarian", "gluten-free"],
    description:
      "This protein-packed quinoa bowl is perfect for a post-workout lunch or dinner. Loaded with plant-based protein, fiber, and essential nutrients, it will keep you full and energized throughout the day.",
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 can (15 oz) black beans, drained and rinsed",
      "1 cup cherry tomatoes, halved",
      "1 avocado, diced",
      "1/2 red onion, finely diced",
      "1/4 cup fresh cilantro, chopped",
      "2 tbsp olive oil",
      "1 lime, juiced",
      "1 tsp cumin",
      "1/2 tsp chili powder",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a medium saucepan, combine quinoa and vegetable broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed.",
      "While quinoa is cooking, prepare the dressing by whisking together olive oil, lime juice, cumin, chili powder, salt, and pepper in a small bowl.",
      "Once quinoa is cooked, fluff with a fork and let cool for 5 minutes.",
      "In a large bowl, combine the cooked quin  fluff with a fork and let cool for 5 minutes.",
      "In a large bowl, combine the cooked quinoa, black beans, cherry tomatoes, avocado, red onion, and cilantro.",
      "Pour the dressing over the quinoa mixture and toss gently to combine.",
      "Divide into bowls and serve immediately, or refrigerate for up to 3 days.",
    ],
    nutrition: {
      calories: 420,
      protein: 15,
      carbs: 58,
      fat: 16,
      fiber: 12,
      sugar: 4,
      sodium: 380,
    },
    tips: [
      "For extra protein, add grilled chicken or tofu",
      "This recipe works great for meal prep - just store the dressing separately",
      "Try adding roasted sweet potatoes for extra flavor and nutrients",
    ],
  }
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = getRecipe(params.id)

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-1 text-sm">{recipe.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-medium">{recipe.rating}</span>
                <span className="text-muted-foreground ml-1">({recipe.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-1" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center">
                <Flame className="h-5 w-5 text-muted-foreground mr-1" />
                <span>{recipe.calories} calories</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-muted-foreground mr-1" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.dietaryTags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" priority />
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={recipe.author.image || "/placeholder.svg"}
                  alt={recipe.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Recipe by</p>
                <p className="font-medium">{recipe.author.name}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Printer className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <p className="text-lg mb-8">{recipe.description}</p>

          <Tabs defaultValue="ingredients" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="pt-6">
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full border border-primary flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-sm text-primary">{index + 1}</span>
                    </div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="instructions" className="pt-6">
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                      <span className="font-medium">{index + 1}</span>
                    </div>
                    <p>{instruction}</p>
                  </li>
                ))}
              </ol>
            </TabsContent>
            <TabsContent value="nutrition" className="pt-6">
              <NutritionTable nutrition={recipe.nutrition} />
            </TabsContent>
          </Tabs>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Chef's Tips</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-sm text-secondary">✓</span>
                      </div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Rate this Recipe</h3>
            <RecipeRating recipeId={recipe.id} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Nutrition Facts</h3>
                <NutritionTable nutrition={recipe.nutrition} compact />
                <Button className="w-full mt-4">View Full Nutrition Details</Button>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">You Might Also Like</h3>
              <RelatedRecipes currentRecipeId={recipe.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

