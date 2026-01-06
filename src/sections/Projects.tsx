import React from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
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
                    className="h-full w-full object-contain"
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
  );
}
