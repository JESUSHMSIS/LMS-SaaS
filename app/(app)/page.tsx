import Header from "@/components/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvgviewBox='0 0 256
256'xmlns=http://www.w3.org/2000/svg%3E%3Cfilter
id='noiseFilter's3E%3cfeTurbulence type='fractauNoise'
baseFrequency='0.9'num0ctaves='4'stitchTiles='stitch'/%3E%3C/
filter%3E%3Crect width='100%25'height='100%25'filter=url
(%23noiseFilter)/%3E%3c/svg%3E`,
        }}
      ></div>
      <Header />
    </div>
  );
};

export default HomePage;
