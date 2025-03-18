"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Minus, Upload, Info } from "lucide-react"

export default function AddRecipePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [ingredients, setIngredients] = useState([{ name: "", amount: "", unit: "" }])
  const [instructions, setInstructions] = useState([""])
  const [nutritionValues, setNutritionValues] = useState({
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    fiber: "",
    sugar: "",
    sodium: "",
  })
  const [dietaryTags, setDietaryTags] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    keto: false,
    paleo: false,
  })

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "", unit: "" }])
  }

  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(index, 1)
    setIngredients(newIngredients)
  }

  const updateIngredient = (index: number, field: string, value: string) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = { ...newIngredients[index], [field]: value }
    setIngredients(newIngredients)
  }

  const addInstruction = () => {
    setInstructions([...instructions, ""])
  }

  const removeInstruction = (index: number) => {
    const newInstructions = [...instructions]
    newInstructions.splice(index, 1)
    setInstructions(newInstructions)
  }

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions]
    newInstructions[index] = value
    setInstructions(newInstructions)
  }

  const updateNutrition = (field: string, value: string) => {
    setNutritionValues({ ...nutritionValues, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the recipe data to your API
    console.log({
      // Form data would be collected here
      ingredients,
      instructions,
      nutritionValues,
      dietaryTags,
    })

    // Redirect to recipes page or show success message
    router.push("/recipes")
  }

  const nextTab = () => {
    if (activeTab === "details") setActiveTab("ingredients")
    else if (activeTab === "ingredients") setActiveTab("instructions")
    else if (activeTab === "instructions") setActiveTab("nutrition")
  }

  const prevTab = () => {
    if (activeTab === "nutrition") setActiveTab("instructions")
    else if (activeTab === "instructions") setActiveTab("ingredients")
    else if (activeTab === "ingredients") setActiveTab("details")
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Add Your Recipe</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your favorite fitness recipe with our community. Please provide detailed information to help others
            make your delicious creation.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recipe Details</CardTitle>
                  <CardDescription>Provide the basic information about your recipe.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Recipe Title</Label>
                    <Input id="title" placeholder="e.g., Protein-Packed Quinoa Bowl" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Briefly describe your recipe..." rows={4} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="breakfast">Breakfast</SelectItem>
                          <SelectItem value="lunch">Lunch</SelectItem>
                          <SelectItem value="dinner">Dinner</SelectItem>
                          <SelectItem value="snacks">Snacks</SelectItem>
                          <SelectItem value="desserts">Desserts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servings">Servings</Label>
                      <Input id="servings" type="number" min="1" placeholder="e.g., 2" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="prepTime">Preparation Time (minutes)</Label>
                      <Input id="prepTime" type="number" min="1" placeholder="e.g., 15" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cookTime">Cooking Time (minutes)</Label>
                      <Input id="cookTime" type="number" min="0" placeholder="e.g., 20" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Dietary Tags</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="vegetarian"
                          checked={dietaryTags.vegetarian}
                          onCheckedChange={(checked) =>
                            setDietaryTags({ ...dietaryTags, vegetarian: checked as boolean })
                          }
                        />
                        <Label htmlFor="vegetarian">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="vegan"
                          checked={dietaryTags.vegan}
                          onCheckedChange={(checked) => setDietaryTags({ ...dietaryTags, vegan: checked as boolean })}
                        />
                        <Label htmlFor="vegan">Vegan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="glutenFree"
                          checked={dietaryTags.glutenFree}
                          onCheckedChange={(checked) =>
                            setDietaryTags({ ...dietaryTags, glutenFree: checked as boolean })
                          }
                        />
                        <Label htmlFor="glutenFree">Gluten Free</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dairyFree"
                          checked={dietaryTags.dairyFree}
                          onCheckedChange={(checked) =>
                            setDietaryTags({ ...dietaryTags, dairyFree: checked as boolean })
                          }
                        />
                        <Label htmlFor="dairyFree">Dairy Free</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="keto"
                          checked={dietaryTags.keto}
                          onCheckedChange={(checked) => setDietaryTags({ ...dietaryTags, keto: checked as boolean })}
                        />
                        <Label htmlFor="keto">Keto</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="paleo"
                          checked={dietaryTags.paleo}
                          onCheckedChange={(checked) => setDietaryTags({ ...dietaryTags, paleo: checked as boolean })}
                        />
                        <Label htmlFor="paleo">Paleo</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Recipe Image</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Drag and drop your image here, or click to browse</p>
                      <p className="text-xs text-muted-foreground mb-4">PNG, JPG or WEBP (max. 5MB)</p>
                      <Button type="button" variant="outline">
                        Upload Image
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                  <CardDescription>List all ingredients needed for your recipe.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="grid grid-cols-3 gap-3 flex-1">
                        <div>
                          <Input
                            placeholder="Amount"
                            value={ingredient.amount}
                            onChange={(e) => updateIngredient(index, "amount", e.target.value)}
                          />
                        </div>
                        <div>
                          <Select
                            value={ingredient.unit}
                            onValueChange={(value) => updateIngredient(index, "unit", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="g">grams (g)</SelectItem>
                              <SelectItem value="kg">kilograms (kg)</SelectItem>
                              <SelectItem value="ml">milliliters (ml)</SelectItem>
                              <SelectItem value="l">liters (l)</SelectItem>
                              <SelectItem value="tsp">teaspoon (tsp)</SelectItem>
                              <SelectItem value="tbsp">tablespoon (tbsp)</SelectItem>
                              <SelectItem value="cup">cup</SelectItem>
                              <SelectItem value="piece">piece</SelectItem>
                              <SelectItem value="pinch">pinch</SelectItem>
                              <SelectItem value="to taste">to taste</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Input
                            placeholder="Ingredient name"
                            value={ingredient.name}
                            onChange={(e) => updateIngredient(index, "name", e.target.value)}
                          />
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeIngredient(index)}
                        disabled={ingredients.length === 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  <Button type="button" variant="outline" onClick={addIngredient} className="w-full">
                    <Plus className="h-4 w-4 mr-2" /> Add Ingredient
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructions" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                  <CardDescription>Provide step-by-step instructions for preparing your recipe.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-2">
                        <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <span className="text-sm font-medium">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Textarea
                          placeholder={`Step ${index + 1}: Describe this step...`}
                          value={instruction}
                          onChange={(e) => updateInstruction(index, e.target.value)}
                          rows={3}
                        />
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeInstruction(index)}
                        disabled={instructions.length === 1}
                        className="mt-2"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  <Button type="button" variant="outline" onClick={addInstruction} className="w-full">
                    <Plus className="h-4 w-4 mr-2" /> Add Step
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition Information</CardTitle>
                  <CardDescription>Provide nutritional details for your recipe (per serving).</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Info className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Providing accurate nutritional information helps users make informed dietary choices.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="calories">Calories (kcal)</Label>
                      <Input
                        id="calories"
                        type="number"
                        min="0"
                        placeholder="e.g., 420"
                        value={nutritionValues.calories}
                        onChange={(e) => updateNutrition("calories", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="protein">Protein (g)</Label>
                      <Input
                        id="protein"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="e.g., 15"
                        value={nutritionValues.protein}
                        onChange={(e) => updateNutrition("protein", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="carbs">Carbohydrates (g)</Label>
                      <Input
                        id="carbs"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="e.g., 58"
                        value={nutritionValues.carbs}
                        onChange={(e) => updateNutrition("carbs", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fat">Fat (g)</Label>
                      <Input
                        id="fat"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="e.g., 16"
                        value={nutritionValues.fat}
                        onChange={(e) => updateNutrition("fat", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fiber">Fiber (g)</Label>
                      <Input
                        id="fiber"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="e.g., 12"
                        value={nutritionValues.fiber}
                        onChange={(e) => updateNutrition("fiber", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sugar">Sugar (g)</Label>
                      <Input
                        id="sugar"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="e.g., 4"
                        value={nutritionValues.sugar}
                        onChange={(e) => updateNutrition("sugar", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sodium">Sodium (mg)</Label>
                    <Input
                      id="sodium"
                      type="number"
                      min="0"
                      placeholder="e.g., 380"
                      value={nutritionValues.sodium}
                      onChange={(e) => updateNutrition("sodium", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevTab} disabled={activeTab === "details"}>
              Previous
            </Button>

            {activeTab === "nutrition" ? (
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Recipe
              </Button>
            ) : (
              <Button type="button" onClick={nextTab}>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

