"use client";

import { useEffect, useState } from "react";

// Hook de digitação (mesmo que você já usou)
function useTypingEffect(text: string, speed = 100) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), 1000);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = text.slice(0, index + 1);
          setDisplayed(next);
          setIndex(index + 1);

          if (index + 1 === text.length) {
            setPause(true);
            setDeleting(true);
          }
        } else {
          const next = text.slice(0, index - 1);
          setDisplayed(next);
          setIndex(index - 1);

          if (index - 1 === 0) {
            setPause(true);
            setDeleting(false);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [index, deleting, pause, text, speed]);

  return displayed;
}

export default function About() {
  const typingTitle = useTypingEffect("$ cat about.txt", 80);
  const typingEcho = useTypingEffect('$ echo "sempre aprendendo 🚀"', 60);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono relative overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(#00ff0010_1px,transparent_1px),linear-gradient(90deg,#00ff0010_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ff0020,_transparent_70%)]"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full max-w-xl px-6 py-8 border border-green-400/20 rounded-2xl backdrop-blur-sm bg-black/40 shadow-[0_0_20px_#00ff0020] space-y-4">
        {/* Título digitando */}
        <p className="text-green-500">
          {typingTitle}
          <span className="animate-pulse">|</span>
        </p>

        {/* Conteúdo estilo terminal */}
        <div className="space-y-3 text-sm leading-relaxed">
          <p>{">"} Olá, eu sou o Guilherme 👋</p>

          <p>{">"} Desenvolvedor focado em front-end</p>

          <p>{">"} Atualmente estudando React, Next.js e TypeScript</p>

          <p>{">"} Criando projetos para evoluir e entrar no mercado</p>

          <p>{">"} Apaixonado por UI minimalista e experiências interativas</p>
        </div>

        {/* Linha final */}
        <p className="text-green-600 text-xs">
          {typingEcho}
          <span className="animate-pulse">|</span>
        </p>

        {/* Botão voltar */}
        <a
          href="/"
          className="inline-block mt-4 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_5px_#00ff00] hover:shadow-[0_0_15px_#00ff00]"
        >
          {"<"} voltar
        </a>
      </div>
    </main>
  );
}
