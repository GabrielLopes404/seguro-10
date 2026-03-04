"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

const plans = [
  {
    name: "Essencial",
    price: "89",
    description: "Proteção básica para seu veículo",
    popular: false,
    features: [
      "Cobertura contra roubo e furto",
      "Assistência 24 horas",
      "Guincho até 200km",
      "Proteção contra incêndio",
    ],
  },
  {
    name: "Completo",
    price: "149",
    description: "A escolha mais popular entre nossos clientes",
    popular: true,
    features: [
      "Tudo do plano Essencial",
      "Cobertura contra colisão",
      "Carro reserva por 15 dias",
      "Guincho sem limite de km",
      "Proteção de vidros",
      "Danos a terceiros",
    ],
  },
  {
    name: "Premium",
    price: "219",
    description: "Proteção máxima e benefícios exclusivos",
    popular: false,
    features: [
      "Tudo do plano Completo",
      "Carro reserva por 30 dias",
      "Proteção de acessórios",
      "Cobertura para enchentes",
      "Atendimento VIP prioritário",
      "Desconto progressivo anual",
    ],
  },
];

export function PlansSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full mb-4">
            Planos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Escolha Seu{" "}
            <span className="text-primary">Plano Ideal</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Planos flexíveis que se adaptam às suas necessidades. Todos com
            assistência 24h inclusa.
          </p>
        </MotionWrapper>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative flex flex-col p-6 sm:p-8 rounded-3xl border-2 transition-all duration-500 h-full ${
                  plan.popular
                    ? "border-primary bg-card shadow-2xl shadow-primary/20 scale-100 md:scale-105"
                    : "border-border bg-card shadow-sm hover:shadow-lg"
                }`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-bold rounded-full shadow-lg"
                  >
                    <Crown className="w-3.5 h-3.5" />
                    Mais Popular
                  </motion.div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm sm:text-base text-foreground"
                    >
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.popular ? "text-primary" : "text-accent"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => handleScroll("#contato")}
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contratar Agora
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
