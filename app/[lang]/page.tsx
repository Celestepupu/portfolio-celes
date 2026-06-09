import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Curriculum from '@/components/Curriculum'
import Footer from '@/components/Footer'

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar lang={lang} navDict={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <Projects lang={lang} />
        <About dict={dict.home.about} />
        <Curriculum />
      </main>
      <Footer navDict={dict.nav} footerDict={dict.footer} />
    </>
  )
}
