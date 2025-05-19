import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

// Componente para o TopBar
export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true)

  const handleScroll = () => {
    setIsVisible(window.scrollY === 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 bg-[#F9F5F2] px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } hidden sm:flex`}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-end space-x-6">
        {/* Telefone */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-5 w-5 text-slate-700" />
          <a href="tel:+351918275236" className="hover:underline">
            +351 918 275 236
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="h-5 w-5 text-slate-700" />
          <a
            href="mailto:danielaleal.psic@gmail.com"
            className="hover:underline"
          >
            danielaleal.psic@gmail.com
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center space-x-4 text-slate-700">
          <a
            href="https://www.instagram.com/danielaleal.psicologia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C13584]"
            aria-label="Instagram"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniela-leal-ela-she-ab599a131/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

// Componente para Navegação Mobile
function MobileNavLink({ href, children }) {
  const basePath = '/' // Substitua pelo caminho base do seu projeto, se necessário
  return (
    <Link
      href={`${basePath}${href}`}
      className="block w-full rounded-md p-2 text-center hover:bg-rose-200"
    >
      {children}
    </Link>
  )
}

function MobileNavToggleIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 overflow-visible stroke-black"  // Alterando para stroke preto
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <MobileNavToggleIcon open={open} />  {/* Alterado aqui */}
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-black/30" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="div"
                className="absolute inset-x-4 top-full mt-4 flex flex-col space-y-4 rounded-lg bg-white p-4 text-lg shadow-lg ring-1 ring-black/5"
              >
                <MobileNavLink href="#aboutme">Sobre mim</MobileNavLink>
                <MobileNavLink href="#Psicologia">
                  Psicologia Clínica
                </MobileNavLink>
                <MobileNavLink href="#Supervision">
                  Supervisão Clínica
                </MobileNavLink>
                <MobileNavLink href="#training">
                  Formação Profissional
                </MobileNavLink>
                <MobileNavLink href="#gual">Programa GUAL</MobileNavLink>
                <MobileNavLink href="#happy-mind-labs">
                  Happy Mind Labs
                </MobileNavLink>
                <MobileNavLink href="#Blog">Blog</MobileNavLink>
                <MobileNavLink href="#Contactos">Contactos</MobileNavLink>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

// Cabeçalho Principal
export function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTopBarVisible, setIsTopBarVisible] = useState(true) // Estado para controlar a visibilidade da TopBar

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    const handleScroll = () => {
      setIsTopBarVisible(window.scrollY === 0) // Atualiza o estado conforme o scroll
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/** Exibir a barra superior somente em telas maiores que mobile */}
      {!isMobile && <TopBar />}
      <header
        className={clsx(
          'fixed z-40 w-full bg-[#F9F5F2] px-4 py-4 font-bold shadow-md transition-all duration-300 sm:px-6 lg:px-8',
          {
            'top-0': isMobile || !isTopBarVisible, // Em mobile ou se a barra superior sumir
            'top-[40px]': !isMobile && isTopBarVisible, // Em telas grandes com a barra visível
          }
        )}
      >
        <Container>
          <div className="flex items-center justify-between space-x-4">
            <Link href="/" aria-label="Home" className="flex-shrink-0">
              <p className="text-base sm:text-lg md:text-xl">Daniela Leal</p>
            </Link>

            <div className="lg:hidden">
              <MobileNavigation />
            </div>

            <nav className="hidden space-x-6 lg:flex">
              <NavLink href="#aboutme">Sobre mim</NavLink>
              <NavLink href="#Psicologia">Psicologia Clínica</NavLink>
              <NavLink href="#Supervision">Supervisão Clínica</NavLink>
              <NavLink href="#training">Formação Profissional</NavLink>
              <NavLink href="#gual">Programa GUAL</NavLink>
              <NavLink href="#happy-mind-labs">Happy Mind Labs</NavLink>
              <NavLink href="#Blog">Blog</NavLink>
              <NavLink href="#Contactos">Contactos</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    </>
  )
}
