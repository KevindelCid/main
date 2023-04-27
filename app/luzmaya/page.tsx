
import styles from '../index.module.css'
import { projects } from 'utils'

import { luzmayaNavbarItems, terms } from 'utils/luzmaya'
import { NavBar } from 'app/components/luzmaya'
import Head from 'next/head'
import luzmayalogo from '../../assets/luzmaya/luzmayaico.svg'


export default function Home() {



  return (
    <div>
      <Head>
        <title>Luzmaya</title>
        <link rel="icon" href={luzmayalogo} />
      </Head>

      <main className='pr-4 pl-4'>
          <NavBar items={luzmayaNavbarItems} />
          <section className='pt-6'>
            <h1 className='text-lg font-bold text-slate-200'>{terms.title}</h1>
        <p className=' text-slate-200'>{terms.text}</p>
          </section>
        


      </main>

    </div>
  )
}
