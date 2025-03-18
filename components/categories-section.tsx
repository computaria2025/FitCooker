import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"

// Dados de exemplo para as categorias
const categories = [
  {
    id: "cafe-da-manha",
    name: "Café da Manhã",
    image: "/placeholder.svg?height=300&width=300",
    recipeCount: 42,
  },
  {
    id: "almoco",
    name: "Almoço",
    image: "/placeholder.svg?height=300&width=300",
    recipeCount: 56,
  },
  {
    id: "jantar",
    name: "Jantar",
    image: "/placeholder.svg?height=300&width=300",
    recipeCount: 38,
  },
  {
    id: "lanches",
    name: "Lanches",
    image: "/placeholder.svg?height=300&width=300",
    recipeCount: 27,
  },
]

export function CategoriesSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Categorias Populares</h2>
          <Button variant="link" asChild>
            <Link href="/categorias" className="flex items-center">
              Ver todas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
              recipeCount={category.recipeCount}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

