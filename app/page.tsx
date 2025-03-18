import { HeroSection } from "@/components/hero-section"
import { FeaturedRecipes } from "@/components/featured-recipes"
import { CategoriesSection } from "@/components/categories-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedRecipes />
      <CategoriesSection />
      <NewsletterSection />
    </>
  )
}

