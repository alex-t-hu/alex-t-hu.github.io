type Project = {
    title: string
    description: string
    link?: string
    tags?: string[]
}

const projects: Project[] = [
    { title: 'Improved Graph Formalism for Quantum Circuit Simulation', description: '1st in Shing-Tung Yau national competition and regeneron STS top 300' , 'link': 'https://journals.aps.org/pra/abstract/10.1103/PhysRevA.105.022432'},
    { title: 'Indistinguishability Obfuscation' , description: 'cryptography\'s holy grail', 'link': '/18_405_project.pdf'},
    { title: 'Wordbash!', description: 'a party game around AI-generated prompts and human-written responses', link: 'https://github.com/alex-t-hu/wordbash'},
    { title: 'iQuHACK winner', description: 'quantum algorithms', link: 'iquhack.pdf'},
    { title: 'How to Make (Almost) Anything', description: 'documenting my making journey', link: 'https://fab.cba.mit.edu/classes/863.25/people/AlexHu/site-react/dist/index.html'},
    { title: 'Controlled FastComposer', description: 'personalized image gen', 'link': '/6_5940_project.pdf'},
    { title: 'Ginzburg-Landau Superconductivity', description: 'we need room temp superconductor', 'link': '/8_06_project.pdf'},
    { title: 'Extracting Correspondences and Geometry from Pretrained Scene Representation Transformers', description: 'scene representation transformer interpretability', link: '6_s980_project.pdf'},
    { title: '\"Distributed\" File System', description: 'had fun with FUSE', 'link': '/6_5840_project.pdf'},
    { title: 'RetFormers', description: 'hybrid architecture', 'link': '/6_8610_project.pdf'},
    { title: 'Video Super Resolution', description: 'deep learning for video', 'link': '/cv_project.pdf'},
    { title: 'Rocket Fin Optimization', description: 'applied bayesian optimization', link: 'rocket_project.pdf'},
    { title: 'Transcendence within the Ordinary', description: 'from the harvard Art of Film class', link: '/Transcendence Within the Ordinary.pdf'}
]

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(14,165,233,0.08), rgba(255,255,255,0) 40%), radial-gradient(600px 300px at 20% 0%, rgba(2,132,199,0.10), transparent), radial-gradient(700px 400px at 80% 0%, rgba(16,185,129,0.10), transparent)'
      }} />
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="max-w-6xl">
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Alex Hu
          </h1>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            hi! i'm a MIT undergrad interested in building more efficient AI systems across the full stack, from low-level optimizations pushing hardware limits to higher-level algorithmic innovations shaping how models learn and reason.
            at the systems level, this includes optimized kernels, memory management, compiler and runtime improvements, and scalable parallelization strategies. at the algorithmic level, i seek to design training and inference methods built on first-principles—grounded in mathematics, optimization theory, and information dynamics—to reduce redundancy, improve scalability, and utilize available resources better.
            i believe that deeper insight into model internals like representation structure, sparsity patterns, and attention mechanisms can reveal opportunities for principled improvements that transcend traditional performance engineering.
            i aim to create AI systems that are faster and more cost-effective and also more interpretable, robust, and aligned.<br/><br/>
            
            i've worked on agents, infrastructure, and products at OpenAI, kernels at Together AI, inference and architectures at Liquid AI, multimodal pretraining and post-training at Nvidia, zero-knowledge cryptography at Axiom, and quant research at Two Sigma. i enjoyed TAing 6.106 performance engineering and grading for 6.780 inference and information.<br /><br />

            i dabble in math/physics and build physical things in my free time.<br /><br />

            feel free to reach out!
            <span className="inline-flex items-center gap-3 align-middle ml-2">
              <a href="mailto:superalexanderhu@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" title="Email" className="text-neutral-700 hover:text-neutral-900">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
              </a>
              <a href="https://github.com/alex-t-hu" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="text-neutral-700 hover:text-neutral-900">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.25 1.84 1.25 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.57C20.56 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0Z"/>
                </svg>
              </a>
              <a href="https://x.com/__alexhu" target="_blank" rel="noreferrer" aria-label="X" title="X" className="text-neutral-700 hover:text-neutral-900">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alexander-hu/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-neutral-700 hover:text-neutral-900">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </a>
            </span><br />
          </p>
        </div>

        <div className="mx-auto max-w-6xl py-4">
            <h1 className="text-3xl font-semibold tracking-tight">projects</h1>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((p) => (
                <a
                    key={p.title}
                    href={p.link ?? '#'}
                    className="group block rounded-xl border border-black/10 bg-white p-6 shadow-sm transition duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:border-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[140px]"
                >
                    <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="text-lg font-medium text-neutral-900">{p.title}</div>
                        <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
                    </div>
                    <div className="text-neutral-400 transition group-hover:text-neutral-700" aria-hidden>→</div>
                    </div>
                    {p.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                        <span key={t} className="rounded-md bg-black/5 px-2 py-1 text-xs text-neutral-600">{t}</span>
                        ))}
                    </div>
                    )}
                </a>
                ))}
            </div>
        </div>

        
      </div>
    </section>
  )
}


