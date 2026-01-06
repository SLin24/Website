import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'donut.c adaptation',
    mediaUrl: '/ProjectMedia/croppedSS.mp4',
    mediaType: 'video',
    linkUrl: null,
    linkLabel: null,
    autoPlay: true,
    loop: true,
  },
  {
    id: 2,
    title: 'WIP',
    mediaUrl: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    linkUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
    linkLabel: 'TBD',
  },






  // {
  //   id: 1,
  //   title: 'Bones & Meat',
  //   mediaUrl: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=80',
  //   mediaType: 'image',
  //   linkUrl: 'https://example.com/bones-meat',
  //   linkLabel: 'View case study',
  // },
  // {
  //   id: 2,
  //   title: 'Skull Study (video)',
  //   mediaUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  //   mediaType: 'video',
  //   linkUrl: 'https://example.com/skull-study',
  // },
  // {
  //   id: 3,
  //   title: 'Flesh Atlas (gif)',
  //   mediaUrl: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
  //   mediaType: 'gif',
  // },
  // {
  //   id: 4,
  //   title: 'Organ Maps (embed)',
  //   mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  //   mediaType: 'embed',
  // },
  // {
  //   id: 5,
  //   title: 'Tissue Tests',
  //   mediaUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  //   mediaType: 'image',
  // },
];

function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'blog' | 'media'>('projects');

  return (
    <div className="min-h-screen text-white">
      {/* Main content */}
      <main className="p-6 md:px-16 md:py-12 lg:px-20 xl:px-24 max-w-7xl mx-auto">

        {/* Top tab bar */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-10 text-base uppercase tracking-[0.1em]">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-2 px-1 border-b-2 transition-colors ${activeTab === 'about' ? 'border-white text-white font-semibold' : 'border-transparent text-white/70 hover:text-white hover:border-white/60'}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-2 px-1 border-b-2 transition-colors ${activeTab === 'projects' ? 'border-white text-white font-semibold' : 'border-transparent text-white/70 hover:text-white hover:border-white/60'}`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`pb-2 px-1 border-b-2 transition-colors ${activeTab === 'blog' ? 'border-white text-white font-semibold' : 'border-transparent text-white/70 hover:text-white hover:border-white/60'}`}
            >
              Blog
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`pb-2 px-1 border-b-2 transition-colors ${activeTab === 'media' ? 'border-white text-white font-semibold' : 'border-transparent text-white/70 hover:text-white hover:border-white/60'}`}
            >
              Media
            </button>
          </div>
          <div className="mt-2 h-px w-full bg-white/20" />
        </div>

        {activeTab === 'about' && (
          <section className="space-y-4">
            <h1 className="text-4xl font-extrabold">About</h1>
            <p className="text-white/70 max-w-3xl">
              TBD
            </p>
          </section>
        )}

        {activeTab === 'projects' && (
          <>
            <header className="mb-8">
              <h1 className="text-4xl font-extrabold">Projects</h1>
            </header>

            {/* Grid of project cards */}
            <section aria-label="Projects grid">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((p) => (
                  <article
                    key={p.id}
                    className="bevel-card relative flex flex-col overflow-hidden transition-all hover:ring-2 hover:ring-white/30 hover:scale-[1.02]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                      {p.mediaType === 'video' && p.mediaUrl && (
                        <video
                          src={p.mediaUrl}
                          className="h-full w-full object-cover"
                          autoPlay={p.autoPlay}
                          loop={p.loop}
                          muted
                          playsInline
                        />
                      )}
                      {(p.mediaType === 'image' || p.mediaType === 'gif' || !p.mediaType) && p.mediaUrl && (
                        <img
                          src={p.mediaUrl}
                          alt={p.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {p.mediaType === 'embed' && p.mediaUrl && (
                        <iframe
                          src={p.mediaUrl}
                          title={p.title}
                          className="h-full w-full"
                          allowFullScreen
                        />
                      )}
                    </div>

                    <div className="px-4 py-3 space-y-2">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      {p.linkUrl && (
                        <a
                          href={p.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-100"
                        >
                          {p.linkLabel || 'View project'}
                          <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'blog' && (
          <section className="space-y-4">
            <h1 className="text-4xl font-extrabold">Blog</h1>
            <p className="text-white/70">Coming Soon</p>
          </section>
        )}

        {activeTab === 'media' && (
          <section className="space-y-4">
            <h1 className="text-4xl font-extrabold">Media</h1>
            <p className="text-white/70">Coming Soon</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
