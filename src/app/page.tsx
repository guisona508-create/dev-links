export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-full max-w-sm text-center space-y-6">
        {/* Avatar */}
        <img
          src="/images/dog1.jpg"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto border-2 border-white"
        />
        {/* Nome */}
        <h1 className="text-2x1 font-bold">Guilherme Sona</h1>
        <p className="text-gray-400">@g.sonahx</p>
        {/* Links */}
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="bg-white text-black py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="bg-white text-black py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="bg-white text-black py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
