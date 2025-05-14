import { Container } from '@/components/Container'

export function AboutMe() {
  return (
    <section id="aboutme" aria-label="Sobre nós" className="primaryBack py-6">
      <Container className="relative">
        <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Quem sou?
          </h2>
        </div>

        <div className="text mx-auto max-w-4xl space-y-3 px-6 text-center leading-relaxed">
          <p>
            Prazer, sou a Daniela Leal e trabalho para construir um mundo mais
            empático, equitativo e feliz.
          </p>

          <blockquote className="text-xl font-medium text-[#7c3e2f]">
            “Ajudo pessoas e organizações a viverem com mais consciência,
            liberdade e verdade.”
          </blockquote>

          <p>
            Sou Doutorada em Psicologia pela Universidade do Porto e dedico a
            minha carreira a esse propósito.
          </p>

          <p>
            Desde muito jovem, aprendi que as oportunidades nem sempre são
            iguais para todas as pessoas. Ser uma estudante de primeira geração
            marcou profundamente o meu percurso. Isso ensinou-me que ocupar
            espaços é também abrir caminho para quem, muitas vezes, nunca ouviu,
            sequer, que é capaz de o fazer.
          </p>

          <blockquote className="text-xl font-medium text-[#7c3e2f]">
            Psicóloga, Investigadora, Formadora e Consultora em Diversidade,
            Equidade e Inclusão.
          </blockquote>

          <p>
            Mais do que títulos, gosto de acreditar que sou uma construtora de
            pontes: entre ciência e prática, entre vulnerabilidade e força,
            entre identidades e direitos.
          </p>

          <p>
            Acredito que a saúde mental, a liberdade de ser e a justiça social
            não podem ser separadas.
          </p>

          <blockquote className="text italic">
            “A saúde mental é também um ato de resistência e esperança.”
          </blockquote>

          <p>
            Seja em contexto clínico, educativo ou organizacional, atuo sempre
            com base em três valores inegociáveis:
            <strong> justiça, empatia e liberdade.</strong>
          </p>

          <div className="space-y-2 pt-4">
            <p className="font-semibold text-[#7c3e2f]">
              Aqui, o teu percurso é bem-vindo.
            </p>
            <p className="font-semibold text-[#7c3e2f]">
              A tua história importa.
            </p>
            <p className="font-semibold text-[#7c3e2f]">
              E a tua liberdade de ser é celebrada.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
