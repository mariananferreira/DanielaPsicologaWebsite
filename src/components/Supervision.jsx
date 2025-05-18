import Image from 'next/image'
import { CheckCircle, Clock, Globe, BookOpen, Users, Leaf } from 'lucide-react'
import { Container } from '@/components/Container'
import supervisionImage from '@/images/livro1.jpg' // Substitui pelo caminho da tua imagem

export default function ClinicalSupervisionSection() {
  return (
    <section
      id="Supervision"
      aria-label="Sobre nós"
      className="primaryBack py-6"
    >
      <Container className="relative">
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        {/* Introdução com imagem */}
        <div className="mb-16 grid items-start gap-10 md:grid-cols-2">
          {/* Texto */}
          <div>
            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Supervisão Clínica
            </h2>
            <p className="text mb-6 mt-6 text-lg">
              Apoio especializado a psicólogos/as para fortalecer competências,
              refletir sobre prática clínica e promover o autocuidado
              profissional.
            </p>

            {/* Bloco agrupado: Modalidades e Formato */}
            <div className="mt-6 space-y-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="text-[#b45f42]" size={26} />
                <div>
                  <p className="font-semibold text-[#b45f42]">Modalidades</p>
                  <p className="text-sm text-gray-700">
                    Individual (60min)
                    <br />
                    Grupo (90 min, 2–4 participantes)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-[#b45f42]" size={26} />
                <div>
                  <p className="font-semibold text-[#b45f42]">Formato</p>
                  <p className="text-sm text-gray-700">
                    Presencial (Maia – Porto) ou Online
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src={supervisionImage}
              alt="Supervisão Clínica"
              className="w-full max-w-sm rounded-2xl object-cover shadow-md"
              priority
            />
          </div>
        </div>

        {/* Áreas de Foco */}
        <div className="mt-10">
          <h3 className="sectionSubTitles mb-6 text-2xl">
            Áreas de foco:
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: CheckCircle, label: 'Competências clínicas' },
              { icon: BookOpen, label: 'Discussão de casos' },
              { icon: Users, label: 'Reflexão ética' },
              { icon: Leaf, label: 'Autocuidado' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <Icon className="text-[#b45f42]" size={26} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#Contactos"
            className="text-slg inline-block w-fit rounded-full border border-[#b45f42] bg-[#b45f42] px-4 py-2 font-medium text-[#fff] transition-colors hover:border-[#b45f42] hover:bg-[#fff] hover:text-[#000]"
          >
            Agendar Sessão de Supervisão
          </a>
        </div>
      </Container>
    </section>
  )
}
