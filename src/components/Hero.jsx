import Image from 'next/image'
import daniela from '@/images/daniela.png'

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F9F5F2] py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 bg-white shadow-sm md:grid-cols-2">
        {/* Lado esquerdo - texto */}
        <div className="relative bg-white pb-[60px] pl-[60px]">
          <div className="mt-6 flex flex-col justify-center bg-[#F9F5F2] p-10 md:p-16">
            <h1 className="mb-2 text-4xl font-extrabold leading-snug tracking-tight text-[#3B3B3B] sm:text-5xl">
              Daniela Leal, PhD
            </h1>
            <p className="mb-6 text-base font-medium text-[#3B3B3B]/80 sm:text-lg">
              Psicóloga · Investigadora · Formadora · Consultora DEI
            </p>

            <p className="mb-4 text-lg text-[#3B3B3B] sm:text-xl">
              Onde a ciência encontra a <span className="italic">empatia</span>,
              <br />e cada pessoa a sua liberdade de ser.
            </p>

            <p className="mb-8 text-base text-[#3B3B3B]/70 sm:text-lg">
              Trabalho com pessoas e organizações para promover vidas com mais
              consciência, liberdade e saúde mental.
            </p>
            <a
              href="#Contactos"
              className="inline-block w-fit rounded-full bg-[#FFCDB2] px-4 py-2 text-sm font-medium text-[#3B3B3B] transition-colors hover:bg-[#fcbfa1]"
            >
              Agendar
            </a>
          </div>
        </div>

        {/* Lado direito - imagem */}
        <div className="relative flex items-end justify-center bg-white pt-10">
          <Image
            src={daniela}
            alt="Daniela Leal"
            className="h-[83vh] w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
