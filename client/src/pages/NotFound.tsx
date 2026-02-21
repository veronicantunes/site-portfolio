import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="container text-center">
          <span
            className="font-serif block mb-4"
            style={{ color: "#FF5722", fontWeight: 900, fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            404
          </span>
          <h1
            className="font-serif text-xl md:text-2xl mb-4"
            style={{ color: "#333333", fontWeight: 700 }}
          >
            Página não encontrada
          </h1>
          <p className="text-sm mb-8" style={{ color: "#666666" }}>
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link href="/">
            <span
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] transition-all duration-300 hover:gap-3"
              style={{ backgroundColor: "#FF5722", color: "#FFFFFF" }}
            >
              <ArrowLeft size={16} /> Voltar para home
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
