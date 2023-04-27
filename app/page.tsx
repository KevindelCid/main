import Head from 'next/head'
import Image from 'next/image'

import  styles  from  './index.module.css'
import { projects } from '../utils'


export default function Home() {





  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1>Welcome, i´m Kevin del Cid</h1>
        <section>

          <h2>This is my main projects</h2>
          <ol>
            {
              projects.map(project => (
                <li key={project.id}>
                  <article>
                    <header>
                      <h2 >{project.name}</h2>
                    </header>
                    <div>
                      <p>{project.description}</p>
                    </div>
                    <footer >
                      <a href={project.path} >{`get and more >`}</a>
                    </footer>
                  </article>
                </li>
              ))
            }
          </ol>
        </section>


      </main>

    </div>
  )
}
