"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function RecipeSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")

  // Initialize state after component mounts to avoid hydration mismatch
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "")
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())

    if (searchQuery) {
      params.set("q", searchQuery)
    } else {
      params.delete("q")
    }

    router.push(`/recipes?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
      <Input
        type="search"
        placeholder="Search for recipes, ingredients, or categories..."
        className="pl-10 py-6 text-base"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <Button
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Search
      </Button>
    </form>
  )
}

