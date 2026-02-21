/*
 * Home Page - Swiss Editorial Revival
 * Playfair Display 900 for hero titles, Lato 300 for body.
 * Accent #FF5722 used only on impact numbers, CTAs, and decorative geometry.
 * Generous whitespace, editorial grid, fade-in scroll animations.
 */
import Layout from "@/components/Layout";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Linkedin,
  ChevronDown,
  Briefcase,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/Q4hh0nJv4MAaZJwGicPvcE/sandbox/KXF13z1u3M8PmHW22qtUyj-img-1_1771685387000_na1fn_aGVyby1nZW9tZXRyaWMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUTRoaDBuSnY0TUFhWkp3R2ljUHZjRS9zYW5kYm94L0tYRjEzejF1M004UG1IVzIycXRVeWotaW1nLTFfMTc3MTY4NTM4NzAwMF9uYTFmbl9hR1Z5YnkxblpXOXRaWFJ5YVdNdFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ru0aOP4C0U1uu70FfRul4EaPVJk3U~HG2PkGLwWaxSZUcEyTtk~tbXx1akbrST8mhOwOR9Z1i7at2v~nEum5N5j6YgEljkCzW4oHHVWdhFsyLIUOegcxGgZTIMDKe4zrMe1vGYf1YRfA5fiEenfYZJ~H6knyj1rBtUfZf31Bk~DOIXHDieYTYTRFm2GJVY8k2-NWefNiok2Jt2K5be-RU8nXKFNx8wr4-UGl~D0XtpbkXlPmRqBoFurEZVjC4ZOh-J30j24Js7AGME84hlBxLhlJ4g9sksk5zcaUNGsL5V2eN16WViUBFwwVsW0BXhvCez2wURObTsfvtsQ5prvyjQ__";

const CASE_IA_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/Q4hh0nJv4MAaZJwGicPvcE/sandbox/KXF13z1u3M8PmHW22qtUyj-img-2_1771685385000_na1fn_Y2FzZS1pYS1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUTRoaDBuSnY0TUFhWkp3R2ljUHZjRS9zYW5kYm94L0tYRjEzejF1M004UG1IVzIycXRVeWotaW1nLTJfMTc3MTY4NTM4NTAwMF9uYTFmbl9ZMkZ6WlMxcFlTMW9aWEp2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I~FFvzWdGPdsde-lJwukD2PVXgqSpn8DtWQllfymTUbVWhCWEjhtIj8dkXk4gJFfvAe6Vt1hMvgSanvpNJlPS2uhZSvNBtoDxZn8wxEbr7GBwz91bh1dN5ozG3XCCI99p0b5my9rcwiw1Ch5z3YYcYldR8EiFDaDjPlpuxyOFavT1e~qVfHZmpg5XMQ1VGSt-yoIXwU1Rn8GAUgNFIj7~bAMUpGzhz4GWHYlcTZT~wizTjE4rcUQ3-27lVuC2BQj1Eib4x9a8TCGz8379cc0x~9RWrJwiB2EPEhSmGbieytbzsALTnUe0S516mBh48JThXAeg7ocD1uTOMPad9QjhQ__";

const CASE_PORTFOLIO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/Q4hh0nJv4MAaZJwGicPvcE/sandbox/KXF13z1u3M8PmHW22qtUyj-img-5_1771685382000_na1fn_Y2FzZS1wb3J0Zm9saW8tcGxhY2Vob2xkZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUTRoaDBuSnY0TUFhWkp3R2ljUHZjRS9zYW5kYm94L0tYRjEzejF1M004UG1IVzIycXRVeWotaW1nLTVfMTc3MTY4NTM4MjAwMF9uYTFmbl9ZMkZ6WlMxd2IzSjBabTlzYVc4dGNHeGhZMlZvYjJ4a1pYSS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ddQOM3YkZOCP1O~2D1Ah63-gVYfQ9OFbqChcNVSjTVGwFIIkDQ~7V-6ey1BPOPTJ03aGtrztfsEjcibxhuwyqd55RXbHo77Ms-McoTWCRUJJ8uvkCmNhOY2ToOsLiazpTyAM4Kv~yfRORUt~sZKNEhDVLPT1yYU7DEYtaH-j5oxtu0nkkE7WqP0hdWIJI~G81-YKJQv0p8gkslz~nb7b5ghx~qlST72UhISEe5HS7rWt5CZ-8kXEEBDsrjVqF~QLCRyJFYYn3VdKStgVdNItUW-5Ab4lfj0u6qVVHt1DU1-MHf~mxEQgih2tmr3hP4xR6gPyihiVEnUDzPwPqsR58w__";

const ABSTRACT_1 = "https://private-us-east-1.manuscdn.com/sessionFile/Q4hh0nJv4MAaZJwGicPvcE/sandbox/KXF13z1u3M8PmHW22qtUyj-img-3_1771685367000_na1fn_YWJzdHJhY3QtcGF0dGVybi0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUTRoaDBuSnY0TUFhWkp3R2ljUHZjRS9zYW5kYm94L0tYRjEzejF1M004UG1IVzIycXRVeWotaW1nLTNfMTc3MTY4NTM2NzAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRjR0YwZEdWeWJpMHgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uMOe63-uKhhH87WYCi71ExnhvfbDadWNsQywB1vjjEOYRz8a6oAENRx30hmcRbI1yCTpnQ~Y7ZvcKZOqngNBOBNtvi4uSMV~iHpYv4VAMaoEZTvbIe~oQ8oqZzCwsmf1pU8glkyDJkPUU5-hAMVEGwLQUvy2QQFzzVO2hpBT6IRTO3vlZAkrJ6QiwOl8LnTjaWWkEX~Obnz3Lz7sw3LNl4waGi~SXUajLG2kXPiXFGnLMu69SO3CiJ3feg3doq2sDK3MN7EZhss65Vco1fi62Ziky0b7wW1TMVj66U5MTm04k2kQMHCS1w0MzIC12SZU1V-2mNuGkPh3qaOh6nplOA__";

/* ─── Impact data ─── */
const impactItems = [
  {
    icon: Target,
    metric: "35%",
    text: "Aumento na precisão de priorização com portfólio executivo alinhado a OKRs",
  },
  {
    icon: TrendingUp,
    metric: "~60%",
    text: "Elevação de produtividade com produto estratégico 100% baseado em IA",
  },
  {
    icon: BarChart3,
    metric: "22%",
    text: "Redução no tempo de decisão de investimento com métricas executivas",
  },
  {
    icon: Briefcase,
    metric: "50%",
    text: "Aumento na previsibilidade de entregas com Quarter Plannings e OKR Syncs",
  },
];

/* ─── Experience data ─── */
const experiences = [
  {
    role: "Enterprise Agile Coach",
    company: "Globo",
    period: "Mai 2024 - Presente",
    highlights: [
      "Liderei gestão estratégica de portfólio que aumentou aderência aos OKRs em 35%",
      "Viabilizei decisão de investimento em projeto de IA com redução de custos operacionais projetada em ~60%",
      "Estruturei portfólio executivo usando Jira e Confluence para governança trimestral",
      "Consolidei KPIs de produto e portfólio em dashboards no Power BI",
    ],
  },
  {
    role: "Agile Coach",
    company: "Globo",
    period: "Abr 2023 - Mai 2024",
    highlights: [
      "Estabeleci implementação de práticas ágeis que aumentou clareza de objetivos em ~40%",
      "Reduzi retrabalho em ~30% após readequação de rituais e Quarter Planning",
      "Aumentei velocidade de entrega dos times em 20% através de práticas de priorização",
      "Promovi visibilidade de valor que elevou satisfação dos stakeholders em 31%",
    ],
  },
  {
    role: "Agile Team Coach",
    company: "Globo",
    period: "Abr 2021 - Abr 2023",
    highlights: [
      "Coordenei implementação de práticas ágeis que aumentou previsibilidade de entrega em 30%",
      "Reduzi lead time das sprints em 21% com readequação de cerimônias e fluxos",
      "Alinhei OKRs de time que aumentaram entrega de valor em 25%",
    ],
  },
  {
    role: "UX Writer",
    company: "Stormgroup (terceirizado)",
    period: "Mai 2020 - Abr 2021",
    highlights: [
      "Conduzi discovery que identificou problemas estruturais de usabilidade",
      "Facilitei 10+ dinâmicas de discovery com entrevistas e pesquisas",
      "Reduzi inconsistências entre soluções em 40% com disseminação de práticas de escrita",
    ],
  },
  {
    role: "UX Writer",
    company: "everis",
    period: "Ago 2019 - Mai 2020",
    highlights: [
      "Concebi fluxos conversacionais que reduziram taxa de abandono em 27%",
      "Aumentei satisfação dos usuários em 18% nas URAs e chatbots",
      "Identifiquei pontos de fricção que geraram redução de 22% nas chamadas de suporte",
    ],
  },
  {
    role: "UX Writer",
    company: "Stone",
    period: "Jul 2018 - Ago 2019",
    highlights: [
      "Conduzi 20+ pesquisas qualitativas e quantitativas em produtos B2B2C",
      "Trabalhei diretamente com 3 POs e designers na definição de hipóteses",
      "Aumentei coerência entre experiência e objetivos de negócio em 45%",
    ],
  },
];

/* ─── Skills ─── */
const skills = [
  "Product Discovery", "IA Aplicada", "Gestão de Stakeholders", "Métricas e KPIs",
  "B2B/SaaS", "Enterprise", "User Research", "Priorização", "Roadmapping",
  "Agile/Scrum", "OKRs", "Portfolio Management", "SQL", "Power BI",
  "JIRA", "Confluence", "Miro",
];

/* ─── Counter component ─── */
function MetricCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
  const prefix = value.startsWith("~") ? "~" : "";
  const count = useCountUp(numericPart, 1500, true, isVisible);

  return (
    <span ref={ref} className="font-serif" style={{ color: "#FF5722", fontWeight: 900 }}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background geometric pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-[0.06]"
        style={{ backgroundColor: "#FF5722" }}
      />
      <div
        className="absolute bottom-32 left-[5%] w-40 h-40 opacity-[0.04]"
        style={{
          backgroundColor: "#FF5722",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.2em] font-sans font-normal mb-6"
            style={{ color: "#FF5722" }}
          >
            AI Product Owner
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif leading-[0.95] mb-6"
            style={{
              color: "#333333",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Verônica
            <br />
            Antunes<span style={{ color: "#FF5722" }}>.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-serif italic text-xl md:text-2xl mb-4"
            style={{ color: "#555555", fontWeight: 400 }}
          >
            Conecto estratégia e execução para acelerar valor de produto
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl"
            style={{ color: "#666666" }}
          >
            +10 anos construindo resultados em gestão de produto e portfólio &bull; +5 fluxos de valor &bull; +100 OKRs desdobrados &bull; +3 produtos de IA
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#cases"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-normal uppercase tracking-[0.1em] transition-all duration-300 hover:gap-3"
              style={{
                backgroundColor: "#FF5722",
                color: "#FFFFFF",
                letterSpacing: "0.1em",
              }}
            >
              Ver Cases
              <ArrowRight size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/veronicantunes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-normal uppercase tracking-[0.1em] border transition-all duration-300 hover:border-[#FF5722] hover:text-[#FF5722]"
              style={{
                borderColor: "#E0E0E0",
                color: "#555555",
              }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2"
        >
          <div
            className="w-56 h-56 xl:w-72 xl:h-72 rounded-full relative overflow-hidden"
            style={{ border: "2px solid #E0E0E0" }}
          >
            <img
              src="https://res.cloudinary.com/dnbgmiii1/image/upload/v1771687632/1770914698984_y1pqib.jpg"
              alt="Verônica Antunes"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} style={{ color: "#CCCCCC" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  return (
    <section className="py-20 md:py-32 border-t border-[#E0E0E0]">
      <div className="container">
        <SectionReveal>
          <p
            className="text-xs uppercase tracking-[0.2em] font-sans font-normal mb-3"
            style={{ color: "#FF5722" }}
          >
            Sobre
          </p>
          <h2
            className="font-serif mb-12 md:mb-16"
            style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Estratégia, Discovery
            <br />
            e Execução<span style={{ color: "#FF5722" }}>.</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Text column */}
          <div className="lg:col-span-3">
            <SectionReveal delay={0.1}>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#555555" }}>
                Meu trabalho segue uma lógica clara:{" "}
                <strong style={{ color: "#333333", fontWeight: 700 }}>
                  Estratégia &rarr; Discovery &rarr; Execução orientada a métricas.
                </strong>
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "#666666" }}>
                Atuo onde estratégia de produto, dados e agilidade se cruzam para gerar roadmaps que entregam valor mensurável.
              </p>
            </SectionReveal>

            {/* Impact cards */}
            <div className="space-y-6">
              {impactItems.map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex gap-4 items-start p-5 border-l-2 transition-all duration-300 hover:bg-[#FAFAFA]" style={{ borderColor: "#FF5722" }}>
                    <item.icon size={20} style={{ color: "#FF5722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <span className="font-serif text-2xl md:text-3xl block mb-1" style={{ color: "#FF5722", fontWeight: 900 }}>
                        {item.metric}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <SectionReveal delay={0.3}>
              <div className="p-6 md:p-8" style={{ backgroundColor: "#F0F0F0" }}>
                <p
                  className="text-xs uppercase tracking-[0.15em] font-sans font-normal mb-5"
                  style={{ color: "#999999" }}
                >
                  Como entrego na prática
                </p>
                <ul className="space-y-3">
                  {[
                    "Gestão de portfólio, product discovery, definição de OKRs e priorização baseada em ROI",
                    "JIRA, Confluence, Miro, SQL, Power BI e ferramentas de ML para prototipagem e análise",
                    "Atuação consistente em estratégia de produto, alinhamento entre negócio e tecnologia e coordenação de value streams",
                  ].map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed pl-4 border-l" style={{ color: "#666666", borderColor: "#E0E0E0" }}>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#E0E0E0]">
                  <p className="text-xs uppercase tracking-[0.15em] font-sans font-normal mb-3" style={{ color: "#999999" }}>
                    Idiomas
                  </p>
                  <p className="text-sm" style={{ color: "#555555" }}>
                    Português (nativo) &bull; Inglês (avançado)
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E0E0E0]">
                  <p className="text-xs uppercase tracking-[0.15em] font-sans font-normal mb-3" style={{ color: "#999999" }}>
                    Palavras que me definem
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Precisão", "Pragmatismo", "Empatia", "Iniciativa"].map((word) => (
                      <span
                        key={word}
                        className="text-xs px-3 py-1 font-sans"
                        style={{ color: "#FF5722", border: "1px solid #FF5722", backgroundColor: "rgba(255, 87, 34, 0.05)" }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container">
        <SectionReveal>
          <p
            className="text-xs uppercase tracking-[0.2em] font-sans font-normal mb-3"
            style={{ color: "#FF5722" }}
          >
            Experiência
          </p>
          <h2
            className="font-serif mb-12 md:mb-16"
            style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Trajetória<span style={{ color: "#FF5722" }}>.</span>
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden md:block absolute left-[180px] lg:left-[220px] top-0 bottom-0 w-px"
            style={{ backgroundColor: "#E0E0E0" }}
          />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <StaggerItem key={i} index={i}>
                <div className="group grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-4 md:gap-8 py-8 border-b border-[#E0E0E0] last:border-b-0 transition-colors duration-300 hover:bg-white/60">
                  {/* Period */}
                  <div className="md:text-right md:pr-8 relative">
                    <p className="text-xs font-sans" style={{ color: "#999999" }}>
                      {exp.period}
                    </p>
                    {/* Timeline dot */}
                    <div
                      className="hidden md:block absolute right-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 group-hover:bg-[#FF5722] group-hover:border-[#FF5722]"
                      style={{ backgroundColor: "#FFFFFF", borderColor: "#E0E0E0" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:pl-8">
                    <h3 className="font-serif text-lg md:text-xl mb-1" style={{ color: "#333333", fontWeight: 700 }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#FF5722" }}>
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-sm leading-relaxed pl-4 relative" style={{ color: "#666666" }}>
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full" style={{ backgroundColor: "#E0E0E0" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CASES ─── */
function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-32 border-t border-[#E0E0E0]">
      <div className="container">
        <SectionReveal>
          <p
            className="text-xs uppercase tracking-[0.2em] font-sans font-normal mb-3"
            style={{ color: "#FF5722" }}
          >
            Cases
          </p>
          <h2
            className="font-serif mb-12 md:mb-16"
            style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Resultados em
            <br />
            Destaque<span style={{ color: "#FF5722" }}>.</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Case 1: IA - Active */}
          <StaggerItem index={0}>
            <Link href="/case-ia">
              <div className="group cursor-pointer h-full flex flex-col border border-[#E0E0E0] transition-all duration-500 hover:shadow-lg hover:border-[#FF5722]/30">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={CASE_IA_IMG}
                    alt="Case Laboratório de IA na Globo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.1em] font-sans px-2.5 py-1"
                      style={{ backgroundColor: "rgba(255,87,34,0.9)", color: "#FFFFFF" }}
                    >
                      IA Aplicada | Pesquisa
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg md:text-xl mb-3" style={{ color: "#333333", fontWeight: 700 }}>
                    Avaliação de Impacto de IA em Produção de Conteúdo
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#666666" }}>
                    Como medir viabilidade e adoção de IA generativa em produção audiovisual enterprise
                  </p>
                  <div className="flex gap-4 mb-5">
                    {[
                      { num: "10+", label: "ferramentas" },
                      { num: "15", label: "profissionais" },
                      { num: "1", label: "framework" },
                    ].map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="font-serif text-xl block" style={{ color: "#FF5722", fontWeight: 900 }}>
                          {m.num}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "#999999" }}>
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span
                    className="text-xs uppercase tracking-[0.1em] font-sans inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
                    style={{ color: "#FF5722" }}
                  >
                    Ver case completo <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>

          {/* Case 2: Portfolio - Placeholder */}
          <StaggerItem index={1}>
            <Link href="/case-portfolio">
              <div className="group cursor-pointer h-full flex flex-col border border-[#E0E0E0] opacity-70 transition-all duration-500 hover:opacity-90">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={CASE_PORTFOLIO_IMG}
                    alt="Case Portfolio de Produtos"
                    className="w-full h-full object-cover grayscale-[30%]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.1em] font-sans px-2.5 py-1"
                      style={{ backgroundColor: "#E0E0E0", color: "#666666" }}
                    >
                      Gestão | Estratégia
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                    <span
                      className="text-xs uppercase tracking-[0.15em] font-sans px-4 py-2"
                      style={{ backgroundColor: "#FFFFFF", color: "#999999", border: "1px solid #E0E0E0" }}
                    >
                      Em breve
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg mb-2" style={{ color: "#555555", fontWeight: 700 }}>
                    Estruturação de Portfolio de Produtos Digitais
                  </h3>
                  <p className="text-sm" style={{ color: "#999999" }}>
                    Em breve
                  </p>
                </div>
              </div>
            </Link>
          </StaggerItem>

          {/* Case 3: OKRs - Placeholder */}
          <StaggerItem index={2}>
            <Link href="/case-okrs">
              <div className="group cursor-pointer h-full flex flex-col border border-[#E0E0E0] opacity-70 transition-all duration-500 hover:opacity-90">
                <div className="relative overflow-hidden aspect-[16/10]" style={{ backgroundColor: "#F0F0F0" }}>
                  <img
                    src={ABSTRACT_1}
                    alt="Case OKRs"
                    className="w-full h-full object-cover grayscale-[30%]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.1em] font-sans px-2.5 py-1"
                      style={{ backgroundColor: "#E0E0E0", color: "#666666" }}
                    >
                      Agilidade | Transformação
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                    <span
                      className="text-xs uppercase tracking-[0.15em] font-sans px-4 py-2"
                      style={{ backgroundColor: "#FFFFFF", color: "#999999", border: "1px solid #E0E0E0" }}
                    >
                      Em breve
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg mb-2" style={{ color: "#555555", fontWeight: 700 }}>
                    OKRs em Ambiente de Alta Complexidade
                  </h3>
                  <p className="text-sm" style={{ color: "#999999" }}>
                    Em breve
                  </p>
                </div>
              </div>
            </Link>
          </StaggerItem>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─── */
function SkillsSection() {
  return (
    <section className="py-20 md:py-32 border-t border-[#E0E0E0]" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container">
        <SectionReveal>
          <p
            className="text-xs uppercase tracking-[0.2em] font-sans font-normal mb-3"
            style={{ color: "#FF5722" }}
          >
            Competências
          </p>
          <h2
            className="font-serif mb-12 md:mb-16"
            style={{ color: "#333333", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Toolkit<span style={{ color: "#FF5722" }}>.</span>
          </h2>
        </SectionReveal>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <StaggerItem key={skill} index={i}>
              <span
                className="inline-block text-sm font-sans px-4 py-2 transition-all duration-300 hover:bg-[#FF5722] hover:text-white hover:border-[#FF5722]"
                style={{
                  color: "#555555",
                  border: "1px solid #E0E0E0",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {skill}
              </span>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CasesSection />
      <SkillsSection />
    </Layout>
  );
}
