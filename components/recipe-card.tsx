"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Flame, Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface RecipeCardProps {
  id: string
  title: string
  image: string
  category: string
  prepTime: number
  calories: number
  rating: number
  isFavorite?: boolean
  onFavoriteToggle?: () => void
}

export function RecipeCard({
  id,
  title,
  image,
  category,
  prepTime,
  calories,
  rating,
  isFavorite = false,
  onFavoriteToggle = () => {},
}: RecipeCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/receita/${id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-2 left-2 bg-fitcooker-yellow text-fitcooker-black">{category}</Badge>
        </div>
      </Link>
      <CardHeader className="p-4">
        <Link href={`/receita/${id}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{prepTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="h-4 w-4" />
            <span>{calories} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "text-fitcooker-yellow" : "text-muted"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/receita/${id}`}>Ver Receita</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onFavoriteToggle}
            className={isFavorite ? "text-fitcooker-orange" : ""}
            aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

