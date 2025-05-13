import { Container } from '@/components/Container'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section id="testemunhos" className="primaryBack py-16">
      <Container>
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        <div className="mb-12 text-center">
          <h2 className="sectionTitles text-3xl font-bold text-[#7c3e2f]">
            Palavras que ficam. Histórias que transformam.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              text: '“Fui diagnosticada pela psicóloga Daniela Leal. Mega recomendo – não só para isso, mas para todas as pessoas que precisam de um BOM psicólogo/a, terapeuta, you name it. She’s your girl!”',
              author: 'S., mulher adulta',
            },
            {
              text: '“Trabalhar com a Daniela foi um ponto de viragem necessário na forma como pensávamos o que era DEI na nossa empresa. Trouxe-nos linguagem, consciência e acima de tudo, humanidade. Percebemos que as boas intenções não chegam.”',
              author:
                '— Equipa de RH, setor tecnológico (anonimizado por confidencialidade)',
            },
            {
              text: '“Ainda hoje sinto conforto e leveza ao lembrar-me de tudo o que me transmitiu”.',
              author: 'A.B., mulher adulta',
            },
            {
              text: '“A Daniela deu-me tempo. Nenhum psicólogo antes o fez. Deu-me tempo de baixar a guarda e não desistiu de mim. Mesmo que ela insista que o mérito é meu, sei que sem ela não teria sido este o resultado. Obrigado.”',
              author: 'H., homem adulto',
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="relative rounded-xl bg-white p-6 text-gray-800 shadow-sm"
            >
              <Quote
                className="absolute -top-4 left-4 text-[#ebbaa2] opacity-30"
                size={40}
              />
              <p className="text mb-4 text-base italic">{testimonial.text}</p>
              <p className="text text-sm font-semibold text-[#7c3e2f]">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
