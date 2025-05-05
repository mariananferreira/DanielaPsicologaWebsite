import Image from 'next/image'
import ines from '@/images/inestf.jpeg'
import debora from '@/images/debtf.jpeg'


const people = [
  {
    name: 'Débora Brochado',
    role: 'Terapeuta da Fala',
    imageUrl: debora,
    bio: 'Olá, eu sou a Débora e sou Terapeuta da Fala desde 2019! O meu percurso académico passou pela Escola Superior de Saúde do Instituto Politécnico do Porto e ao longo destes anos, fui adquirindo experiência na intervenção de questões relacionadas às Perturbações da Comunicação, Linguagem e Fala, bem como no acompanhamento de crianças com Necessidades Educativas Especiais.  Sou também especializada em Perturbações da Comunicação, Relação e Autismo, uma das áreas que mais me desperta interesse e que mais gosto de explorar. Através do Centro Terapêutico DI, espero conseguir ajudar o máximo de famílias possível e que este projeto se torne uma referência e seja reconhecido pelo profissionalismo, responsabilidade e respeito por todos os que nos procuram, sendo algo que nos é característico.',
    twitterUrl: 'https://www.instagram.com/tfdeborabrochado/',
  },
  {
    name: 'Inês leite',
    role: 'Terapeuta da Fala',
    imageUrl: ines,
    bio: 'Olá, eu sou a Inês e sou Terapeuta da fala desde 2019. Formei-me na Escola Superior de Saúde do Instituto Politécnico do Porto (ESS). Neste meu percurso especializei-me na área Pediátrica e é nesta área que me sinto mais feliz e completa. Sou especialista em Perturbações da Comunicação, Linguagem e Fala, pela CRIAP e em Perturbações da comunicação, Relação e Autismo, pela SeedGo. Realizo intervenção com crianças e com estas diversas perturbações desde que terminei a licenciatura. O Centro Terapêutico DI é para mim, ao nível pessoal e profissional, um grande desafio. Poderão sempre contar com a minha sinceridade, dedicação e profissionalismo. Espero que o nosso projeto auxilie muitas famílias e crianças nesta viagem que é a Terapia da Fala.',
    twitterUrl: "#faqs",
  },
  
]
export default function OurTeam() {
  return (
    <section id="ourteam" aria-label="our team">
      <div className="py-24 md:py-32 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="primaryColor text-3xl font-bold tracking-tight sm:text-4xl">
              Corpo técnico
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conheça a nossa equipa composta pela Terapeuta Débora e pela Terapeuta Inês.  
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className="aspect-[2/2] w-full rounded-xl object-cover"
                  src={person.imageUrl}
                  alt=""
                  priority
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.twitterUrl}
                      className="text-gray-400 hover:text-gray-500"
                      target="blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
