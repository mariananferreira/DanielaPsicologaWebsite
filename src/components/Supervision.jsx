import { CheckCircle, Clock, Globe, BookOpen, Users, Leaf } from 'lucide-react'
import { Container } from '@/components/Container'

export default function ClinicalSupervisionSection() {
  return (
    <section id="Supervision" aria-label="Sobre nós" className="primaryBack py-6">
      <Container className="relative">
        {/* Introdução */}
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="sectionSubTitles mb-4 text-3xl font-bold text-[#b45f42]">
              Supervisão Clínica
            </h2>
            <p className="text mb-6 text-lg">
              Apoio especializado a psicólogos/as para fortalecer competências,
              refletir sobre prática clínica e promover o autocuidado
              profissional.
            </p>
          </div>

          {/* Modalidades e formato - agora empilhado */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Clock className="text-[#b45f42]" size={28} />
              <div>
                <p className="text font-semibold">Modalidades:</p>
                <p className="text">
                  Individual (60min)
                  <br />
                  Grupo (90min, 2–4 participantes)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="text-[#b45f42]" size={28} />
              <div>
                <p className="text font-semibold">Presencial ou Online</p>
                <p className="text">Maia – Porto ou digital</p>
              </div>
            </div>
          </div>
        </div>

        {/* Áreas de Foco - agora 2 colunas */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-semibold text-[#b45f42]">
            Áreas de Foco:
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#contacts"
            className="inline-flex items-center justify-center rounded-md bg-[#b45f42] px-8 py-4 text-lg font-semibold text-white shadow-md transition duration-200 hover:bg-[#944936]"
          >
            Agendar Sessão de Supervisão
          </a>
        </div>
      </Container>
    </section>
  )
}
