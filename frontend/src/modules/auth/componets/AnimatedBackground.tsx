export default function AnimatedBackground() {
  return (
    <>
      <div
        className="
          absolute
          left-[-150px]
          top-[-100px]
          h-96
          w-96
          rounded-full
          bg-blue-600/20
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-150px]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-cyan-500/20
          blur-3xl
          animate-pulse
        "
        style={{
          animationDelay: "2s",
          animationDuration: "6s",
        }}
      />

      <div
        className="
          absolute
          left-1/2
          top-1/3
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-3xl
          animate-pulse
        "
        style={{
          animationDelay: "4s",
          animationDuration: "8s",
        }}
      />
    </>
  );
}
