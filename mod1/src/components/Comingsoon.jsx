function ComingSoon() {
  return (
    <section className="relative col-span-3 flex min-h-200 items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white px-6 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Something new is coming
        </div>

        <h1 className="text-5xl font-bold tracking-[-0.04em] text-gray-950 sm:text-6xl md:text-7xl">
          We're building
          <br />
          <span className="bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            something better.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-gray-500">
          We're putting the finishing touches on our website.
          <br className="hidden sm:block" />
          Stay tuned — we'll be launching very soon.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-950/10 transition hover:-translate-y-0.5 hover:bg-gray-800">
            Notify me
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
            Learn more
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Launching soon · Stay tuned
        </p>
      </div>
    </section>
  );
}

export default ComingSoon;
