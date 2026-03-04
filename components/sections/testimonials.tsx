"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { MotionWrapper } from "@/components/motion-wrapper";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    text: "Excelente atendimento! Quando precisei acionar o seguro após uma colisão, fui atendido rapidamente e todo o processo foi simples e transparente. Recomendo demais a Seguro10!",
    rating: 5,
    initials: "CS",
  },
  {
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ",
    text: "Melhor seguro que já tive! O preço é justo e a cobertura é muito completa. O guincho chegou em menos de 30 minutos quando meu carro quebrou na estrada.",
    rating: 5,
    initials: "AC",
  },
  {
    name: "Roberto Mendes",
    location: "Belo Horizonte, MG",
    text: "Tinha medo de contratar seguro online, mas a Seguro10 me surpreendeu. Profissionalismo do início ao fim. Meu carro reserva chegou no mesmo dia!",
    rating: 5,
    initials: "RM",
  },
  {
    name: "Mariana Oliveira",
    location: "Curitiba, PR",
    text: "A assistência 24h realmente funciona. Liguei de madrugada e fui atendida prontamente. Sensação incrível de segurança. Seguro10 é nota 10!",
    rating: 5,
    initials: "MO",
  },
  {
    name: "Fernando Santos",
    location: "Brasília, DF",
    text: "Fiz a cotação e em poucos minutos já tinha o melhor preço. A equipe é muito atenciosa e explicou tudo com clareza. Proteção total sem complicação!",
    rating: 5,
    initials: "FS",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="depoimentos"
      className="relative py-16 sm:py-20 lg:py-28 bg-section-gradient overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-40 h-40 sm:w-60 sm:h-60 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
        <Quote className="w-40 h-40 sm:w-60 sm:h-60 text-secondary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            O Que Nossos{" "}
            <span className="text-primary">Clientes Dizem</span>
          </h2>
        </MotionWrapper>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute inset-0"
              >
                <div className="bg-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <span className="text-lg sm:text-xl font-bold text-secondary-foreground">
                        {testimonials[current].initials}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({
                        length: testimonials[current].rating,
                      }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {`"${testimonials[current].text}"`}
                    </p>

                    {/* Name */}
                    <p className="text-base sm:text-lg font-bold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Depoimento ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
