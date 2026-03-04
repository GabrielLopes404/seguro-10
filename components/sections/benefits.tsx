"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  DollarSign,
  Car,
  Wrench,
  MapPin,
  HeadphonesIcon,
  Zap,
} from "lucide-react";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

const benefits = [
  {
    icon: Shield,
    title: "Cobertura Completa",
    description:
      "Proteção contra roubo, furto, colisão, incêndio e danos naturais.",
  },
  {
    icon: Clock,
    title: "Assistência 24 Horas",
    description:
      "Suporte disponível a qualquer hora, em qualquer lugar do Brasil.",
  },
  {
    icon: DollarSign,
    title: "Melhor Preço",
    description:
      "Garantimos os preços mais competitivos do mercado com cobertura premium.",
  },
  {
    icon: Car,
    title: "Carro Reserva",
    description:
      "Veículo substituto enquanto o seu está em manutenção ou reparo.",
  },
  {
    icon: Wrench,
    title: "Rede Credenciada",
    description:
      "Mais de 5.000 oficinas credenciadas em todo o território nacional.",
  },
  {
    icon: MapPin,
    title: "Guincho Nacional",
    description:
      "Serviço de guincho sem limite de quilometragem em todo o Brasil.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Humanizado",
    description:
      "Equipe dedicada e preparada para atender você com agilidade e respeito.",
  },
  {
    icon: Zap,
    title: "Ativação Imediata",
    description:
      "Seu seguro começa a valer imediatamente após a contratação.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="relative py-16 sm:py-20 lg:py-28 bg-secondary overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary bg-primary/20 rounded-full mb-4">
            Benefícios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground text-balance">
            Por Que Escolher a{" "}
            <span className="text-primary">Seguro10?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Oferecemos a melhor experiência em proteção veicular do Brasil.
          </p>
        </MotionWrapper>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.08}
        >
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                className="relative group p-5 sm:p-6 rounded-2xl bg-card/5 border border-card/10 hover:bg-card/10 transition-all duration-500 h-full"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-secondary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
