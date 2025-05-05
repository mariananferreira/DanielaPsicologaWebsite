import Image from 'next/image'
import debora from '@/images/deb1.png'
import ines from '@/images/ines.jpeg'
import nadia from '@/images/nadia.png'

const people = [
  {
    name: 'Dra. Débora Brochado',
    role: 'Terapeuta da Fala',
    imageUrl: debora,
    linkedinUrl: 'https://www.instagram.com/tfdeborabrochado/',
    url: '/terdeb',
  },
  {
    name: 'Dra. Inês Leite',
    role: 'Terapeuta da Fala',
    imageUrl: ines,
    linkedinUrl: 'https://www.instagram.com/tfinesleite/',
    url: '/terines',
  },
  {
    name: 'Dra. Nádia Teixeira',
    role: 'Psicóloga Clínica',
    imageUrl: nadia,
    linkedinUrl: '#deb',
    url: '/psinadia',
  },
  // More people...
]

export default function OurTeam() {
  return (
    <section id="ourteam" aria-label="ourteam">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mb-12 mt-12 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Conheça a nossa <span className="titleWord">equipa</span>{' '}
              especializada!
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <a href={person.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="mx-auto h-56 w-56 rounded-full border-4 border-[#e8cfc2] object-fill"
                    src={person.imageUrl}
                    alt=""
                    priority
                  />{' '}
                </a>
                <h3 className="text mt-6 text-base/7 font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
                <ul role="list" className="mt-4 flex justify-center gap-x-4">
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
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
