"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, User, Heart, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-mobile"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
                      Início
                    </Link>
                    <Link href="/categorias" className="text-lg font-semibold hover:text-primary transition-colors">
                      Categorias
                    </Link>
                    <Link href="/populares" className="text-lg font-semibold hover:text-primary transition-colors">
                      Populares
                    </Link>
                    <Link href="/recentes" className="text-lg font-semibold hover:text-primary transition-colors">
                      Recentes
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            )}

            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl md:text-2xl">
                <span className="text-fitcooker-orange">Fit</span>
                <span className="text-fitcooker-yellow">Cooker</span>
              </span>
            </Link>
          </div>

          {!isMobile && (
            <nav className="mx-6 hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/categorias" className="text-sm font-medium hover:text-primary transition-colors">
                Categorias
              </Link>
              <Link href="/populares" className="text-sm font-medium hover:text-primary transition-colors">
                Populares
              </Link>
              <Link href="/recentes" className="text-sm font-medium hover:text-primary transition-colors">
                Recentes
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input type="search" placeholder="Buscar receitas..." className="w-[200px] md:w-[300px]" autoFocus />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Fechar busca</span>
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
              </Button>
            )}

            <Button variant="ghost" size="icon" asChild>
              <Link href="/favoritos">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favoritos</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href="/perfil">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Link>
            </Button>

            <Button variant="default" size="sm" className="hidden md:flex" asChild>
              <Link href="/adicionar-receita">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Receita
              </Link>
            </Button>

            <Button variant="default" size="icon" className="md:hidden" asChild>
              <Link href="/adicionar-receita">
                <Plus className="h-5 w-5" />
                <span className="sr-only">Adicionar Receita</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

