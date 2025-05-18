import Image from 'next/image'
import { Check } from 'lucide-react'
import { Container } from '@/components/Container'
import gualPhoto from '@/images/lider.png' // coloca aqui a tua imagem local

export default function LeadershipProgramSection() {
  return (
    <section id="gual" aria-label="Programa GUAL" className="primaryBack py-12">
      <Container>
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        {/* Cabeçalho */}
        <div className="mb-10 text-center">
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Programa GUAL
          </h2>
          <p className="text-lg italic text-[#5a4238]">Grow Up As a Leader</p>
        </div>

        {/* Descrição + imagem */}
        <div className="mb-16 grid items-center gap-10 md:grid-cols-2">
          <div className="mx-auto max-w-prose space-y-6">
            <p className="text">
              O GUAL – Grow Up As a Leader é um programa de mentoria individual
              em liderança, desenhado para quem deseja desenvolver-se como líder
              com consciência, estratégia e autenticidade.
              <br />
              <br />
              Baseado em teorias contemporâneas de inteligência emocional,
              psicologia do desempenho e liderança consciente, o programa é
              adaptado ao teu percurso, aos teus desafios e ao teu estilo de
              liderança.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src={gualPhoto}
              alt="Mentora do Programa GUAL"
              className="w-full max-w-xs object-cover"
              priority
            />
          </div>
        </div>

        {/* O que vais trabalhar */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-[#ebbaa2] p-6 text-white shadow-md">
            <h3 className="mb-6 text-2xl">
              O que vais trabalhar neste programa:
            </h3>
            <ul className="text space-y-3">
              {[
                'Autoconhecimento e identidade como líder',
                'Resistência mental e autorregulação emocional',
                'Relações interpessoais, assertividade e empatia',
                'Foco, missão e visão de futuro',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Como funciona */}
          <div className="space-y-6">
            <h3 className="sectionSubTitles mb-6 mt-6 text-2xl">
              Como funciona o programa GUAL?
            </h3>
            <ul className="text list-inside list-disc space-y-2 text-gray-800">
              <li>Sessões online quinzenais (2 horas cada)</li>

              <li>Acompanhamento contínuo e feedback estruturado</li>
              <li>
                Avaliação final do progresso e definição de próximos passos
              </li>
              <li>
                Exercícios personalizados, materiais de apoio e reflexões entre
                sessões
              </li>
            </ul>
          </div>
        </div>

        {/* A quem se destina */}
        <div className="mb-20">
          <h3 className="sectionSubTitles mb-6 text-2xl">
            A quem se destina esta mentoria?
          </h3>
          <ul className="text list-inside list-disc space-y-2 text-gray-800">
            <li>Líderes formais e informais em início de carreira</li>
            <li>Profissionais em cargos de gestão ou coordenação</li>
            <li>
              Pessoas que querem aprofundar a sua liderança pessoal e
              profissional
            </li>
          </ul>
        </div>

        {/* CTA Final */}
        <div className="relative overflow-hidden rounded-2xl bg-[#f3e7e1] px-6 py-12 text-center shadow-xl md:px-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('/textures/soft-pattern.png')] bg-cover bg-center opacity-10"></div>

          <h2 className="sectionSubTitles font-extraboldmd:text-4xl mb-4 text-3xl">
            Investe na tua liderança com consciência.
          </h2>
          <p className="text mb-8 text-lg text-gray-700">
            Marca já a tua sessão de esclarecimento gratuita e descobre como
            este programa se adequa a ti.
          </p>
          <div className="flex justify-center">
            <a
              href="#Contactos"
              className="inline-block w-fit rounded-full border border-[#b45f42] bg-[#fff] px-4 py-2 text-slg font-medium text-[#3B3B3B] transition-colors hover:border-[#b45f42] hover:bg-[#b45f42] hover:text-white"
            >
              Agendar Sessão de Esclarecimento
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
