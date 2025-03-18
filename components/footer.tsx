import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
              FitCooker
            </h3>
            <p className="text-gray-300 mb-6">
              Discover, share, and rate healthy fitness recipes with complete nutritional information.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20 rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-primary transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/add-recipe" className="text-gray-300 hover:text-primary transition-colors">
                  Add Recipe
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-primary transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/recipes/category/breakfast" className="text-gray-300 hover:text-primary transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/recipes/category/lunch" className="text-gray-300 hover:text-primary transition-colors">
                  Lunch
                </Link>
              </li>
              <li>
                <Link href="/recipes/category/dinner" className="text-gray-300 hover:text-primary transition-colors">
                  Dinner
                </Link>
              </li>
              <li>
                <Link href="/recipes/category/snacks" className="text-gray-300 hover:text-primary transition-colors">
                  Snacks
                </Link>
              </li>
              <li>
                <Link href="/recipes/category/desserts" className="text-gray-300 hover:text-primary transition-colors">
                  Healthy Desserts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-gray-300 mb-4">Get weekly recipes and cooking tips delivered to your inbox.</p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FitCooker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

