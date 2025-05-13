import {
  Briefcase,
  Building2,
  MessageCircle,
  Users,
  Heart,
  MessageSquare,
  Lightbulb,
  Network,
  Users2,
} from 'lucide-react'
import Image from 'next/image'
import { ExpandableCourseCard } from '@/components/ExpandableCourse'
import { Container } from '@/components/Container'
import photo from '@/images/livro.jpg'

export default function ProfessionalTrainingSection() {
  return (
    <section
      id="training"
      aria-label="Formação Profissional"
      className="primaryBack py-12"
    >
      <Container className="relative">
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Formação Profissional
          </h2>
          <p className="text text-lg">
            Formação em Psicologia, Inclusão e Saúde Mental | Daniela Leal,
            Formadora Certificada (CCP + CCPFC)
          </p>
        </div>

        {/* Intro */}
        <p className="text mx-auto mb-12 max-w-3xl text-center">
          Sou formadora certificada pelo IEFP (CCP) e acreditada pelo CCPFC com
          milhares de horas de experiência em contextos educativos, clínicos e
          organizacionais.
        </p>

        {/* Bloco com imagem + Disponível para */}
        <div className="mb-16 grid items-start gap-8 md:grid-cols-2">
          {/* Imagem (visível em cima no mobile) */}
          <div className="flex justify-center md:order-2">
            <Image
              src={photo}
              alt="Formadora Daniela Leal"
              className="w-full max-w-[280px] rounded-2xl object-cover shadow-lg md:max-w-sm"
              priority
            />
          </div>

          {/* Texto "Disponível para" */}
          <div className="space-y-6 md:order-1">
            <h3 className="text-xl font-semibold text-[#7c3e2f]">
              Disponível para:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Briefcase, label: 'Colaboração com empresas' },
                {
                  icon: MessageCircle,
                  label: 'Colaboração com centros de formação',
                },
                { icon: Building2, label: 'Formações autónomas' },
                { icon: Users, label: 'Gestão de equipas' },
                { icon: Users2, label: 'Diversidade e Inclusão' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                >
                  <Icon className="text-[#7c3e2f]" size={26} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Áreas de Formação */}
        <div className="mb-16">
          <h3 className="mb-4 text-xl font-semibold text-[#7c3e2f]">
            Áreas de formação:
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: Heart, label: 'Saúde Mental' },
              { icon: MessageSquare, label: 'Comunicação' },
              { icon: Lightbulb, label: 'Liderança' },
              { icon: Network, label: 'Relacionamento Interpessoal' },
              { icon: Users, label: 'Gestão de equipas' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-[#eee] bg-[#fefcf9] p-3"
              >
                <Icon className="text-[#7c3e2f]" size={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formatos */}
        <div className="mb-12 space-y-2 text-gray-800">
          <p>• Formatos presenciais ou online</p>
          <p>• Workshops de curta duração (2h a 6h)</p>
          <p>• Formações modulares (15h a 50h)</p>
          <p>
            • Cursos acreditados (em parceria com entidades formadoras
            reconhecidas)
          </p>
        </div>
        {/* Todos os Cursos */}
        <div className="mb-20">
          <h3 className="mb-6 text-xl font-semibold text-[#7c3e2f]">
            Exemplos de Cursos:
          </h3>
          <div className="grid items-start gap-6 md:grid-cols-2">
            {[
              {
                title: 'Curso em Linguagem Inclusiva: Da Teoria à Utilização',
                url: 'https://www.inspsic.pt/curso/1-psicologos/325',
              },
              {
                title:
                  'Intervenção Psicossocial Afirmativa LGBTQIA+',
                url: 'https://www.inspsic.pt/curso/1-psicologos/301-especializacao-avancada-pos-universitaria-em-intervencao-psicossocial-afirmativa-com-pessoas-lgbtq-advanced-professional-program',
              },
              {
                title: 'LGBTQI+: Da Construção da Identidade à Inclusão Social',
                shortDescription: 'Ação de sensibilização | Duração: 1h',
                details: [
                  'Conceitos introdutórios: orientação sexual, identidade de género, expressão de género, sexo;',
                  'As dimensões da identidade sexual;',
                  'Experiências de discriminação e resiliência da comunidade LGBTQI+;',
                  'Contexto sociolegal.',
                ],
              },
              {
                title: 'Inclusão da Comunidade LGBTQI+ no Local de Trabalho',
                shortDescription: 'Ação de sensibilização | Duração: 1h',
                details: [
                  'Realidade LGBTQI+ no trabalho;',
                  'Importância da inclusão organizacional;',
                  'Produtividade e bem-estar LGBTQI+;',
                  'Estratégias de inclusão no trabalho.',
                ],
              },
              {
                title: 'A Comunicação Inclusiva no Local de Trabalho',
                shortDescription: 'Ação de sensibilização | Duração: 1h',
                details: [
                  'Definição de linguagem inclusiva;',
                  'Conceitos sobre género, identidade, etnia, deficiência e neurodivergência;',
                  'Vantagens da comunicação inclusiva;',
                  'Estratégias de comunicação inclusiva.',
                ],
              },
              {
                title: 'Género: Da Igualdade à Equidade',
                shortDescription: 'Ação de sensibilização | Duração: 1h',
                details: [
                  'Definições de género, igualdade e equidade;',
                  'Viés inconsciente e construções sociais de género;',
                  'Gender pay gap, glass ceiling e glass cliff;',
                  'Práticas para equidade de género nas empresas.',
                ],
              },
              {
                title:
                  'Neurodiversidade: A Inclusão que Potencia o Corporativo',
                shortDescription: 'Ação de sensibilização | Duração: 1h',
                details: [
                  'Definição de neurodiversidade e neurodivergência;',
                  'Diagnóstico, necessidades e especificidades;',
                  'Inclusão no local de trabalho.',
                ],
              },
              {
                title: 'A Inclusão da Comunidade LGBTQI+ no Local de Trabalho',
                shortDescription: 'Formação curta | Duração: 4h',
                details: [
                  'Conceitos base: orientação sexual, identidade de género, expressão de género;',
                  'Dimensões da identidade sexual e contexto sociolegal;',
                  'Discriminação e resiliência da comunidade LGBTQI+ no trabalho;',
                  'Importância da inclusão para o bem-estar e produtividade;',
                  'Estratégias práticas de inclusão no ambiente organizacional.',
                ],
              },
              {
                title: 'Liderança Inclusiva: Todas as Identidades Contam',
                shortDescription: 'Formação curta | Duração: 4h',
                details: [
                  'Estilos de liderança e inclusão;',
                  'Fundamentos da liderança inclusiva;',
                  'Construção de práticas de liderança com equidade.',
                ],
              },
              {
                title:
                  'Bem-Estar Organizacional, Saúde Mental e Prevenção do Burnout',
                shortDescription: 'Formação curta | Duração: 4h',
                details: [
                  'Saúde mental e burnout;',
                  'Estatísticas organizacionais de saúde mental;',
                  'Boas práticas e estratégias de prevenção.',
                ],
              },
              {
                title:
                  'Inteligência Emocional: Educar o Cérebro Organizacional',
                shortDescription: 'Formação curta | Duração: 4h',
                details: [
                  'Modelo de inteligência emocional;',
                  'Aplicação prática nas organizações e promoção das suas dimensões;',
                  'Contributo da inteligência emocional para a identidade organizacional;',
                  'Boas práticas para bem-estar organizacional com base na inteligência emocional.',
                ],
              },
            ].map((course, idx) =>
              course.url ? (
                <a
                  key={idx}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-[#eee] bg-white p-6 shadow-sm transition hover:border-[#ebbaa2] hover:shadow-md"
                >
                  <p className="mb-1 font-semibold text-[#7c3e2f]">
                    {course.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    Ver mais detalhes no site da INSPSIC
                  </p>
                </a>
              ) : (
                <ExpandableCourseCard
                  key={idx}
                  title={course.title}
                  shortDescription={course.shortDescription}
                  details={course.details}
                />
              )
            )}
          </div>
        </div>

        {/* CTA Final */}
        <div className="relative mt-20 overflow-hidden rounded-2xl bg-[#f3e7e1] px-6 py-12 text-center shadow-xl md:px-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('/textures/soft-pattern.png')] bg-cover bg-center opacity-10"></div>

          <h2 className="sectionSubTitles font-extraboldmd:text-4xl mb-4 text-3xl">
            Capacite a sua equipa com formação transformadora.
          </h2>
          <p className="text mb-8 text-lg text-gray-700">
            Entre em contacto para coconstruirmos uma proposta formativa
            científica, atual e com impacto real.
          </p>
          <div className="flex justify-center">
            <a
              href="#Contactos"
              className="inline-flex items-center justify-center rounded-md bg-[#ebbaa2] px-8 py-4 text-lg font-semibold text-white shadow-md transition duration-200 hover:bg-[#d29e8b]"
            >
              Contactar para Formação
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
