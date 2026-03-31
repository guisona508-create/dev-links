export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Avatar"
          className="rounded-full mx-auto"
        />

        <h1 className="text-2x1 font-bold">Guilherme Sona</h1>
        <p className="text-gray-400">@g.sonahx</p>

        <div className="flex flex-col gap-e mt-4">
          <a href="#" className="bg-white text-black py-2 rounded">
            GitHub
          </a>

          <a href="#" className="bg-white text-black py-2 rounded">
            LinkedIn
          </a>

          <a href="#" className="bg-white text-black py-2 rounded">
            Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
