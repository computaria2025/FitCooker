import { Suspense } from "react"
import RecipeFilters from "@/components/recipe-filters"
import RecipeGrid from "@/components/recipe-grid"
import RecipeSearch from "@/components/recipe-search"
import { Skeleton } from "@/components/ui/skeleton"

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Recipes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our collection of fitness-focused recipes with detailed nutritional information.
        </p>
      </div>

      <Suspense fallback={<SearchSkeleton />}>
        <RecipeSearch />
      </Suspense>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-1/4">
          <Suspense fallback={<FiltersSkeleton />}>
            <RecipeFilters />
          </Suspense>
        </div>
        <div className="w-full lg:w-3/4">
          <Suspense fallback={<RecipeGridSkeleton />}>
            <RecipeGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function SearchSkeleton() {
  return (
    <div className="max-w-2xl mx-auto">
      <Skeleton className="h-12 w-full rounded-md" />
    </div>
  )
}

function FiltersSkeleton() {
  return <Skeleton className="h-[600px] w-full rounded-md" />
}

function RecipeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-48 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <div className="flex space-x-2">
            <Skeleton className="h-8 w-16 rounded-md" />
            <Skeleton className="h-8 w-16 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}

