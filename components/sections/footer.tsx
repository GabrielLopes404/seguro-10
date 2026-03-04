"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";

const footerLinks = {
  empresa: [
    { label: "Sobre Nós", href: "#inicio" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Depoimentos", href: "#depoimentos" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#contato" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Contato", href: "#contato" },
  ],
};

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <MotionWrapper direction="up" className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Seguro10"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10"
              />
              <span className="text-xl font-bold text-card">
                Seguro<span className="text-primary">10</span>
              </span>
            </div>
            <p className="text-sm text-card/50 max-w-xs leading-relaxed">
              Proteção completa para seu veículo com os melhores preços do
              mercado. Sua segurança é nossa prioridade.
            </p>
          </MotionWrapper>

          {/* Links */}
          <MotionWrapper direction="up" delay={0.1}>
            <h4 className="text-sm font-bold text-card uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.empresa.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-card/50 hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.2}>
            <h4 className="text-sm font-bold text-card uppercase tracking-wider mb-4">
              Suporte
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.suporte.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-card/50 hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </MotionWrapper>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-card/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-card/40 text-center sm:text-left">
              2025 Seguro10. Todos os direitos reservados.
            </p>
            <p className="text-xs text-card/30">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
