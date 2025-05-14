import Image from 'next/image'
import daniela from '@/images/daniela.png'

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F9F5F2] py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 bg-white shadow-sm md:grid-cols-2">
        {/* Lado esquerdo - texto */}
        <div className="relative bg-white px-6 py-10 sm:px-10 md:px-14 md:py-16">
          <div className="flex flex-col justify-center bg-[#F9F5F2] p-6 sm:p-10 md:p-12">
            <h1 className="mb-2 font-script text-3xl font-extrabold leading-snug tracking-tight text-[#3B3B3B] sm:text-4xl md:text-5xl">
              Daniela Leal,
            </h1>

            <p className="mb-6 text-sm font-medium text-[#3B3B3B]/80 sm:text-base md:text-lg">
              Psicóloga · Investigadora · Formadora · Consultora DEI
            </p>

            <p className="mb-4 text-base text-[#3B3B3B] sm:text-lg md:text-xl">
              Onde a ciência encontra a <span className="italic">empatia</span>,
              <br />e cada pessoa a sua liberdade de ser.
            </p>

            <p className="mb-8 text-sm text-[#3B3B3B]/70 sm:text-base md:text-lg">
              Trabalho com pessoas e organizações para promover vidas com mais
              consciência, liberdade e saúde mental.
            </p>

            <a
              href="#Contactos"
              className="inline-block w-fit rounded-full border border-[#b45f42] bg-[#fff] px-4 py-2 text-sm font-medium text-[#3B3B3B] transition-colors hover:border-[#b45f42] hover:bg-[#b45f42] hover:text-white"
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
            className="h-[55vh] w-auto object-contain sm:h-[65vh] md:h-[75vh] lg:h-[80vh]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
