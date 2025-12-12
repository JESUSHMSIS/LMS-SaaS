import Header from "@/components/Header";
import {
  BookOpen,
  LayoutDashboard,
  Rocket,
  Sparkles,
  Crown,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Star,
  Code2,
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
        <section id="courses" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl  font-bold mb-4">
              Cursos realizados para{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Subir de nivel
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Cada curso es escogido con lecciones y modulos que estan diseñados
              para que vayas de principiante a estar listo para un trabajo
            </p>
          </div>
          <div className="grid md:grid-cols3 gap-6"></div>
          <div className="text-center mt-10">
            <Link href="/dashboard">
              <Button
                className="border-zinc-700  bg-white/5 hover:bg-white/10 hover:text-white"
                variant="outline"
              >
                Ver todos los cursos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        <section
          className="px-6 lg:px-12 py-20 max-w-7xl mx-auto"
          id="testimonials"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A los estudiantes{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                les encanta esto
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Pedro Perez",
                role: "Junior Dev",
                content:
                  "En la academia se aprender mucho, mas con los recursos que comparte la plataforma",
                avatar: "😀",
              },
              {
                name: "Maria Lopex",
                role: "Freelancer",
                content:
                  "Pude aprender todo lo necesario para ser un desarrollador profesional",
                avatar: "👩‍🦰",
              },
              {
                name: "Sara Martinez",
                role: "CS Estudiante",
                content:
                  "Estoy feliz con el resultado, aprendi todo lo necesario para ser un desarrollador profesional",
                avatar: "👩‍🦰",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex-items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-r from-violet-600/20 via-fuchsia-600/10 to-cyan-600/20 border border-white/10 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-xl"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl  bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Estas listo para llevar tus habilidades a otro nivel?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Iniciar con los cursos gratis o desbloquea todos los cursos con el
              plan Pro o Ultra
            </p>
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-10 h-14 text-lg font-semibold"
              >
                Ver Precios
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        <footer className="px-6 lg:px-12 border-t border-zinc-800/50 max-w-7xl mx-auto py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">Jesus Studio</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-zinc-500">
              <Link href="#" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terminos
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Soporte
              </Link>
            </div>
            <p className="text-sm text-zinc-600">JH STUDIO</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
