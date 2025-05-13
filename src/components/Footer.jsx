import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'


export function Footer() {
  return (
    <footer className="secondaryBack">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row sm:justify-between">
          {/* Nome da empresa à esquerda */}
          <p className="order-1 text-sm text-slate-500 sm:order-none sm:mr-auto">
            Daniela Leal
          </p>

          {/* Redes sociais à direita */}
          <div className="order-2 mt-6 flex gap-x-6 sm:order-none sm:ml-auto sm:mt-0">
            <Link
              href="https://www.instagram.com/danielaleal.psicologia/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={24}
                className="text-[#7c3e2f] transition-colors hover:text-[#ebbaa2]"
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=351918275236&text=Olá! Gostaria de marcar uma consulta."
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp
                size={24}
                className="text-[#7c3e2f] transition-colors hover:text-[#ebbaa2]"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daniela-leal-ela-she-ab599a131/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                size={24}
                className="text-[#7c3e2f] transition-colors hover:text-[#ebbaa2]"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
