"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, Shield, CheckCircle } from "lucide-react";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

const steps = [
  {
    icon: FileText,
    title: "Solicite sua Cotação",
    description:
      "Preencha nosso formulário rápido com os dados do seu veículo. Leva menos de 2 minutos.",
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    icon: Search,
    title: "Análise Personalizada",
    description:
      "Nossos especialistas analisam seu perfil e encontram a melhor cobertura para você.",
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Shield,
    title: "Escolha seu Plano",
    description:
      "Compare as opções e escolha o plano ideal com o melhor custo-benefício.",
    color: "bg-accent",
    iconColor: "text-accent-foreground",
  },
  {
    icon: CheckCircle,
    title: "Proteção Ativada",
    description:
      "Seu veículo estará protegido imediatamente. Dirija com total tranquilidade.",
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="como-funciona"
      className="relative py-16 sm:py-20 lg:py-28 bg-section-gradient overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            Como Funciona
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Simples, Rápido e{" "}
            <span className="text-primary">Seguro</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Em apenas 4 passos, você garante a proteção completa para seu
            veículo.
          </p>
        </MotionWrapper>

        <div ref={ref} className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary origin-left"
            />
          </div>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            staggerDelay={0.15}
          >
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  className="relative flex flex-col items-center text-center group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Step number */}
                  <motion.div
                    className="absolute -top-3 -right-1 sm:-top-4 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs sm:text-sm font-bold z-10 shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${step.color} flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <step.icon
                      className={`w-7 h-7 sm:w-9 sm:h-9 ${step.iconColor}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
