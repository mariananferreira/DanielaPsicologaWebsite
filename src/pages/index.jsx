import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import { AboutMe } from '@/components/AboutMe'
import Blog from '@/components/Blog'
import { Contacts } from '@/components/Contacts'
import HappyMind from '@/components/HappyMind'
import Professional from '@/components/Professional'
import Gual from '@/components/Gual'
import Testimonials from '@/components/Testimonials'
import Supervision from '@/components/Supervision'
import Psicologia from '@/components/Psicologia'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniela Leal, Psicóloga</title>
      </Head>
      <Header />
      <main className="primaryBack">
        <Hero />
        <AboutMe />
        <Psicologia />
        <Supervision />
        <Professional />
        <Gual />
        <HappyMind />
        <Testimonials />
        <Blog />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
