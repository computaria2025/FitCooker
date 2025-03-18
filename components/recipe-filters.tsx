"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const mealTypes = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "snacks", label: "Snacks" },
  { id: "desserts", label: "Desserts" },
]

const dietaryPreferences = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten Free" },
  { id: "dairy-free", label: "Dairy Free" },
  { id: "keto", label: "Keto" },
  { id: "paleo", label: "Paleo" },
]

export default function RecipeFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([])
  const [selectedDiets, setSelectedDiets] = useState<string[]>([])
  const [calorieRange, setCalorieRange] = useState<[number, number]>([0, 1000])
  const [prepTime, setPrepTime] = useState<number>(60)

  // Initialize state after component mounts to avoid hydration mismatch
  useEffect(() => {
    setSelectedMealTypes(searchParams.get("mealType")?.split(",") || [])
    setSelectedDiets(searchParams.get("diet")?.split(",") || [])
    setCalorieRange([
      Number.parseInt(searchParams.get("minCalories") || "0"),
      Number.parseInt(searchParams.get("maxCalories") || "1000"),
    ])
    setPrepTime(Number.parseInt(searchParams.get("maxTime") || "60"))
  }, [searchParams])

  const handleMealTypeChange = (id: string) => {
    setSelectedMealTypes((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleDietChange = (id: string) => {
    setSelectedDiets((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedMealTypes.length > 0) {
      params.set("mealType", selectedMealTypes.join(","))
    } else {
      params.delete("mealType")
    }

    if (selectedDiets.length > 0) {
      params.set("diet", selectedDiets.join(","))
    } else {
      params.delete("diet")
    }

    params.set("minCalories", calorieRange[0].toString())
    params.set("maxCalories", calorieRange[1].toString())
    params.set("maxTime", prepTime.toString())

    router.push(`/recipes?${params.toString()}`)
  }

  const resetFilters = () => {
    setSelectedMealTypes([])
    setSelectedDiets([])
    setCalorieRange([0, 1000])
    setPrepTime(60)
    router.push("/recipes")
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <Accordion type="multiple" defaultValue={["meal-type", "dietary", "calories", "time"]}>
        <AccordionItem value="meal-type">
          <AccordionTrigger>Meal Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {mealTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`meal-${type.id}`}
                    checked={selectedMealTypes.includes(type.id)}
                    onCheckedChange={() => handleMealTypeChange(type.id)}
                  />
                  <Label htmlFor={`meal-${type.id}`}>{type.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dietary">
          <AccordionTrigger>Dietary Preferences</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {dietaryPreferences.map((diet) => (
                <div key={diet.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`diet-${diet.id}`}
                    checked={selectedDiets.includes(diet.id)}
                    onCheckedChange={() => handleDietChange(diet.id)}
                  />
                  <Label htmlFor={`diet-${diet.id}`}>{diet.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="calories">
          <AccordionTrigger>Calories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>{calorieRange[0]} cal</span>
                <span>{calorieRange[1]} cal</span>
              </div>
              <Slider
                defaultValue={[0, 1000]}
                min={0}
                max={1000}
                step={50}
                value={calorieRange}
                onValueChange={(value) => setCalorieRange(value as [number, number])}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="time">
          <AccordionTrigger>Preparation Time</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Max {prepTime} minutes</span>
              </div>
              <Slider
                defaultValue={[60]}
                min={5}
                max={120}
                step={5}
                value={[prepTime]}
                onValueChange={(value) => setPrepTime(value[0])}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <Button onClick={applyFilters} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Apply Filters
        </Button>
        <Button onClick={resetFilters} variant="outline" className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  )
}

