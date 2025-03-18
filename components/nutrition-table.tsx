interface NutritionProps {
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
    sodium: number
  }
  compact?: boolean
}

export default function NutritionTable({ nutrition, compact = false }: NutritionProps) {
  const nutritionItems = [
    { label: "Calories", value: `${nutrition.calories} kcal`, main: true },
    { label: "Protein", value: `${nutrition.protein}g` },
    { label: "Carbohydrates", value: `${nutrition.carbs}g` },
    { label: "Fat", value: `${nutrition.fat}g` },
    { label: "Fiber", value: `${nutrition.fiber}g` },
    { label: "Sugar", value: `${nutrition.sugar}g` },
    { label: "Sodium", value: `${nutrition.sodium}mg` },
  ]

  if (compact) {
    return (
      <div className="space-y-2">
        {nutritionItems.map((item) => (
          <div
            key={item.label}
            className={`flex justify-between items-center py-1 ${item.main ? "border-b border-border" : ""}`}
          >
            <span className={item.main ? "font-semibold" : "text-sm text-muted-foreground"}>{item.label}</span>
            <span className={item.main ? "font-semibold" : "text-sm"}>{item.value}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted p-4">
        <h4 className="font-semibold">Nutrition Facts (per serving)</h4>
      </div>
      <div className="p-4 space-y-3">
        {nutritionItems.map((item) => (
          <div
            key={item.label}
            className={`flex justify-between items-center py-2 ${item.main ? "border-b border-border" : ""}`}
          >
            <span className={item.main ? "text-lg font-semibold" : ""}>{item.label}</span>
            <span className={item.main ? "text-lg font-semibold" : ""}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

