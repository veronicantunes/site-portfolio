/*
 * Case IA Page - Swiss Editorial Revival
 * Full case study: Laboratório de IA na Globo
 * Sections: Context, Challenges, Approach, Deliverables, Results, Learnings, Skills
 */
import Layout from "@/components/Layout";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ClipboardList,
  AlertTriangle,
  Target,
  Package,
  BarChart3,
  Lightbulb,
  Calendar,
  Users,
  Building2,
  UserCircle,
  Search,
  FlaskConical,
  FileText,
  Layers,
  RefreshCw,
  MessageSquare,
} from "lucide-react";

const CASE_IA_HERO = "https://private-us-east-1.manuscdn.com/sessionFile/Q4hh0nJv4MAaZJwGicPvcE/sandbox/KXF13z1u3M8PmHW22qtUyj-img-2_1771685385000_na1fn_Y2FzZS1pYS1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUTRoaDBuSnY0TUFhWkp3R2ljUHZjRS9zYW5kYm94L0tYRjEzejF1M004UG1IVzIycXRVeWotaW1nLTJfMTc3MTY4NTM4NTAwMF9uYTFmbl9ZMkZ6WlMxcFlTMW9aWEp2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I~FFvzWdGPdsde-lJwukD2PVXgqSpn8DtWQllfymTUbVWhCWEjhtIj8dkXk4gJFfvAe6Vt1hMvgSanvpNJlPS2uhZSvNBtoDxZn8wxEbr7GBwz91bh1dN5ozG3XCCI99p0b5my9rcwiw1Ch5z3YYcYldR8EiFDaDjPlpuxyOFavT1e~qVfHZmpg5XMQ1VGSt-yoIXwU1Rn8GAUgNFIj7~bAMUpGzhz4GWHYlcTZT~wizTjE4rcUQ3-27lVuC2BQj1Eib4x9a8TCGz8379cc0x~9RWrJwiB2EPEhSmGbieytbzsALTnUe0S516mBh48JThXAeg7ocD1uTOMPad9QjhQ__";

/* ─── Data ─── */
const challenges = [
  { icon: BarChart3, title: "Ausência de dados", text: "Nenhuma métrica interna sobre viabilidade de IA em produção audiovisual real" },
  { icon: Users, title: "Resistência cultural", text: "Medo de substituição profissional, apego a processos tradicionais estabelecidos há décadas" },
  { icon: AlertTriangle, title: "Orçamento limitado", text: "Orçamento restrito, com a maioria dos testes feitos em versões trial. Contratações pontuais só após validação da ferramenta" },
  { icon: Target, title: "Validação C-level", text: "Necessidade de apresentar dados concretos para múltiplos stakeholders executivos sem métricas prévias" },
  { icon: Calendar, title: "Prazo apertado", text: "7 semanas para produzir um curta de 20 a 30 minutos e gerar insights acionáveis que fundamentassem decisões de investimento" },
];

const sprintSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Pesquisa de ferramentas, mapeamento de possibilidades e definição de hipóteses para o ciclo",
  },
  {
    icon: FlaskConical,
    title: "Teste Prático",
    description: "Produção prática usando as ferramentas selecionadas, testando em etapas reais do curta-metragem",
  },
  {
    icon: Package,
    title: "Entrega",
    description: "Consolidação dos resultados do ciclo, documentação de processos e aprendizados",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Coleta de percepções dos profissionais envolvidos, análise qualitativa e quantitativa",
  },
];

const sprintHighlights = [
  "7 ciclos semanais de discovery, teste prático, entrega e feedback",
  "35+ ferramentas de IA testadas ao longo das sprints",
  "60+ profissionais envolvidos (roteiro, direção, arte, fotografia, edição, VFX, design, sonoplastia, figurino, tecnologia, entre outros)",
  "Produção de curta-metragem ficcional como proof of concept",
  "Documentação contínua de processo, limitações e aprendizados",
  "Apresentação executiva com recomendações estratégicas para C-levels",
];

const deliverables = [
  { title: "Framework de avaliação de ferramentas IA", text: "Critérios de qualidade, usabilidade, custo, ética e viabilidade técnica" },
  { title: "Curta-metragem produzido 100% com IA", text: "Proof of concept tangível demonstrando capacidades e limitações" },
  { title: "Relatório de pesquisa completo", text: "~20 respondentes de diversas áreas, dados quantitativos e qualitativos, insights acionáveis" },
  { title: "Apresentação executiva para C-levels", text: "Recomendações estratégicas fundamentadas em dados" },
  { title: "Documentação de processos", text: "Guia replicável para futuros projetos de IA na empresa" },
];

const results = [
  { value: 20, suffix: "", label: "respondentes de diversas áreas", sublabel: "Pesquisa validada" },
  { value: 73, suffix: "%", label: "perceberam ganho significativo", sublabel: "Percepção de produtividade" },
  { value: 60, suffix: "%", label: "relataram carga cognitiva alta", sublabel: "Esforço mental" },
  { value: 67, suffix: "%", label: "dispostos a integrar IA", sublabel: "Intenção de adoção" },
];

const learnings = [
  { title: "IA não substitui, amplifica", text: "Profissionais veem IA como ferramenta complementar, não ameaça, quando envolvidos ativamente no processo de teste e validação." },
  { title: "Curva de aprendizado é subestimada", text: "Ganho de produtividade existe e é real, mas exige investimento significativo em tempo de treinamento e adaptação de processos." },
  { title: "Pesquisa qualitativa é crítica", text: "Números sozinhos não capturam nuances emocionais (medo, entusiasmo, ceticismo) que determinam sucesso de adoção." },
  { title: "Stakeholder management é contínuo", text: "Comunicação constante e transparente com stakeholders é essencial para manter alinhamento e apoio ao longo de projetos de inovação." },
  { title: "Viés de novidade é real", text: "Entusiasmo inicial com ferramentas pode mascarar limitações de longo prazo, exigindo validação estendida antes de decisões de investimento." },
];

const caseSkills = [
  "Product Discovery", "User Research", "Stakeholder Management", "IA Aplicada",
  "Análise Quantitativa", "Análise Qualitativa", "Facilitação", "Gestão de Projetos",
  "Apresentação Executiva", "Frameworks de Avaliação", "Priorização", "Roadmapping",
];

/* ─── Result Counter ─── */
function ResultCard({ value, suffix, label, sublabel, index }: { value: number; suffix: string; label: string; sublabel: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const count = useCountUp(value, 1500, true, isVisible);

  return (
    <StaggerItem index={index}>
      <div ref={ref} className="p-6 md:p-8 border border-[#E0E0E0] bg-white text-center transition-all duration-300 hover:border-[#FF5722]/30 hover:shadow-md">
        <p className="text-xs uppercase tracking-[0.15em] font-sans mb-3" style={{ color: "#999999" }}>
          {sublabel}
        </p>
        <span className="font-serif block mb-2" style={{ color: "#FF5722", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          {count}{suffix}
        </span>
        <p className="text-sm" style={{ color: "#666666" }}>{label}</p>
      </div>
    </StaggerItem>
  );
}

/* ─── PAGE ─── */
export default function CaseIA() {
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
            <span style={{ color: "#555555" }}>Laboratório de IA na Globo</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block text-[10px] uppercase tracking-[0.1em] font-sans px-3 py-1.5 mb-6"
                style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}
              >
                IA Aplicada | Pesquisa | 2024
              </span>
              <h1
                className="font-serif mb-4"
                style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
              >
                Avaliação de Impacto de IA em Produção de Conteúdo<span style={{ color: "#FF5722" }}>.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#666666" }}>
                Como medir viabilidade, percepção e intenção de adoção de IA generativa em produção audiovisual enterprise
              </p>
            </div>
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={CASE_IA_HERO}
                alt="Laboratório de IA na Globo - Visualização de inteligência artificial em produção de conteúdo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Context */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <ClipboardList size={18} style={{ color: "#FF5722" }} />
              <p className="text-xs uppercase tracking-[0.2em] font-sans" style={{ color: "#FF5722" }}>
                Contexto
              </p>
            </div>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O cenário<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Empresa", value: "Globo", sub: "Maior grupo de mídia da América Latina" },
              { icon: Calendar, label: "Período", value: "Abr - Jun 2024", sub: "7 semanas" },
              { icon: UserCircle, label: "Papel", value: "Enterprise Agile Coach", sub: "Liderando projeto de inovação" },
              { icon: Target, label: "Cenário", value: "IA Generativa", sub: "Pressão por modernização dos processos criativos" },
            ].map((item, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 bg-white border border-[#E0E0E0]">
                  <item.icon size={20} style={{ color: "#FF5722" }} className="mb-3" />
                  <p className="text-xs uppercase tracking-[0.1em] font-sans mb-1" style={{ color: "#999999" }}>{item.label}</p>
                  <p className="font-serif text-lg mb-1" style={{ color: "#333333", fontWeight: 700 }}>{item.value}</p>
                  <p className="text-xs" style={{ color: "#666666" }}>{item.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Challenges */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle size={18} style={{ color: "#FF5722" }} />
              <p className="text-xs uppercase tracking-[0.2em] font-sans" style={{ color: "#FF5722" }}>
                Desafios
              </p>
            </div>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O que enfrentamos<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="space-y-4">
            {challenges.map((c, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex gap-4 items-start p-5 border-l-2 bg-white transition-all duration-300 hover:bg-[#FAFAFA]" style={{ borderColor: "#FF5722" }}>
                  <c.icon size={20} style={{ color: "#FF5722", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 className="font-serif text-base mb-1" style={{ color: "#333333", fontWeight: 700 }}>{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{c.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Approach - Sprint Cycles */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <Target size={18} style={{ color: "#FF5722" }} />
              <p className="text-xs uppercase tracking-[0.2em] font-sans" style={{ color: "#FF5722" }}>
                Abordagem
              </p>
            </div>
            <h2 className="font-serif mb-4" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Sprints semanais<span style={{ color: "#FF5722" }}>.</span>
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: "#666666" }}>
              Implementamos ciclos semanais inspirados no Scrum, sem nomeá-lo formalmente, evitando resistência em equipes de contextos mais tradicionais. Cada semana seguia o mesmo ciclo: discovery, teste prático, entrega e coleta de feedback, gerando aprendizado incremental a cada iteração para todos os envolvidos.
            </p>
          </SectionReveal>

          {/* Cycle diagram */}
          <SectionReveal delay={0.1}>
            <div className="relative mb-12">
              {/* Desktop: circle with cards positioned outside */}
              <div className="hidden md:block">
                <div className="relative mx-auto" style={{ width: "1000px", height: "600px", maxWidth: "100%", overflowX: "auto", paddingLeft: "20px", paddingRight: "20px" }}>
                  {/* Circle in center */}
                  <div className="absolute" style={{ left: "250px", top: "50px", width: "500px", height: "500px" }}>
                    {/* Central label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                      <RefreshCw size={28} style={{ color: "#FF5722" }} className="mb-2" />
                      <span className="font-serif text-3xl block" style={{ color: "#FF5722", fontWeight: 900 }}>7</span>
                      <span className="text-xs uppercase tracking-[0.15em] font-sans" style={{ color: "#666666" }}>sprints semanais</span>
                    </div>

                    {/* Circular track */}
                    <svg className="absolute inset-0" viewBox="0 0 500 500" fill="none">
                      <circle cx="250" cy="250" r="180" stroke="#E0E0E0" strokeWidth="1.5" fill="none" />
                      <circle cx="250" cy="250" r="180" stroke="#FF5722" strokeWidth="2.5" fill="none" strokeDasharray="10 14" opacity="0.35" />
                      {/* Arrow arcs */}
                      <path d="M 340 85 Q 395 125 415 190" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <path d="M 415 320 Q 395 385 340 420" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <path d="M 160 420 Q 105 385 85 320" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <path d="M 85 190 Q 105 125 160 85" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M 0 0 L 8 4 L 0 8 Z" fill="#FF5722" opacity="0.5" />
                        </marker>
                      </defs>
                    </svg>

                    {/* Small dot nodes on the circle at cardinal points */}
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ top: "70px", left: "50%", transform: "translateX(-50%)" }} />
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ top: "50%", right: "70px", transform: "translateY(-50%)" }} />
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ bottom: "70px", left: "50%", transform: "translateX(-50%)" }} />
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ top: "50%", left: "70px", transform: "translateY(-50%)" }} />
                  </div>

                  {/* Top card: Discovery - centered above circle */}
                  <div className="absolute text-center" style={{ top: "-40px", left: "50%", transform: "translateX(-50%)", width: "240px" }}>
                    <div className="w-11 h-11 mx-auto mb-2 flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <Search size={20} style={{ color: "#FF5722" }} />
                    </div>
                    <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[0].title}</p>
                    <p className="text-[12px] leading-relaxed" style={{ color: "#666666" }}>{sprintSteps[0].description}</p>
                  </div>

                  {/* Right card: Teste Prático - to the right of circle */}
                  <div className="absolute" style={{ top: "50%", right: "-40px", transform: "translateY(-50%)", width: "200px" }}>
                    <div className="w-11 h-11 mb-2 flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <FlaskConical size={20} style={{ color: "#FF5722" }} />
                    </div>
                    <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[1].title}</p>
                    <p className="text-[12px] leading-relaxed" style={{ color: "#666666" }}>{sprintSteps[1].description}</p>
                  </div>

                  {/* Bottom card: Entrega - centered below circle */}
                  <div className="absolute text-center" style={{ bottom: "-40px", left: "50%", transform: "translateX(-50%)", width: "240px" }}>
                    <p className="text-[12px] leading-relaxed mb-1" style={{ color: "#666666" }}>{sprintSteps[2].description}</p>
                    <p className="font-serif text-sm mb-2" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[2].title}</p>
                    <div className="w-11 h-11 mx-auto flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <Package size={20} style={{ color: "#FF5722" }} />
                    </div>
                  </div>

                  {/* Left card: Feedback - to the left of circle */}
                  <div className="absolute text-right" style={{ top: "50%", left: "-40px", transform: "translateY(-50%)", width: "200px" }}>
                    <div className="w-11 h-11 ml-auto mb-2 flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <MessageSquare size={20} style={{ color: "#FF5722" }} />
                    </div>
                    <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[3].title}</p>
                    <p className="text-[12px] leading-relaxed" style={{ color: "#666666" }}>{sprintSteps[3].description}</p>
                  </div>
                </div>
              </div>

              {/* Mobile: linear flow with arrows */}
              <div className="md:hidden space-y-4">
                {sprintSteps.map((step, i) => (
                  <div key={i}>
                    <div className="flex gap-4 items-start p-4 bg-white border border-[#E0E0E0]">
                      <div
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: "rgba(255,87,34,0.08)" }}
                      >
                        <step.icon size={18} style={{ color: "#FF5722" }} />
                      </div>
                      <div>
                        <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>
                          {step.title}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: "#666666" }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {i < sprintSteps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ChevronRight size={16} style={{ color: "#FF5722", transform: "rotate(90deg)" }} />
                      </div>
                    )}
                    {i === sprintSteps.length - 1 && (
                      <div className="flex justify-center py-2">
                        <div className="flex items-center gap-2">
                          <RefreshCw size={14} style={{ color: "#FF5722" }} />
                          <span className="text-xs font-sans" style={{ color: "#FF5722" }}>Repeat × 7</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Sprint highlights */}
          <SectionReveal delay={0.2}>
            <div className="p-6 md:p-8 bg-white border border-[#E0E0E0]">
              <p className="text-xs uppercase tracking-[0.15em] font-sans mb-5" style={{ color: "#FF5722" }}>
                O que as 7 sprints produziram
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sprintHighlights.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#FF5722" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Deliverables */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <Package size={18} style={{ color: "#FF5722" }} />
              <p className="text-xs uppercase tracking-[0.2em] font-sans" style={{ color: "#FF5722" }}>
                Entregas Principais
              </p>
            </div>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O que entregamos<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 border border-[#E0E0E0] h-full transition-all duration-300 hover:border-[#FF5722]/30">
                  <span
                    className="inline-block font-serif text-3xl mb-3"
                    style={{ color: "#FF5722", fontWeight: 900 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-base mb-2" style={{ color: "#333333", fontWeight: 700 }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{d.text}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Results */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 size={18} style={{ color: "#FF5722" }} />
              <p className="text-xs uppercase tracking-[0.2em] font-sans" style={{ color: "#FF5722" }}>
                Resultados
              </p>
            </div>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Os números<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <ResultCard key={i} index={i} value={r.value} suffix={r.suffix} label={r.label} sublabel={r.sublabel} />
            ))}
          </div>

          <SectionReveal delay={0.4}>
            <div className="mt-8 p-6 bg-white border border-[#E0E0E0]">
              <p className="text-xs uppercase tracking-[0.15em] font-sans mb-2" style={{ color: "#999999" }}>
                Impacto organizacional
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                Dados gerados fundamentaram decisão de investimento em IA pela diretoria, com projeção de redução de custos operacionais em ~60% e aumento de produtividade em ~40% nos fluxos de produção audiovisual.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6. Learnings */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb size={18} style={{ color: "#FF5722" }} />
              <p className="text-xs uppercase tracking-[0.2em] font-sans" style={{ color: "#FF5722" }}>
                Aprendizados
              </p>
            </div>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O que aprendi<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="space-y-6 max-w-3xl">
            {learnings.map((l, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex gap-4 items-start">
                  <span
                    className="font-serif text-2xl flex-shrink-0 w-10 text-right"
                    style={{ color: "#FF5722", fontWeight: 900 }}
                  >
                    {i + 1}.
                  </span>
                  <div className="pb-6 border-b border-[#E0E0E0] last:border-b-0">
                    <h3 className="font-serif text-base mb-2" style={{ color: "#333333", fontWeight: 700 }}>{l.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{l.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Skills Applied */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.2em] font-sans mb-3" style={{ color: "#FF5722" }}>
              Competências Aplicadas
            </p>
          </SectionReveal>

          <div className="flex flex-wrap gap-3">
            {caseSkills.map((skill, i) => (
              <StaggerItem key={skill} index={i}>
                <span
                  className="inline-block text-sm font-sans px-4 py-2 transition-all duration-300 hover:bg-[#FF5722] hover:text-white hover:border-[#FF5722]"
                  style={{ color: "#555555", border: "1px solid #E0E0E0", backgroundColor: "#FFFFFF" }}
                >
                  {skill}
                </span>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container text-center">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/case-portfolio">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] transition-all duration-300 hover:gap-3"
                  style={{ backgroundColor: "#FF5722", color: "#FFFFFF" }}
                >
                  Ver próximo case <ArrowRight size={16} />
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
