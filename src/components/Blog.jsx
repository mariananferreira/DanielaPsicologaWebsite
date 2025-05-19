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
  const [selectedImage, setSelectedImage] = useState(null)

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

      Há muita confusão sobre liderar e gerir. Parece subjacente à leitura dos papéis de liderança a ideia de algo inato e natural. Esta perspetiva cria dois problemas difíceis de serem resolvidos: por um lado temos pessoas convencidas que são ótimas líderes e não investem na sua formação em liderança ainda que a exerçam, por outro lado, temos pessoas com muita capacidade de aprendizagem e flexibilidade, que não chegam, sequer, a ambicionar lugares de liderança ou a trabalhar nesse sentido por se considerarem “inadaptadas”. 
      
      É preciso mudar a perspetiva. Liderar não é (só) gerir. Liderar é uma perspetiva de passado, presente e futuro integradas. Liderar implica ética, humanidade, empatia e escuta-ativa (já experimentaram ouvir para compreender e não ouvir só para responder?). Liderança significa que, além de CEO, Gestor, Coordenador, Presidente ou outra designação do cargo, devemos focar-nos em ser, o que gosto de chamar, o BBS – Brain Behind the Scenes. Isto significa ter uma ação reflexiva e integrada sobre os projetos, onde assumimos responsabilidades e as equilibramos com a dedicação e investimento de quem quer, mais do que uma marca, empresa ou projeto, criar uma identidade no que faz. 
      
      Líderes e Futuros/as-Líderes: vamos a isto? ✨`,
    },
    {
      title: '“Adolescência”: Série Netflix que ninguém consegue calar',
      image: blog2Image,
      summary:
        'Como comunicar com adolescentes numa era digital dominada por influências como Andrew Tate? Um alerta urgente para famílias e educadores.',
      content: `Assusta-nos porque podia ser o nosso filho. E a verdade é que também o é.

      Trabalho com adolescentes, escolas, professores e pais. Em diferentes contextos e com diferentes objetivos. Mas há uma verbalização comum entre os adultos quando se fala de adolescentes: "Ele/a não fala". Usualmente, temos pais e mães a observar com surpresa que, em contexto clínico, não há essa dificuldade de expressão. Nesta série temos o pai, polícia, que ao ser nomeado para este caso de homicídio, olhou para o seu próprio filho. Percebeu que o filho era vítima de bullying, que não o conhecia devidamente e, mais do que isso: não falava a linguagem dele. O pai do Jamie, personagem principal, questiona-se onde errou. Recorda o tempo em que o seu próprio pai o agredia. Jurou nunca fazer isso aos seus próprios filhos. Não o fez. E o seu filho é um homicida com esta idade. Questiona-se onde falhou e recorda o momento em que o excesso de trabalho se sobrepôs ao contacto em família. 
      
      Sim, somos gerações diferentes. Sim os pais nem sempre utilizam os mesmos meios de comunicação e conteúdos que os seus filhos. O perigo é que há alguém que utiliza: pessoas que não são bem-intencionadas e se tornam exemplos. Vendem a imagem que o adolescente quer ter e alimentam isso porque, ao contrário de nós, adultos de referência, entram diariamente na vida dos/as nossos/as adolescentes. Sim, através de uma tela. Uma tela que dá a falsa sensação de contacto. 
      
      Esta série aborda o fenómeno que representa um criminoso machista, racista, misógino e LGBTfóbico chamado Andrew Tate. Ele, tudo o que ele espelha, tudo o que veio antes dele e o que ele mesmo conseguiu levar dali para a frente. A sua comunicação funciona porque aperta os gatilhos emocionais do rapaz adolescente heterossexual comum: a imagem social, a exploração da sexualidade e a perspetiva de que as dificuldades sentidas pelos homens têm como culpadas as mulheres. E a forma como isto fica impregnado nos adolescentes é perfeitamente expressa no episódio de Jamie com a psicóloga. 
      A ansiedade, a raiva e a frustração provocadas por questões como "o que significa para ti ser homem?". O desprezo de Jamie ao perceber o poder que a psicóloga tinha no ambiente, desde a sua beleza até ao poder de parar os guardas (poderes que não reconhecia em si mesmo!). As mudanças repentinas de humor, a dificuldade de leitura social que ficam claras em Jamie, e que não se deixa (propositadamente) claro, onde está uma possível perturbação da personalidade formada, onde a modelagem pesa mais do que o resto, onde ganha a reatividade de um adolescente ostracizado. 
      
      E do lado de fora, quando vemos isto, sentimos que tudo se cruza numa teia onde culpamos todos mas ninguém se parece reconhecer suficientemente culpado. Jamie é um homicida mas é também um adolescente que urina as calças com medo da polícia que lhe invade a casa. E nós? Quem somos? Onde e como nos temos escusado de responsabilidade com adolescentes ou, pelo contrário, que esforços de adaptação temos feito para permitir o seu melhor desenvolvimento? 
      
      A cena final do pai de Jamie a despedir-se com um beijo no peluche do filho e a pedir desculpa. Senti esta cena como um estalo de uma mão fria. Não só dói como acorda e nos lembra que estamos ainda vivos e no tempo perfeito de abrir canais de comunicação com os/as nossos/as adolescentes. É imperativo falar a linguagem deles/as. Antes que os Tates deste mundo sejam os seus principais interlocutores.
      `,
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
                    <h3 className="text-xl text-[#7c3e2f]">{post.title}</h3>
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
          <div className="grid justify-items-center gap-3 md:grid-cols-2">
            {[material1, material2].map((material, idx) => (
              <div
                key={idx}
                className="aspect-[3/4] w-full max-w-sm cursor-pointer overflow-hidden rounded-xl shadow-md md:max-w-xs lg:max-w-sm"
                onClick={() => setSelectedImage(material)}
              >
                <Image
                  src={material}
                  alt={`Material de divulgação ${idx + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              <div className="w-full max-w-3xl px-4">
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </div>
          )}
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
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
