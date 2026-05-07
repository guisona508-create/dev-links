"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function Home() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/guisona508-create",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guilherme-sona-2a6b27206/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/g.sonahx/",
    },
    { name: "Whatsapp", url: "https://wa.me/5511978530088" },
    { name: "Email", url: "mailto:guisona742121@gmail.com" },
    { name: "Sobre Mim", url: "/about", target: "_self" },
  ];

  const typingCat = useTypingEffect("$ cat links.txt", 80);
  const typingFooter = useTypingEffect('$ echo "feito com café ☕"', 60);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono relative overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(#00ff0010_1px,transparent_1px),linear-gradient(90deg,#00ff0010_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ff0020,_transparent_70%)]"></div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-sm px-6 py-8 border border-green-400/20 rounded-2xl backdrop-blur-sm bg-black/40 shadow-[0_0_20px_#00ff0020]">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/dog1.jpg"
            alt="avatar"
            width={90}
            height={90}
            className="rounded-full border border-green-400 shadow-[0_0_10px_#00ff00]"
          />

          <h1 className="mt-4 text-lg text-green-300">guilherme@sona:~$</h1>

          <p className="text-sm text-green-500">Developer 🚀</p>
        </div>

        {/* Linha digitando */}
        <p className="mb-4 text-green-500">
          {typingCat}
          <span className="animate-pulse">|</span>
        </p>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="border border-green-400/40 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_5px_#00ff00] hover:shadow-[0_0_15px_#00ff00]"
              target={link.target || "_blank"}
            >
              {">"} {link.name}
            </a>
          ))}
          <div className="mt-6">
            <a
              href="/curriculo_Guilherme_Sona.pdf"
              download
              className="block text-center border border-green-400 px-4 py-2 rounded-lg -lg bg-green-400 text-black hover:bg-transparent hover:text-green-400 transition-all duration-300 shadow-[0_0_10px_#00ff00]"
            >
              ↓ Baixar Currículo
            </a>
          </div>
        </div>

        {/* Rodapé */}
        <p className="mt-6 text-xs text-green-600">
          {typingFooter}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </main>
  );
}
