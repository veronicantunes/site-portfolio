/*
 * Case IA Page - Swiss Editorial Revival
 * Full case study: Laboratório de IA na Globo
 */
import Layout from "@/components/Layout";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Package,
  Search,
  FlaskConical,
  MessageSquare,
  RefreshCw,
  Target,
} from "lucide-react";

/* ─── Data ─── */
const impactMetrics = [
  { number: "66%", label: "Redução de lead time", desc: "de 3 meses para 1 mês por cena" },
  { number: "35+", label: "Ferramentas avaliadas", desc: "em 7 semanas de experimentação" },
  { number: "65", label: "Stakeholders engajados", desc: "incluindo C-level" },
  { number: "R$5M", label: "Economia documentada", desc: "framework informou decisão de adoção (ref. pública Mobile Time)" },
];

const contextCards = [
  { label: "Empresa", value: "Globo", desc: "Maior grupo de mídia da América Latina" },
  { label: "Período", value: "7 semanas", desc: "Abr – Jun 2024" },
  { label: "Meu papel", value: "Enterprise Agile Coach", desc: "Liderança de processo, pesquisa e comunicação com stakeholders para o COE" },
  { label: "Objetivo duplo", value: "Produção + Mapeamento", desc: "Curta-metragem como veículo, mapa de viabilidade como entrega real" },
];

const challenges = [
  { number: "01", title: "Objetivo duplo sem métrica unificada", desc: "O laboratório precisava entregar um produto concreto (o curta) e, simultaneamente, gerar um mapa de viabilidade para o COE. Sem North Star Metric formal, era preciso equilibrar velocidade de produção com profundidade de aprendizado." },
  { number: "02", title: "Critérios de avaliação inexistentes", desc: "Não existiam métricas internas sobre viabilidade de IA em produção audiovisual. Critérios de sucesso e invalidação precisariam emergir da própria experimentação, sem referências prévias no mercado." },
  { number: "03", title: "Gestão de expectativas C-level com invalidações", desc: "Stakeholders executivos acompanhavam semanalmente. Ferramentas promissoras seriam inevitavelmente invalidadas, e o formato de comunicação precisava sustentar confiança mesmo com resultados negativos." },
];

const sprintSteps = [
  { icon: Search, title: "Discovery", description: "Pesquisa de ferramentas, mapeamento de possibilidades e definição de hipóteses para o ciclo" },
  { icon: FlaskConical, title: "Teste Prático", description: "Produção prática usando as ferramentas selecionadas, testando em etapas reais do curta-metragem" },
  { icon: Package, title: "Entrega", description: "Consolidação dos resultados do ciclo, documentação de processos e aprendizados" },
  { icon: MessageSquare, title: "Feedback", description: "Coleta de percepções dos profissionais envolvidos, análise qualitativa e quantitativa" },
];

const strategicDecisions = [
  { title: "Enquadrar como experimento desde o dia zero", desc: "Decidi posicionar o laboratório como discovery, não como entrega garantida. Stakeholders C-level entraram com mentalidade de aprendizado, o que permitiu invalidar ferramentas sem fricção. A melhor gestão de expectativas é a que previne conflito, não a que resolve.", tag: "Trade-off: abrir mão de 'prometer resultado' para ganhar liberdade de experimentação", tagType: "tradeoff" },
  { title: "Deixar critérios de invalidação emergirem da prática", desc: "Em vez de definir critérios a priori, permiti que as 7 semanas de experimentação revelassem o que tornava uma ferramenta viável ou inviável. Os times, organizados por pipeline de produção, construíram coletivamente três lentes de avaliação: técnica, negócio e operacional.", tag: "Resultado: framework de avaliação reutilizável pelo COE", tagType: "outcome" },
  { title: "System demos semanais como mecanismo de transparência radical", desc: "Implementei reviews semanais onde os 6 times apresentavam resultados reais, não slides. Ferramentas eram classificadas ao vivo como 'não válidas para o processo neste momento', com critérios de avaliação compartilhados. Isso eliminava surpresas e mantinha 65 stakeholders alinhados.", tag: "Trade-off: exposição alta (risco de parecer 'pouco progresso') por transparência e confiança", tagType: "tradeoff" },
  { title: "Priorizar velocidade de descoberta sobre profundidade técnica", desc: "Com 35+ ferramentas e apenas 7 semanas, a decisão foi testar amplitude antes de profundidade. Sprints semanais com ciclo completo garantiam aprendizado incremental. Ferramentas promissoras recebiam mais investimento nos ciclos seguintes, as demais eram descartadas rapidamente.", tag: "Resultado: time-to-learning reduzido, decisões de investimento mais informadas", tagType: "outcome" },
  { title: "Pesquisa estruturada como entrega paralela", desc: "Defendi que dados de percepção dos profissionais tinham tanto valor quanto métricas de produção. Conduzi pesquisa com 20 participantes medindo produtividade percebida, carga cognitiva e intenção de adoção. Números sozinhos não capturam nuances emocionais.", tag: "Resultado: dados quali + quanti que fundamentaram decisão de investimento pela diretoria", tagType: "outcome" },
];

const deliverables = [
  { number: "01", title: "Framework de avaliação de ferramentas IA", desc: "Modelo com três lentes (técnica, negócio, operacional) emergido da experimentação. Ativo reutilizável para o COE avaliar futuras tecnologias com critérios testados na prática." },
  { number: "02", title: "Relatório de pesquisa com recomendações", desc: "Dados quantitativos e qualitativos de 20 participantes, com análise de percepção de produtividade, carga cognitiva e intenção de adoção para cada etapa do pipeline." },
  { number: "03", title: "Curta-metragem como proof of concept", desc: "Produto tangível demonstrando capacidades e limitações reais. Veículo de experimentação, não objetivo final do laboratório." },
  { number: "04", title: "Apresentação executiva para C-levels", desc: "Recomendações estratégicas fundamentadas em dados de 7 semanas de experimentação com 35+ ferramentas testadas por 6 times." },
  { number: "05", title: "Documentação de processos replicável", desc: "Guia para futuros projetos de experimentação com IA, incluindo estrutura de sprints, modelo de pesquisa e framework de avaliação." },
];

const results = [
  { label: "Redução de lead time por cena", value: "66%", type: "metric" },
  { label: "Ferramentas avaliadas em 7 semanas", value: "35+", type: "metric" },
  { label: "Economia documentada (ref. pública)", value: "R$5M", type: "metric" },
  { label: "Perceberam ganho de produtividade", value: "73%", type: "positive" },
  { label: "Dispostos a integrar IA no trabalho", value: "67%", type: "positive" },
  { label: "Relataram carga cognitiva alta", value: "60%", type: "warning" },
];

const learnings = [
  { title: "A melhor gestão de expectativas é a que previne conflito", desc: "Enquadrar o laboratório como experimento desde o início foi mais eficaz que qualquer técnica de gerenciamento de stakeholders durante o projeto. Design do contexto de decisão é uma competência de PO que muitos subestimam." },
  { title: "Critérios que emergem da prática têm mais adesão que critérios definidos a priori", desc: "Permitir que os times construíssem coletivamente o framework de avaliação gerou ownership sobre os critérios. O resultado não foi apenas uma lista de ferramentas, mas uma taxonomia testada que diferencia 'experimento interessante' de 'solução pronta para escala'." },
  { title: "Pesquisa qualitativa captura o que métricas não capturam", desc: "73% perceberam ganho de produtividade, mas 60% relataram carga cognitiva alta. Sem a dimensão qualitativa, a diretoria teria visto apenas 'produtividade aumentou' sem entender que a curva de aprendizado é subestimada." },
  { title: "Viés de novidade é real e perigoso para decisões de investimento", desc: "Entusiasmo inicial com ferramentas pode mascarar limitações de longo prazo. Validação estendida antes de decisões de investimento não é conservadorismo, é rigor." },
  { title: "O meta-aprendizado pode ser a entrega mais valiosa", desc: "O framework de avaliação que emergiu do processo se tornou um ativo reutilizável para o COE. Em projetos de discovery, o processo de aprender a avaliar pode ter mais valor que os próprios resultados da avaliação." },
];

const caseSkills = [
  "Product Discovery", "Stakeholder Management (C-level)", "IA Aplicada", "User Research",
  "Frameworks de Avaliação", "Gestão de Experimentos", "Análise Quali + Quanti", "Facilitação Cross-funcional",
  "Comunicação Executiva", "Discovery Contínuo",
];

/* ─── Impact Counter ─── */
function ImpactCard({ number, label, desc, index }: { number: string; label: string; desc: string; index: number }) {
  const { ref } = useScrollReveal(0.2);

  return (
    <StaggerItem index={index}>
      <div ref={ref} className="p-6 md:p-8 border border-[#E0E0E0] bg-white text-center transition-all duration-300 hover:border-[#FF5722]/30 hover:shadow-md">
        <p className="text-xs uppercase tracking-[0.15em] font-sans mb-3" style={{ color: "#999999" }}>
          {label}
        </p>
        <span className="font-serif block mb-2" style={{ color: "#FF5722", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {number}
        </span>
        <p className="text-xs" style={{ color: "#666666" }}>{desc}</p>
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
          <SectionReveal>
            <div className="mb-6">
              <span
                className="inline-block text-[10px] uppercase tracking-[0.1em] font-sans px-3 py-1.5"
                style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}
              >
                IA Aplicada · Discovery · 2024
              </span>
            </div>
            <h1
              className="font-serif mb-6"
              style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
            >
              De experimento a ativo estratégico: validação de IA generativa em produção audiovisual<span style={{ color: "#FF5722" }}>.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: "#666666" }}>
              Como liderei as frentes de processo, pesquisa e stakeholder management em um laboratório de 7 semanas, transformando incerteza organizacional em critérios de decisão de investimento para governança corporativa de IA.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="py-12 md:py-16 border-t border-[#E0E0E0]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactMetrics.map((metric, i) => (
              <ImpactCard key={i} index={i} number={metric.number} label={metric.label} desc={metric.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Contexto</span>
            <h2 className="font-serif mb-6" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O cenário estratégico<span style={{ color: "#FF5722" }}>.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "#666666" }}>
              A Globo, maior grupo de mídia da América Latina, precisava se posicionar frente à transformação que a IA generativa traz para a cadeia audiovisual. A diretoria de tecnologia estabeleceu um objetivo de inovação via IA, e o Centro de Excelência (COE) de IA ficou responsável pela governança. Faltava uma peça: validação prática com produção real.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {contextCards.map((card, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 bg-white border border-[#E0E0E0]">
                  <p className="text-xs uppercase tracking-[0.1em] font-sans mb-2" style={{ color: "#999999" }}>{card.label}</p>
                  <p className="font-serif text-lg mb-2" style={{ color: "#333333", fontWeight: 700 }}>{card.value}</p>
                  <p className="text-xs" style={{ color: "#666666" }}>{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>

          {/* Strategic Flow */}
          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white border border-[#E0E0E0] overflow-hidden">
              <div className="p-6 md:p-8 text-center border-r border-[#E0E0E0] last:border-r-0">
                <p className="text-xs uppercase tracking-[0.1em] font-sans mb-2" style={{ color: "#FF5722" }}>Estratégico</p>
                <p className="font-serif text-base mb-1" style={{ color: "#333333", fontWeight: 700 }}>Diretoria de Tecnologia</p>
                <p className="text-xs" style={{ color: "#666666" }}>Objetivo de inovação via IA</p>
              </div>
              <div className="p-6 md:p-8 text-center border-r border-[#E0E0E0] last:border-r-0">
                <p className="text-xs uppercase tracking-[0.1em] font-sans mb-2" style={{ color: "#FF5722" }}>Governança</p>
                <p className="font-serif text-base mb-1" style={{ color: "#333333", fontWeight: 700 }}>COE de IA</p>
                <p className="text-xs" style={{ color: "#666666" }}>Governança de conteúdo e adoção</p>
              </div>
              <div className="p-6 md:p-8 text-center">
                <p className="text-xs uppercase tracking-[0.1em] font-sans mb-2" style={{ color: "#FF5722" }}>Validação</p>
                <p className="font-serif text-base mb-1" style={{ color: "#333333", fontWeight: 700 }}>Laboratório</p>
                <p className="text-xs" style={{ color: "#666666" }}>Experimentação prática com produção real</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Desafios</span>
            <h2 className="font-serif mb-6" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Três tensões simultâneas<span style={{ color: "#FF5722" }}>.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "#666666" }}>
              O laboratório operava na interseção de três tensões que exigiam decisões constantes sobre onde investir atenção e como comunicar progresso.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 bg-white border border-[#E0E0E0] transition-all duration-300 hover:border-[#FF5722]/30">
                  <p className="text-sm font-serif mb-3" style={{ color: "#FF5722", fontWeight: 700 }}>{c.number}</p>
                  <h3 className="font-serif text-base mb-3" style={{ color: "#333333", fontWeight: 700 }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Sprints Semanais */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Abordagem</span>
     
            </div>
            <h2 className="font-serif mb-4" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Sprints semanais<span style={{ color: "#FF5722" }}>.</span>
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: "#666666" }}>
              Implementamos ciclos semanais inspirados no Scrum, sem nomeá-lo formalmente, evitando resistência em equipes de contextos mais tradicionais. Cada semana seguia o mesmo ciclo: discovery, teste prático, entrega e coleta de feedback, gerando aprendizado incremental a cada iteração para todos os envolvidos.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="relative mb-12">
              <div className="hidden md:block">
                <div className="relative mx-auto" style={{ width: "100%", height: "650px", maxWidth: "1200px", margin: "0 auto" }}>
                  <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "400px", height: "400px" }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                      <RefreshCw size={28} style={{ color: "#FF5722" }} className="mb-2" />
                      <span className="font-serif text-3xl block" style={{ color: "#FF5722", fontWeight: 900 }}>7</span>
                      <span className="text-xs uppercase tracking-[0.15em] font-sans" style={{ color: "#666666" }}>sprints semanais</span>
                    </div>

                    <svg className="absolute inset-0" viewBox="0 0 500 500" fill="none">
                      <circle cx="250" cy="250" r="160" stroke="#E0E0E0" strokeWidth="1.5" fill="none" />
                      <circle cx="250" cy="250" r="160" stroke="#FF5722" strokeWidth="2.5" fill="none" strokeDasharray="10 14" opacity="0.35" />
                      <path d="M 330 95 Q 385 130 405 185" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <path d="M 405 315 Q 385 370 330 405" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <path d="M 170 405 Q 115 370 95 315" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <path d="M 95 185 Q 115 130 170 95" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M 0 0 L 8 4 L 0 8 Z" fill="#FF5722" opacity="0.5" />
                        </marker>
                      </defs>
                    </svg>

                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ top: "60px", left: "50%", transform: "translateX(-50%)" }} />
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ top: "50%", right: "60px", transform: "translateY(-50%)" }} />
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ bottom: "60px", left: "50%", transform: "translateX(-50%)" }} />
                    <div className="absolute w-3 h-3 rounded-full bg-[#FF5722]" style={{ top: "50%", left: "60px", transform: "translateY(-50%)" }} />
                  </div>

                  <div className="absolute text-center" style={{ top: "30px", left: "50%", transform: "translateX(-50%)", width: "260px" }}>
                    <div className="w-11 h-11 mx-auto mb-2 flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <Search size={20} style={{ color: "#FF5722" }} />
                    </div>
                    <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[0].title}</p>
                    <p className="text-[12px] leading-tight" style={{ color: "#666666", wordSpacing: "0.05em" }}>{sprintSteps[0].description}</p>
                  </div>

                  <div className="absolute" style={{ top: "50%", right: "30px", transform: "translateY(-50%)", width: "220px" }}>
                    <div className="w-11 h-11 mb-2 flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <FlaskConical size={20} style={{ color: "#FF5722" }} />
                    </div>
                    <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[1].title}</p>
                    <p className="text-[12px] leading-tight" style={{ color: "#666666", wordSpacing: "0.05em" }}>{sprintSteps[1].description}</p>
                  </div>

                  <div className="absolute text-center" style={{ bottom: "30px", left: "50%", transform: "translateX(-50%)", width: "260px" }}>
                    <p className="text-[12px] leading-tight mb-1" style={{ color: "#666666", wordSpacing: "0.05em" }}>{sprintSteps[2].description}</p>
                    <p className="font-serif text-sm mb-2" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[2].title}</p>
                    <div className="w-11 h-11 mx-auto flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <Package size={20} style={{ color: "#FF5722" }} />
                    </div>
                  </div>

                  <div className="absolute text-right" style={{ top: "50%", left: "30px", transform: "translateY(-50%)", width: "220px" }}>
                    <div className="w-11 h-11 ml-auto mb-2 flex items-center justify-center rounded-full bg-white" style={{ border: "2px solid rgba(255,87,34,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <MessageSquare size={20} style={{ color: "#FF5722" }} />
                    </div>
                    <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{sprintSteps[3].title}</p>
                    <p className="text-[12px] leading-tight" style={{ color: "#666666", wordSpacing: "0.05em" }}>{sprintSteps[3].description}</p>
                  </div>
                </div>
              </div>

              <div className="md:hidden space-y-4">
                {sprintSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i}>
                      <div className="flex gap-4 items-start p-4 bg-white border border-[#E0E0E0]">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,87,34,0.08)" }}>
                          <Icon size={18} style={{ color: "#FF5722" }} />
                        </div>
                        <div>
                          <p className="font-serif text-sm mb-1" style={{ color: "#333333", fontWeight: 700 }}>{step.title}</p>
                          <p className="text-xs leading-relaxed" style={{ color: "#666666" }}>{step.description}</p>
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
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Strategic Decisions */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Decisões Estratégicas</span>
            <h2 className="font-serif mb-6" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O que decidi e por quê<span style={{ color: "#FF5722" }}>.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: "#666666" }}>
              Meu papel neste contexto não era gerenciar backlog, era liderar as frentes que definiam as condições do experimento e a qualidade das evidências geradas.
            </p>
          </SectionReveal>

          <div className="space-y-4">
            {strategicDecisions.map((d, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 md:p-8 bg-white border border-[#E0E0E0] transition-all duration-300 hover:border-[#FF5722]/30">
                  <h3 className="font-serif text-base mb-4" style={{ color: "#333333", fontWeight: 700 }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#666666" }}>{d.desc}</p>
                  <div
                    className="inline-block text-xs px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: d.tagType === "tradeoff" ? "rgba(196,133,12,0.1)" : "rgba(45,138,86,0.1)",
                      color: d.tagType === "tradeoff" ? "#C4850C" : "#2D8A56",
                    }}
                  >
                    {d.tag}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Entregas Principais</span>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O que entregamos<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 bg-white border border-[#E0E0E0] transition-all duration-300 hover:border-[#FF5722]/30 relative">
                  <span className="font-serif text-3xl absolute top-4 right-4" style={{ color: "#E0E0E0", fontWeight: 900 }}>{d.number}</span>
                  <h3 className="font-serif text-base mb-3" style={{ color: "#333333", fontWeight: 700 }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Resultados</span>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Evidências geradas<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 md:p-8 bg-white border border-[#E0E0E0]">
              <p className="text-xs uppercase tracking-[0.15em] font-sans mb-5" style={{ color: "#999999" }}>
                Métricas de eficiência
              </p>
              <div className="space-y-4">
                {results.slice(0, 3).map((r, i) => (
                  <div key={i} className="flex justify-between items-baseline pb-4 border-b border-[#E0E0E0] last:border-b-0">
                    <p className="text-sm" style={{ color: "#666666" }}>{r.label}</p>
                    <span className="font-serif text-lg" style={{ color: "#FF5722", fontWeight: 900 }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white border border-[#E0E0E0]">
              <p className="text-xs uppercase tracking-[0.15em] font-sans mb-5" style={{ color: "#999999" }}>
                Pesquisa de percepção (20 participantes)
              </p>
              <div className="space-y-4">
                {results.slice(3).map((r, i) => (
                  <div key={i} className="flex justify-between items-baseline pb-4 border-b border-[#E0E0E0] last:border-b-0">
                    <p className="text-sm" style={{ color: "#666666" }}>{r.label}</p>
                    <span className="font-serif text-lg" style={{
                      color: r.type === "positive" ? "#2D8A56" : r.type === "warning" ? "#C4850C" : "#FF5722",
                      fontWeight: 900
                    }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SectionReveal delay={0.2}>
            <div className="p-6 md:p-8 bg-white border border-[#E0E0E0]">
              <p className="text-xs uppercase tracking-[0.15em] font-sans mb-4" style={{ color: "#999999" }}>
                Impacto organizacional
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm" style={{ color: "#666666" }}>
                  <span style={{ color: "#FF5722", flexShrink: 0 }}>•</span>
                  Dados gerados fundamentaram decisão de investimento em IA pela diretoria
                </li>
                <li className="flex gap-3 text-sm" style={{ color: "#666666" }}>
                  <span style={{ color: "#FF5722", flexShrink: 0 }}>•</span>
                  Framework de avaliação adotado como referência pelo COE de IA para decisões futuras
                </li>
                <li className="flex gap-3 text-sm" style={{ color: "#666666" }}>
                  <span style={{ color: "#FF5722", flexShrink: 0 }}>•</span>
                  Laboratório posicionado como ativo escalável dentro da governança corporativa, não como experimento isolado
                </li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="p-6 md:p-8 bg-white border border-[#E0E0E0]">
              <p className="text-sm mb-3" style={{ color: "#333333", fontWeight: 700 }}>
                Limitação admitida
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                Não havia uma North Star Metric formal unificada. Operei com proxies complementares: lead time (eficiência operacional), percepção dos times (prontidão para adoção) e engajamento de stakeholders. Se refizesse hoje, proporia uma métrica como "percentual de ferramentas validadas prontas para recomendação ao COE".
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Aprendizados</span>
            <h2 className="font-serif mb-10" style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              O que levo comigo<span style={{ color: "#FF5722" }}>.</span>
            </h2>
          </SectionReveal>

          <div className="space-y-0 bg-white border border-[#E0E0E0] overflow-hidden">
            {learnings.map((l, i) => (
              <StaggerItem key={i} index={i}>
                <div className="p-6 md:p-8 border-b border-[#E0E0E0] last:border-b-0 flex gap-4 items-start">
                  <span className="font-serif text-2xl flex-shrink-0" style={{ color: "#FF5722", fontWeight: 900 }}>{i + 1}.</span>
                  <div>
                    <h3 className="font-serif text-base mb-2" style={{ color: "#333333", fontWeight: 700 }}>{l.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{l.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <SectionReveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-sans px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,87,34,0.1)", color: "#FF5722" }}>Competências Aplicadas</span>
          </SectionReveal>

          <div className="flex flex-wrap gap-3">
            {caseSkills.map((skill, i) => (
              <StaggerItem key={skill} index={i}>
                <span
                  className="inline-block text-sm font-sans px-4 py-2 transition-all duration-300 hover:bg-[#FF5722] hover:text-white"
                  style={{ color: "#555555", border: "1px solid #E0E0E0", backgroundColor: "#FFFFFF" }}
                >
                  {skill}
                </span>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-12 border-t border-[#E0E0E0]">
        <div className="container">
          <div className="p-6 bg-white border border-[#E0E0E0]">
            <p className="text-xs leading-relaxed mb-2" style={{ color: "#666666" }}>
              <strong style={{ color: "#333333" }}>Informação confidencial:</strong> Este case utiliza exclusivamente informações públicas e resultados agregados. Nomes de ferramentas específicas, métricas financeiras detalhadas e detalhes de implementação foram omitidos por confidencialidade.
            </p>
            <p className="text-xs" style={{ color: "#666666" }}>
              Referência pública:{" "}
              <a href="https://www.mobiletime.com.br/noticias/10/12/2024/globo-laboratorio-de-ia/" target="_blank" rel="noreferrer" style={{ color: "#FF5722", textDecoration: "underline" }}>
                Mobile Time, Dez/2024
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-[#E0E0E0]">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link href="/">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] border transition-all duration-300 hover:border-[#FF5722] hover:text-[#FF5722]"
                  style={{ borderColor: "#E0E0E0", color: "#555555" }}
                >
                  <ArrowLeft size={16} /> Voltar para home
                </span>
              </Link>
              <Link href="/case-portfolio">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] transition-all duration-300 hover:gap-3"
                  style={{ backgroundColor: "#FF5722", color: "#FFFFFF" }}
                >
                  Ver próximo case <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
