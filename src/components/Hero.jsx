import Image from 'next/image'
import daniela from '@/images/daniela.png'

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F9F5F2] py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 shadow-sm md:grid-cols-2">
        {/* Lado esquerdo - texto */}
        <div className="relative px-6 py-10 sm:px-12 md:px-20 md:py-16">
          <div className="flex flex-col justify-center bg-[#F9F5F2] p-6 sm:p-10 md:p-12">
            <h1 className="font-poppins mb-2 w-full whitespace-nowrap text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-snug tracking-wide text-[#dac6bb]">
              Daniela Leal
            </h1>

            <p className="font-montserrat mb-1 w-full whitespace-nowrap text-sm uppercase tracking-wider text-[#3B3B3B]/80 sm:text-base md:text-lg">
              Psicóloga · Investigadora · Formadora
            </p>
            <p className="font-montserrat w-full whitespace-nowrap text-sm uppercase tracking-wider text-[#3B3B3B]/80 sm:text-base md:text-lg">
              Consultora em Diversidade, Equidade e Inclusão
            </p>

            <p className="mt-8 mb-6 text-justify text-lg italic leading-relaxed tracking-normal text-[#7c3e2f]">
              Onde a ciência encontra a{' '}
              <span className="font-medium not-italic">empatia</span>, e cada
              pessoa a sua liberdade de ser.
            </p>

            <p className="text-base font-light leading-relaxed tracking-widest text-gray-500">
              Trabalho com pessoas e organizações para promover vidas com mais
              consciência, liberdade e saúde mental.
            </p>

            <a
  href="#Contactos"
  className="mt-8 inline-block w-fit rounded-full border border-[#b45f42] bg-[#fff] px-4 py-2 text-sm font-medium text-[#3B3B3B] transition-colors hover:border-[#b45f42] hover:bg-[#b45f42] hover:text-white"
>
  Agendar
</a>

          </div>
        </div>

        {/* Lado direito - imagem */}
        {/* Imagem – escondida em ecrãs < 768px */}
        <div className="hidden items-end justify-center p-6 sm:p-10 md:flex md:p-6">
          <Image
            src={daniela}
            alt="Daniela Leal"
            className="h-[35vh] w-auto object-contain sm:h-[45vh] md:h-[60vh] lg:h-[70vh]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
