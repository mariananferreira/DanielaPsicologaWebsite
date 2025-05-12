import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import  Hero  from '@/components/Hero'
import { AboutMe } from '@/components/AboutMe'
import OurTeam from '@/components/OurTeam'
import { Contacts } from '@/components/Contacts'
import Parceries from '@/components/Parceries'
import FAQs from '@/components/FAQs'
import OurSpace from '@/components/OurSpace'
import Intro from '@/components/Intro'
import Testimonials from '@/components/Testimonials'
import Psicologia from '@/components/Psicologia'



export default function Home() {
  return (
    <>
      <Head>
        <title>Daniela Leal, Psicóloga</title>
      </Head>
      <Header />
      <main className='primaryBack'>
        <Hero />

        <AboutMe />
        <Psicologia />

      </main>
      <Footer />
    </>
  )
}
