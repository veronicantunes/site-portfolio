/*
 * Layout Component - Swiss Editorial Revival
 * Design: Clean editorial layout with fixed header on scroll,
 * generous whitespace, Playfair Display + Lato typography system.
 * Accent: #FF5722 used sparingly for maximum impact.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, ArrowUp, Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleCasesClick = (e: React.MouseEvent) => {
    if (location === "/") {
      e.preventDefault();
      const el = document.getElementById("cases");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#E0E0E0]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/">
          <span
            className="font-serif text-lg md:text-xl tracking-tight"
            style={{ color: "#333333", fontWeight: 700 }}
          >
            VA<span style={{ color: "#FF5722" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <span
              className="text-xs uppercase tracking-[0.15em] font-sans font-normal transition-colors duration-300 hover:text-[#FF5722]"
              style={{ color: location === "/" ? "#FF5722" : "#555555" }}
            >
              Home
            </span>
          </Link>
          <Link href="/#cases" onClick={handleCasesClick}>
            <span
              className="text-xs uppercase tracking-[0.15em] font-sans font-normal transition-colors duration-300 hover:text-[#FF5722]"
              style={{ color: "#555555" }}
            >
              Cases
            </span>
          </Link>
          <a
            href="https://www.linkedin.com/in/veronicantunes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] font-sans font-normal transition-colors duration-300 hover:text-[#FF5722]"
            style={{ color: "#555555" }}
          >
            LinkedIn
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X size={20} color="#333333" />
          ) : (
            <Menu size={20} color="#333333" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E0E0E0] overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              <Link href="/">
                <span className="text-sm uppercase tracking-[0.15em] font-sans" style={{ color: "#333333" }}>
                  Home
                </span>
              </Link>
              <Link href="/#cases" onClick={handleCasesClick}>
                <span className="text-sm uppercase tracking-[0.15em] font-sans" style={{ color: "#333333" }}>
                  Cases
                </span>
              </Link>
              <a
                href="https://www.linkedin.com/in/veronicantunes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-[0.15em] font-sans"
                style={{ color: "#333333" }}
              >
                LinkedIn
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <span
              className="font-serif text-2xl tracking-tight"
              style={{ color: "#333333", fontWeight: 700 }}
            >
              Verônica Antunes<span style={{ color: "#FF5722" }}>.</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#666666" }}>
              Disponível para oportunidades em Product
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.15em] font-sans font-normal mb-4"
              style={{ color: "#999999" }}
            >
              Navegação
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <span className="text-sm transition-colors duration-300 hover:text-[#FF5722]" style={{ color: "#555555" }}>
                  Home
                </span>
              </Link>
              <Link href="/case-ia">
                <span className="text-sm transition-colors duration-300 hover:text-[#FF5722]" style={{ color: "#555555" }}>
                  Case: Laboratório de IA
                </span>
              </Link>
              <Link href="/case-portfolio">
                <span className="text-sm transition-colors duration-300 hover:text-[#FF5722]" style={{ color: "#555555" }}>
                  Case: Portfolio de Produtos
                </span>
              </Link>
              <Link href="/case-okrs">
                <span className="text-sm transition-colors duration-300 hover:text-[#FF5722]" style={{ color: "#555555" }}>
                  Case: OKRs Enterprise
                </span>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.15em] font-sans font-normal mb-4"
              style={{ color: "#999999" }}
            >
              Contato
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/veronicantunes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-2 transition-colors duration-300 hover:text-[#FF5722]"
                style={{ color: "#555555" }}
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="mailto:veronicantunesf@gmail.com"
                className="text-sm flex items-center gap-2 transition-colors duration-300 hover:text-[#FF5722]"
                style={{ color: "#555555" }}
              >
                <Mail size={14} />
                veronicantunesf@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E0E0E0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "#999999" }}>
            &copy; 2026 Verônica Antunes. Todos os direitos reservados.
          </p>
          <p className="text-xs font-serif italic" style={{ color: "#BBBBBB" }}>
            Onde estratégia encontra execução.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-colors duration-300"
          style={{ backgroundColor: "#FF5722", color: "#FFFFFF" }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
