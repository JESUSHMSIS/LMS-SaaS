import Header from "@/components/Header";
import {
  BookOpen,
  LayoutDashboard,
  Rocket,
  Sparkles,
  Crown,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = async () => {
  const user = await currentUser();
  const isSignedIn = !!user;
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
      <main className="relative z-10">
        <section className="px-6 lg:px-12 pt-16 pb-24 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">
                Aprende a programar con proyectos reales
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-white">Maestro del codigo</span>
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                De la forma moderna
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              En Jesús Studio, te ayudamos a aprender a programar con proyectos
              reales. Nuestros cursos de programación son diseñados para
              <span className="text-fuchsia-400"> Desarrolladores</span>
              <span className="text-cyan-400"> Profesionales</span>
            </p>
            <div
              className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-600/30 px-8 h-12 text-base font-semibold"
                    >
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Ir al Dashboard
                    </Button>
                  </Link>
                  <Link href="/dashboard/courses">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-zinc-700 bg-white/5 text-white px-8 h-12 text-base hover:bg-white/10 hover:text-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Mis cursos
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/pricing">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-600/30 px-8 h-12 text-base font-semibold"
                    >
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Comienza a aprender gratis
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-zinc-700 bg-white/5 text-white px-8 h-12 text-base hover:bg-white/10 hover:text-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Encuentra un curso
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Free",
                icon: Rocket,
                color: "emerald",
                gradient: "from-emerald-500 to-teal-600",
                borderColor: "border-emerald-500/20",
                bgGlow: "bg-emerald-500/10",
                description:
                  "Inicia en la programacion con los cursos fundamentales",
                features: [
                  "Conceptos fundamentales",
                  "Acceso a la comunidad",
                  "Proyectos basicos",
                ],
              },
              {
                tier: "Pro",
                icon: Crown,
                color: "violet",
                gradient: "from-violet-500 to-fuchsia-600",
                borderColor: "border-violet-500/30",
                bgGlow: "bg-violet-500/10",
                description:
                  "Avanza hacia la programacion avanzada con los cursos avanzados",
                features: [
                  "Todo lo de Free",
                  "Conceptos avanzados",
                  "Acceso a la comunidad",
                  "Proyectos avanzados",
                  "Certificados",
                ],
                popular: true,
              },
              {
                tier: "Ultra",
                icon: Trophy,
                color: "cyan",
                gradient: "from-cyan-400 to-blue-600",
                borderColor: "border-cyan-400/20",
                bgGlow: "bg-cyan-400/10",
                description:
                  "Avanza hacia la programacion profesional con los cursos profesionales",
                features: [
                  "Todo lo de Pro",
                  "Asistente con IA",
                  "Contenido exclusivo",
                  "Proyectos profesionales",
                  "1 a 1 Mentoria",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`relative p-8 rounded-2xl ${plan.bgGlow} border ${plan.borderColor} ${plan.popular ? "ring-2 ring-violet-500/50" : ""} transition-all duration-300 hover:scale-[1.02]`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold">
                    Mas popular
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 ${plan.color === "emerald" ? "text-emerald-400" : plan.color === "violet" ? "text-violet-400" : "text-cyan-400"} `}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
