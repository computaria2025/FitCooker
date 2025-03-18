"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RecipeCard } from "@/components/recipe-card"

// Dados de exemplo para as receitas em destaque
const featuredRecipes = [
  {
    id: "1",
    title: "Bowl de Açaí com Frutas e Granola",
    image: "/placeholder.svg?height=300&width=400",
    category: "Café da Manhã",
    prepTime: 10,
    calories: 320,
    rating: 4.8,
    isFavorite: true,
  },
  {
    id: "2",
    title: "Salada de Quinoa com Legumes Grelhados",
    image: "/placeholder.svg?height=300&width=400",
    category: "Almoço",
    prepTime: 25,
    calories: 380,
    rating: 4.5,
    isFavorite: false,
  },
  {
    id: "3",
    title: "Peito de Frango Grelhado com Batata Doce",
    image: "/placeholder.svg?height=300&width=400",
    category: "Jantar",
    prepTime: 30,
    calories: 450,
    rating: 4.7,
    isFavorite: false,
  },
  {
    id: "4",
    title: "Smoothie Proteico de Banana e Pasta de Amendoim",
    image: "/placeholder.svg?height=300&width=400",
    category: "Pré-treino",
    prepTime: 5,
    calories: 280,
    rating: 4.6,
    isFavorite: true,
  },
  {
    id: "5",
    title: "Omelete de Claras com Espinafre e Queijo Cottage",
    image: "/placeholder.svg?height=300&width=400",
    category: "Café da Manhã",
    prepTime: 15,
    calories: 250,
    rating: 4.4,
    isFavorite: false,
  },
  {
    id: "6",
    title: "Wrap de Frango com Abacate e Vegetais",
    image: "/placeholder.svg?height=300&width=400",
    category: "Almoço",
    prepTime: 20,
    calories: 420,
    rating: 4.3,
    isFavorite: false,
  },
]

export function FeaturedRecipes() {
  const [recipes, setRecipes] = useState(featuredRecipes)

  const toggleFavorite = (id: string) => {
    setRecipes(recipes.map((recipe) => (recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe)))
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Receitas em Destaque</h2>
          <Button variant="link" asChild>
            <Link href="/populares" className="flex items-center">
              Ver todas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              category={recipe.category}
              prepTime={recipe.prepTime}
              calories={recipe.calories}
              rating={recipe.rating}
              isFavorite={recipe.isFavorite}
              onFavoriteToggle={() => toggleFavorite(recipe.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

