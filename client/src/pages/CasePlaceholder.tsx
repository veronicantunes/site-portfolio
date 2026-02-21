/*
 * Case Placeholder Page - Swiss Editorial Revival
 * Reusable placeholder for upcoming case studies.
 */
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface CasePlaceholderProps {
  title: string;
  badge: string;
  description: string;
}

export default function CasePlaceholder({ title, badge, description }: CasePlaceholderProps) {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="pt-20 md:pt-24 pb-4 border-b border-[#E0E0E0]">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs font-sans" style={{ color: "#999999" }}>
            <Link href="/">
              <span className="hover:text-[#FF5722] transition-colors">Home</span>
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: "#555555" }}>{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <SectionReveal>
            <span
              className="inline-block text-[10px] uppercase tracking-[0.1em] font-sans px-3 py-1.5 mb-6"
              style={{ backgroundColor: "#F0F0F0", color: "#999999" }}
            >
              {badge}
            </span>
            <h1
              className="font-serif mb-4"
              style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
            >
              {title}<span style={{ color: "#FF5722" }}>.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#999999" }}>
              Em breve
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container max-w-2xl mx-auto text-center">
          <SectionReveal>
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,87,34,0.08)" }}
              >
                <Clock size={28} style={{ color: "#FF5722" }} />
              </div>
            </div>
            <h2
              className="font-serif text-xl md:text-2xl mb-4"
              style={{ color: "#333333", fontWeight: 700 }}
            >
              Este case está em desenvolvimento
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "#666666" }}>
              {description}
            </p>
            <p className="text-sm" style={{ color: "#999999" }}>
              Será publicado em breve.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container text-center">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/case-ia">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] transition-all duration-300 hover:gap-3"
                  style={{ backgroundColor: "#FF5722", color: "#FFFFFF" }}
                >
                  Ver outros cases <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] border transition-all duration-300 hover:border-[#FF5722] hover:text-[#FF5722]"
                  style={{ borderColor: "#E0E0E0", color: "#555555" }}
                >
                  <ArrowLeft size={16} /> Voltar para home
                </span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
