function Background({ className }) {
  return (
    <div className={`h-screen w-full absolute overflow-clip ${className}"`}>
      <div
        className="absolute -z-10"
        style={{
          // background:
          //   "radial-gradient(circle at center top, transparent, black 100%)",
          backgroundColor: "transparent",
          backgroundImage:
            "radial-gradient(closest-side at 50% 30%, transparent, transparent, #000C1A)",
          width: "200vw",
          height: "200vh",
          top: "-50vh",
          left: "-50vw",
        }}
      ></div>
      <div
        className="h-full"
        // className="absolute inset-0 bg-gradient-to-b from-[#000C1A] to-[#000C1A] mix-blend-multiply"
        style={{
          background:
            "radial-gradient(55.69% 53.84% at 50% 7.36%, rgba(0, 77, 153, 0) 0%, #000D1A 100%)",
          // clipPath: "ellipse(78% 40% at 51% 4%)",
        }}
      >
        <img
          src="/Wave.png"
          alt="stars"
          className="w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 -z-20"
        />
        <img
          src="/Hero02.png"
          alt="stars"
          className="w-3/4 h-full object-contain object-top absolute left-1/2 transform -translate-x-1/2 rounded-b-[60%] -z-20"
        />
      </div>
    </div>
  );
}

export default Background;
