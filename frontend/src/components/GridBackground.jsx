function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Soft gradient glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600 opacity-20 blur-[200px] rounded-full animate-pulse" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[180px] rounded-full animate-pulse" />

    </div>
  );
}

export default GridBackground;