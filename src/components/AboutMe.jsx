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
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="text mx-auto max-w-2xl space-y-8 px-6 text-center leading-relaxed">
            <p>
              Prazer, sou a Daniela Leal e trabalho para construir um mundo mais
              empático, equitativo e feliz. Sou Doutorada em Psicologia pela
              Universidade do Porto, e dedico a minha carreira a um propósito
              claro: ajudar pessoas e organizações a viverem com mais
              consciência, liberdade e verdade.
            </p>
            <p>
              Desde muito jovem, aprendi que as oportunidades nem sempre são
              iguais para todas as pessoas: ser uma estudante de primeira
              geração marcou profundamente o meu percurso e ensinou-me que
              ocupar espaços é também abrir caminho para quem, muitas vezes,
              nunca ouviu, sequer, que é capaz de o fazer. Hoje, sou Psicóloga,
              Investigadora, Formadora e Consultora em Diversidade, Equidade e
              Inclusão (DEI).
            </p>
            <p>
              Mas, mais do que títulos, gosto de acreditar que sou uma
              construtora de pontes: entre ciência e prática, entre
              vulnerabilidade e força, entre identidades e direitos. Acredito
              que a saúde mental, a liberdade de ser e a justiça social não
              podem ser separadas. Trabalho para que ninguém precise de esconder
              quem é para receber respeito: a saúde mental é também um ato de
              resistência e esperança!
            </p>
            <p>
              Seja em contexto clínico, educativo ou organizacional, atuo sempre
              com base em três valores inegociáveis: justiça, empatia e
              liberdade.
            </p>
            <p>Aqui, o teu percurso é bem-vindo. A tua história importa.</p>
            <p>E a tua liberdade de ser é celebrada.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
