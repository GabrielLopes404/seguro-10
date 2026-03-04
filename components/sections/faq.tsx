"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const faqs = [
  {
    question: "Como funciona a cotação online?",
    answer:
      "Basta preencher nosso formulário com os dados do seu veículo e informações pessoais. Em poucos minutos, nossa equipe analisa seu perfil e envia as melhores opções de cobertura diretamente para você.",
  },
  {
    question: "O seguro cobre quais tipos de sinistros?",
    answer:
      "Dependendo do plano escolhido, cobrimos roubo, furto, colisão, incêndio, danos naturais (enchentes, granizo), danos a terceiros, vidros, acessórios e muito mais.",
  },
  {
    question: "Quanto tempo leva para ativar o seguro?",
    answer:
      "Após a contratação e pagamento, seu seguro é ativado imediatamente. Você recebe a apólice digital por e-mail em até 24 horas.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Não temos fidelidade. Você pode cancelar quando quiser, sem multas ou taxas adicionais. Nós reembolsamos o valor proporcional.",
  },
  {
    question: "A assistência 24h funciona em todo o Brasil?",
    answer:
      "Sim! Nossa rede de assistência cobre todo o território nacional, incluindo guincho, socorro mecânico, chaveiro e outros serviços emergenciais.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "O plano Essencial oferece cobertura básica ideal para quem quer proteção fundamental. O Completo adiciona cobertura contra colisão e carro reserva. O Premium inclui todos os benefícios, com atendimento VIP e cobertura máxima.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-section-gradient overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Perguntas{" "}
            <span className="text-primary">Frequentes</span>
          </h2>
        </MotionWrapper>

        <StaggerContainer className="flex flex-col gap-3 sm:gap-4" staggerDelay={0.08}>
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.question}>
              <motion.div
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full p-4 sm:p-5 text-left gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm sm:text-base font-semibold text-foreground pr-2">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
