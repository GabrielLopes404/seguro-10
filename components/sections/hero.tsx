"use client";

import { motion } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
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
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 sm:mb-8"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Proteção Veicular Completa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance"
            >
              <span className="text-card">Proteção Total </span>
              <br className="hidden sm:block" />
              <span className="text-card">para Seu </span>
              <span className="text-primary">Carro.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-card/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Tranquilidade em cada quilômetro. Cobertura completa, assistência
              24 horas e os melhores preços do mercado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => handleScroll("#contato")}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-primary/30 hover:brightness-110 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Fazer Cotacao Gratis
              </motion.button>
              <motion.button
                onClick={() => handleScroll("#como-funciona")}
                className="px-8 py-4 border-2 border-card/30 text-card font-semibold text-base sm:text-lg rounded-xl hover:bg-card/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {[
                { value: "50mil+", label: "Clientes Protegidos" },
                { value: "24h", label: "Assistência" },
                { value: "98%", label: "Satisfação" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                  className="text-center"
                >
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-card/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Logo / Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-150" />
              <Image
                src="/images/logo.png"
                alt="Seguro10 Logo"
                width={350}
                height={350}
                className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#como-funciona")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-card/40 text-xs uppercase tracking-widest">
            Role para baixo
          </span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.button>
    </section>
  );
}
