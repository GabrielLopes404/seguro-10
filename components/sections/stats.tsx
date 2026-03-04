"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Users, Car, Star, Headphones } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Clientes Satisfeitos",
    color: "text-primary",
  },
  {
    icon: Car,
    value: 75000,
    suffix: "+",
    label: "Veículos Protegidos",
    color: "text-accent",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "Taxa de Satisfação",
    color: "text-primary",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "h",
    label: "Atendimento Diário",
    color: "text-accent",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <MotionWrapper key={stat.label} delay={index * 0.15} direction="up">
              <motion.div
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-500"
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-muted flex items-center justify-center mb-3 sm:mb-4">
                  <stat.icon
                    className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.color}`}
                  />
                </div>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color}`}
                />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
