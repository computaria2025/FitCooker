import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-fitcooker-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-fitcooker-orange">Fit</span>
              <span className="text-fitcooker-yellow">Cooker</span>
            </h3>
            <p className="text-white/70 mb-4">Receitas fitness deliciosas para uma vida saudável e equilibrada.</p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-fitcooker-yellow transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              {[
                "Café da Manhã",
                "Almoço",
                "Jantar",
                "Lanches",
                "Sobremesas",
                "Bebidas",
                "Pré-treino",
                "Pós-treino",
              ].map((category) => (
                <li key={category}>
                  <Link
                    href={`/categorias/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-fitcooker-yellow transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {[
                { name: "Sobre Nós", href: "/sobre" },
                { name: "Contato", href: "/contato" },
                { name: "FAQ", href: "/faq" },
                { name: "Blog", href: "/blog" },
                { name: "Termos de Uso", href: "/termos" },
                { name: "Política de Privacidade", href: "/privacidade" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-fitcooker-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-white/70">
              <li>contato@fitcooker.com</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} FitCooker. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

