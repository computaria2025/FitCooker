"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de envio
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas melhores receitas fitness por email.",
      })
    }, 1000)
  }

  return (
    <section className="py-12 bg-fitcooker-yellow/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Receba Receitas Fitness Exclusivas</h2>
          <p className="text-muted-foreground mb-6">
            Inscreva-se para receber nossas melhores receitas, dicas de nutrição e promoções exclusivas diretamente no
            seu email.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Inscrevendo..." : "Inscrever"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

