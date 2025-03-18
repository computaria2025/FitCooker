"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Minus, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function AddRecipePage() {
  const router = useRouter()
  const { toast } = useToast()

  const [ingredients, setIngredients] = useState<string[]>([""])
  const [steps, setSteps] = useState<string[]>([""])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""])
  }

  const handleRemoveIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const newIngredients = [...ingredients]
      newIngredients.splice(index, 1)
      setIngredients(newIngredients)
    }
  }

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const handleAddStep = () => {
    setSteps([...steps, ""])
  }

  const handleRemoveStep = (index: number) => {
    if (steps.length > 1) {
      const newSteps = [...steps]
      newSteps.splice(index, 1)
      setSteps(newSteps)
    }
  }

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps]
    newSteps[index] = value
    setSteps(newSteps)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Receita adicionada com sucesso!",
        description: "Sua receita foi enviada para revisão e será publicada em breve.",
      })
      router.push("/")
    }, 1500)
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Adicionar Nova Receita</h1>
      <p className="text-muted-foreground mb-8">Compartilhe sua receita fitness favorita com a comunidade FitCooker.</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>Forneça as informações principais da sua receita.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título da Receita</Label>
                  <Input id="title" placeholder="Ex: Bowl de Açaí Proteico" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva brevemente sua receita..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cafe-da-manha">Café da Manhã</SelectItem>
                        <SelectItem value="almoco">Almoço</SelectItem>
                        <SelectItem value="jantar">Jantar</SelectItem>
                        <SelectItem value="lanches">Lanches</SelectItem>
                        <SelectItem value="sobremesas">Sobremesas</SelectItem>
                        <SelectItem value="bebidas">Bebidas</SelectItem>
                        <SelectItem value="pre-treino">Pré-treino</SelectItem>
                        <SelectItem value="pos-treino">Pós-treino</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Dificuldade</Label>
                    <Select required>
                      <SelectTrigger id="difficulty">
                        <SelectValue placeholder="Selecione a dificuldade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facil">Fácil</SelectItem>
                        <SelectItem value="medio">Médio</SelectItem>
                        <SelectItem value="dificil">Difícil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prepTime">Tempo de Preparo (min)</Label>
                    <Input id="prepTime" type="number" min="1" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="calories">Calorias (kcal)</Label>
                    <Input id="calories" type="number" min="1" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servings">Porções</Label>
                    <Input id="servings" type="number" min="1" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingredientes</CardTitle>
                <CardDescription>Liste todos os ingredientes necessários para a receita.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                      placeholder={`Ingrediente ${index + 1}`}
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveIngredient(index)}
                      disabled={ingredients.length === 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" className="w-full" onClick={handleAddIngredient}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Ingrediente
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modo de Preparo</CardTitle>
                <CardDescription>Descreva o passo a passo para preparar a receita.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-muted rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-2">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Textarea
                        value={step}
                        onChange={(e) => handleStepChange(index, e.target.value)}
                        placeholder={`Passo ${index + 1}`}
                        required
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveStep(index)}
                      disabled={steps.length === 1}
                      className="mt-2"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" className="w-full" onClick={handleAddStep}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Passo
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Imagem da Receita</CardTitle>
                <CardDescription>Adicione uma foto atraente da sua receita.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium">Arraste e solte ou clique para fazer upload</h3>
                  <p className="text-sm text-muted-foreground mt-1">PNG, JPG ou JPEG (máx. 5MB)</p>
                  <Button variant="outline" className="mt-4">
                    Selecionar Arquivo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações Nutricionais</CardTitle>
                <CardDescription>Adicione os valores nutricionais por porção.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="protein">Proteínas (g)</Label>
                    <Input id="protein" type="number" min="0" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carbs">Carboidratos (g)</Label>
                    <Input id="carbs" type="number" min="0" step="0.1" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fat">Gorduras (g)</Label>
                    <Input id="fat" type="number" min="0" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fiber">Fibras (g)</Label>
                    <Input id="fiber" type="number" min="0" step="0.1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>Adicione tags para facilitar a busca da sua receita.</CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Ex: low-carb, proteico, vegano (separados por vírgula)" />
              </CardContent>
            </Card>

            <div className="flex justify-end mt-6">
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Publicar Receita"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

