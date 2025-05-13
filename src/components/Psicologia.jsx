import {
  CheckCircle,
  Laptop,
  MapPin,
  Brain,
  Users,
  Puzzle,
  BookOpen,
} from 'lucide-react'

import { Container } from '@/components/Container'
import Image from 'next/image'
import heroImage from '@/images/psi1.jpg'

export default function PsychologySection() {
  return (
    <section
      id="Psicologia"
      aria-label="Sobre nós"
      className="primaryBack py-6"
    >
      <Container className="relative">
        <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto  xl:max-w-none">
          <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
          <div className="mb-16 text-center">
            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Este é um lugar seguro
            </h2>
            <p className="text mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Consultas de Psicologia Clínica no Distrito do Porto e Online
            </p>
          </div>

          {/* Sobre Mim */}
          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="sectionSubTitles text-xl font-semibold">
                Psicóloga Clínica (cédula OPP nº 22983)
              </h2>
              <p className="text mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Sou Especialista em Psicologia Clínica e da Saúde, e acompanho
                adolescentes e adultos em consultas presenciais na Maia (Porto)
                ou online.
                <br />
                <br />
                Ofereço um espaço seguro, inclusivo e respeitador de todas as
                identidades — onde as emoções são acolhidas e os contextos
                sociais não são esquecidos.
                <br />
                <br />A psicologia não existe apenas para quando “algo está
                errado”. É um lugar de escuta e transformação, onde podes
                aprender a cuidar de ti, compreender-te com mais clareza e
                reencontrar sentido.
              </p>
            </div>

            <Image
              src={heroImage}
              alt="Hero image background"
              className="mx-auto w-full max-w-md rounded-2xl shadow-md"
              priority
            />
          </div>

          {/* Abordagem */}
          <div className="mb-16 text-center">
            <h2 className="sectionSubTitles mb-6 text-2xl font-semibold">
              A minha abordagem
            </h2>

            <div className="grid gap-6 md:grid-cols-4">
              {/* Construtivista */}
              <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md">
                <Puzzle size={36} className="mb-4 text-[#ebbaa2]" />
                <p className="font-semibold">Construtivista</p>
              </div>

              {/* Narrativa */}
              <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md">
                <BookOpen size={36} className="mb-4 text-[#ebbaa2]" />
                <p className="font-semibold">Narrativa</p>
              </div>

              {/* Cognitivo-Comportamental */}
              <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md">
                <Brain size={36} className="mb-4 text-[#ebbaa2]" />
                <p className="font-semibold">Cognitivo-Comportamental</p>
              </div>

              {/* Sistémica */}
              <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md">
                <Users size={36} className="mb-4 text-[#ebbaa2]" />
                <p className="font-semibold">Sistémica</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Conjugo a evidência científica com a relação terapêutica para uma
              intervenção personalizada.
            </p>
          </div>

          {/* Áreas de Intervenção */}
          <div className="mb-16">
            <h2 className=" sectionSubTitles mb-6 text-center text-2xl font-semibold">
              Áreas de intervenção
            </h2>
            <div className="text grid gap-4 md:grid-cols-2">
              {[
                'Desenvolvimento pessoal',
                'Luto e perdas significativas',
                'Depressão, sintomas depressivos e ideação suicida',
                'Stress, burnout e esgotamento profissional',
                'Neurodivergência na adolescência e adultez (PHDA, Autismo)',
                'Conflitos familiares e relacionamentos interpessoais',
                'Autoestima, autoconhecimento e desenvolvimento pessoal',
                'Acompanhamento psicológico afirmativo para pessoas LGBTQIA+',
                'Identidade e transições de vida (divórcio, casamento, maternidade, parentalidade)',
                'Perturbações de ansiedade (fobias, pânico, ansiedade generalizada, agorafobia, POC)',
                'Perturbações da personalidade (bipolar, borderline, histriónica, paranoide, esquizoide, esquizotípica)',
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-left">
                  <CheckCircle
                    size={18}
                    className="mt-1 shrink-0 text-green-600"
                  />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Localização e Modalidade */}
          <div className="mb-16 grid gap-6 text-center md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <MapPin size={32} className="mx-auto mb-2" />
              <h3 className="text mb-1 text-lg font-semibold">
                Consultas presenciais na Maia
              </h3>
              <p className="text-sm text-gray-600">(Clínica Felicity)</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <Laptop size={32} className="mx-auto mb-2" />
              <h3 className="text mb-1 text-lg font-semibold">
                Consultas Online
              </h3>
              <p className="text-sm text-gray-600">
                Ambiente seguro e flexível
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="relative overflow-hidden rounded-2xl bg-[#f3e7e1] px-6 py-12 text-center shadow-xl md:px-20">
            <div className="pointer-events-none absolute inset-0 bg-[url('/textures/soft-pattern.png')] bg-cover bg-center opacity-10"></div>

            <h2 className="sectionSubTitles font-extraboldmd:text-4xl mb-4 text-3xl">
              Cuida de ti com intenção. Começa pela tua saúde mental.
            </h2>
            <p className="text mb-8 text-lg text-gray-700">
              Agenda a tua consulta e dá o primeiro passo para um espaço seguro,
              de acolhimento e transformação.
            </p>
            <div className="flex justify-center">
              <a
                href="#Contactos"
                className="inline-flex items-center justify-center rounded-md bg-[#ebbaa2] px-8 py-4 text-lg font-semibold text-white shadow-md transition duration-200 hover:bg-[#d29e8b]"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
