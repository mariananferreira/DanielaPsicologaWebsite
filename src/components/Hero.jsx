import Image from 'next/image'
import daniela from '@/images/daniela.png'

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F9F5F2] py-8">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 shadow-md md:grid-cols-2">
        {/* Lado esquerdo - texto */}
        <div className="relative flex h-full flex-col justify-center bg-[#F9F5F2] px-6 pt-10 sm:px-12 md:px-20 md:pb-0 md:pt-16">
          <div
            className="flex h-full flex-col items-center justify-center p-6 text-center 
            sm:p-10 md:items-start md:p-12 md:text-left"
          >
            <h1 className="font-poppins mb-2 mt-6 w-full whitespace-nowrap text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-snug tracking-wide text-[#b45f42]">
              Daniela Leal
            </h1>

            <p className="font-montserrat mb-1 w-full whitespace-nowrap text-sm uppercase tracking-wider text-[#3B3B3B]/80 sm:text-base md:text-lg">
              Psicóloga · Investigadora · Formadora
            </p>
            <p className="font-montserrat w-full whitespace-nowrap text-sm uppercase tracking-wider text-[#3B3B3B]/80 sm:text-base md:text-lg">
              Consultora em Diversidade 
            </p>
            <p className="font-montserrat w-full whitespace-nowrap text-sm uppercase tracking-wider text-[#3B3B3B]/80 sm:text-base md:text-lg">
              Equidade e Inclusão
            </p>

            <p className="mb-6 mt-8 text-justify text-lg italic leading-relaxed tracking-normal text-[#7c3e2f]">
              Onde a ciência encontra a{' '}
              <span className="font-medium not-italic">empatia</span>, e cada
              pessoa a sua liberdade de ser.
            </p>

            <p className="text-base font-light leading-relaxed tracking-widest text-gray-500">
              Trabalho com pessoas e organizações para promover vidas com mais
              consciência, liberdade e saúde mental.
            </p>

            {/* Imagem exibida apenas em mobile */}
            <div className="mt-6 block md:hidden">
              <Image
                src={daniela}
                alt="Daniela Leal"
                className="mx-auto h-auto max-h-[400px] w-auto object-contain"
                priority
              />
            </div>

            <a
              href="#Contactos"
              className="mt-8 inline-block w-fit rounded-full border border-[#b45f42] bg-[#fff] px-4 py-2 text-sm font-medium text-[#3B3B3B] transition-colors hover:border-[#b45f42] hover:bg-[#b45f42] hover:text-white"
            >
              Agendar
            </a>
          </div>
        </div>

        {/* Lado direito - imagem (desktop) */}
        <div className="hidden h-full items-end justify-center p-6 sm:p-10 md:contents">
          <Image
            src={daniela}
            alt="Daniela Leal"
            className="h-[83%] w-auto self-end object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
