import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import FeaturedRecipes from "@/components/featured-recipes"
import CategorySection from "@/components/category-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Healthy food background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl hero-animation">
            <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-1 text-sm">Healthy & Delicious</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Fitness-Focused <span className="text-primary">Recipes</span> for Your Healthy Lifestyle
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Find, share, and rate nutritious recipes designed for fitness enthusiasts. Each recipe includes detailed
              nutritional information to help you meet your health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Recipes
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Add Your Recipe
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
            <ChevronDown className="h-10 w-10 bounce" />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular fitness recipes, loved by the community for their taste and nutritional benefits.
            </p>
          </div>
          <FeaturedRecipes />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect recipes for any meal of the day or dietary preference.
            </p>
          </div>
          <CategorySection />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How FitCooker Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of fitness enthusiasts sharing healthy recipes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg recipe-card">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Discover Recipes</h3>
                <p className="text-center text-muted-foreground">
                  Browse through our extensive collection of fitness-focused recipes with complete nutritional
                  information.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg recipe-card">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Cook & Enjoy</h3>
                <p className="text-center text-muted-foreground">
                  Follow our easy step-by-step instructions to prepare delicious and healthy meals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg recipe-card">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Share & Rate</h3>
                <p className="text-center text-muted-foreground">
                  Share your own recipes and rate others to help the community find the best healthy options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from fitness enthusiasts who have transformed their diet with FitCooker recipes.
            </p>
          </div>
          <TestimonialSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of fitness enthusiasts who are discovering, sharing, and enjoying healthy recipes every day.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up Now - It's Free
          </Button>
        </div>
      </section>
    </div>
  )
}

