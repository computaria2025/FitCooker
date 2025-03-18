import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    image: "/placeholder.svg?height=300&width=300",
    count: 42,
  },
  {
    id: "lunch",
    name: "Lunch",
    image: "/placeholder.svg?height=300&width=300",
    count: 56,
  },
  {
    id: "dinner",
    name: "Dinner",
    image: "/placeholder.svg?height=300&width=300",
    count: 64,
  },
  {
    id: "snacks",
    name: "Snacks",
    image: "/placeholder.svg?height=300&width=300",
    count: 38,
  },
  {
    id: "desserts",
    name: "Healthy Desserts",
    image: "/placeholder.svg?height=300&width=300",
    count: 27,
  },
  {
    id: "smoothies",
    name: "Smoothies",
    image: "/placeholder.svg?height=300&width=300",
    count: 31,
  },
]

export default function CategorySection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/recipes/category/${category.id}`}>
          <Card className="overflow-hidden border-none shadow-md recipe-card h-full">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} recipes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

