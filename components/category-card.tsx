import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  id: string
  name: string
  image: string
  recipeCount: number
}

export function CategoryCard({ id, name, image, recipeCount }: CategoryCardProps) {
  return (
    <Link href={`/categorias/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md group">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fitcooker-black/70 to-transparent" />
          <CardContent className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-semibold text-lg text-white">{name}</h3>
            <p className="text-sm text-white/80">{recipeCount} receitas</p>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}

