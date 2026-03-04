"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { MotionWrapper } from "@/components/motion-wrapper";
import Image from "next/image";

export function CTASection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contato"
      className="relative py-16 sm:py-20 lg:py-28 bg-hero-gradient overflow-hidden"
    >
      {/* Animated backgrounds */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <MotionWrapper direction="scale">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6 sm:mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="Seguro10"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 drop-shadow-2xl"
            />
          </motion.div>
        </MotionWrapper>

        <MotionWrapper direction="up" delay={0.2}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card text-balance">
            Proteja Seu Veículo{" "}
            <span className="text-primary">Agora Mesmo</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-card/70 max-w-2xl mx-auto leading-relaxed">
            Faça sua cotação gratuita em menos de 2 minutos e garanta a
            tranquilidade que você merece no trânsito.
          </p>
        </MotionWrapper>

        <MotionWrapper direction="up" delay={0.4}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma cotação de seguro automotivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-primary/40 hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Fazer Cotação Gratis
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </MotionWrapper>

        <MotionWrapper direction="fade" delay={0.6}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-card/50">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span>Resposta em 24h</span>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
