import { useState, useEffect } from 'react'
import Image from 'next/image'
import heroImage from '@/images/banner2.png' // Usa a mesma imagem para simplificar

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState(heroImage)

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(heroImage) // Pode adaptar para múltiplas imagens se quiser
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative bg-gray-900 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      {/* Imagem de fundo responsiva */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Hero image background"
          className="h-full w-full object-cover object-left opacity-90"
          priority
          layout="fill"
        />
      </div>

      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-10" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 text-white sm:pt-40 lg:px-8">
        <div className="ml-auto max-w-md text-center md:text-right lg:max-w-lg">
          <p className="text-base font-medium uppercase tracking-wide text-white mb-2">
            DANIELA LEAL, PhD., Psicóloga, Investigadora, Formadora e Consultora DEI
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-5xl italic">
            Onde a ciência encontra a <span className="not-italic">empatia</span>,<br />
            e cada pessoa a sua liberdade de ser.
          </h1>

          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white/90">
            Trabalho com pessoas e organizações para promover vidas com mais
            consciência, liberdade e saúde mental.
          </p>

          <div className="mt-8 flex justify-center md:justify-end">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-md bg-[#F9F5F2] px-6 py-3 text-base font-medium text-gray-900 transition duration-200 hover:bg-[#ebbaa2]"
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
