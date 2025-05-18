import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { ChevronDown, ChevronUp } from 'lucide-react'
import blog1Image from '@/images/lider2.jpg'
import blog2Image from '@/images/adoles.jpg'
import material1 from '@/images/1743582118864.jpg'
import material2 from '@/images/1743582119066.jpg'

export default function BlogSection() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (index) => {
    setExpanded(expanded === index ? null : index)
  }

  const posts = [
    {
      title: 'Liderar ou gerir?',
      image: blog1Image,
      summary:
        'Liderança vai além da gestão. Requer ética, empatia e visão integrada. Uma reflexão para líderes e futuros/as líderes.',
      content: `Ao preparar formação e mentoria de liderança o primeiro passo é desmistificar: quem pode ser líder? 
      
      (...)`,
    },
    {
      title: '“Adolescência”: Série Netflix que ninguém consegue calar',
      image: blog2Image,
      summary:
        'Como comunicar com adolescentes numa era digital dominada por influências como Andrew Tate? Um alerta urgente para famílias e educadores.',
      content: `Assusta-nos porque podia ser o nosso filho. E a verdade é que também o é.
      
      (...)`,
    },
  ]

  return (
    <section id="Blog" className="primaryBack py-16">
      <Container>
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        <div className="mb-12 text-center">
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Blog e Insights
          </h2>
          <p className="text mt-2 text-gray-600">
            Textos que desafiam, inspiram e convidam à reflexão.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c3e2f]">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{post.summary}</p>
                  </div>
                  {expanded === index ? (
                    <ChevronUp className="text-[#7c3e2f]" />
                  ) : (
                    <ChevronDown className="text-[#7c3e2f]" />
                  )}
                </button>

                {expanded === index && (
                  <div className="mt-4 whitespace-pre-line text-sm text-gray-700">
                    {post.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secção de Divulgação */}
        <div className="mt-20 text-center">
          <h3 className="sectionSubTitles mb-6 text-2xl">
            Material de Divulgação
          </h3>
          <p className="text mb-8 text-gray-600">
            Conteúdos visuais criados para sensibilização e partilha. Usa,
            partilha, inspira.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={material1}
                alt="Material de divulgação 1"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={material2}
                alt="Material de divulgação 2"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Ligações externas */}
        <div className="mt-16">
          <h3 className="sectionSubTitles mb-6 text-2xl">
            Alguns exemplos de contributos na Imprensa:
          </h3>
          <div className="text space-y-2 text-sm text-gray-700">
            <a
              href="https://lidermagazine.sapo.pt/nao-deixe-para-amanha-a-inclusao-que-faz-diferenca-hoje/"
              className="block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              • “Não deixe para amanhã a inclusão que faz diferença hoje” –
              Lider Magazine
            </a>
            <a
              href="https://www.publico.pt/2019/07/26/p3/cronica/genero-ideologia-oprime-1881249"
              className="block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              • “Género não é ideologia — é o que oprime” – Público P3
            </a>
            <a
              href="https://portocanal.sapo.pt/um_video/6354746205112"
              className="block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              • Entrevista – Porto Canal
            </a>
            <a
              href="https://www.publico.pt/2023/05/17/p3/cronica/vai-melhorar-2049457"
              className="block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              • “Vai melhorar?” – Público P3
            </a>
            <a
              href="https://www.maxima.pt/atual/detalhe/ha-uma-conferencia-de-felicidade-corporativa-a-chegar-ao-porto-eis-o-que-esperar-dela"
              className="block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              • Conferência sobre Felicidade Corporativa – Máxima
            </a>{' '}
          </div>
        </div>
      </Container>
    </section>
  )
}
