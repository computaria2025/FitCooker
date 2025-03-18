import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Receitas fitness saudáveis e deliciosas"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fitcooker-black/80 to-transparent" />
        <div className="container relative h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Receitas fitness deliciosas para uma vida saudável
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Descubra centenas de receitas nutritivas, fáceis de preparar e que vão transformar sua alimentação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/categorias">
                  Explorar Receitas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link href="/adicionar-receita">Compartilhar Receita</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-16 relative z-10">
          {[
            { icon: "🥗", title: "Baixa Caloria", desc: "Receitas leves e nutritivas" },
            { icon: "💪", title: "Rica em Proteína", desc: "Ideal para ganho muscular" },
            { icon: "🌱", title: "Vegetariana", desc: "Opções plant-based" },
            { icon: "⏱️", title: "Rápido Preparo", desc: "Prontas em até 30 min" },
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-fitcooker-black p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

