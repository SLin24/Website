import React from 'react';
import { mediaItems } from '../data/media';

export default function Media() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold">Media</h1>
        <p className="text-white/70">Stuff I find appealing</p>
      </header>

      <section aria-label="Media grid">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mediaItems.map((item) => (
            <article
              key={item.id}
              className="bevel-card relative flex flex-col overflow-hidden transition-all hover:ring-2 hover:ring-white/30 hover:scale-[1.02]"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white/5 flex items-center justify-center">
                {item.songUrl ? (
                  <svg
                    className="w-40 h-40 text-white/50"
                    viewBox="0 0 24 28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3v12.83c-.32 1.78-1.03 1.62-1.67 1.62-1.84 0-3.32 1.76-3.32 3.55s1.48 3.55 3.32 3.55 3.31-1.6 3.31-3.55V7.17L17 6v7.07c-.32 1.78-1.03 1.62-1.67 1.62-1.84 0-3.32 1.76-3.32 3.55s1.48 3.55 3.32 3.55 3.31-1.6 3.31-3.55V3H8z" />
                  </svg>
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.label || 'Media'}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="px-4 py-3 space-y-2">
                {item.label && (
                  <p className="text-sm text-white/80">{item.label}</p>
                )}
                {item.songUrl && (
                  <a
                    href={item.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-100"
                  >
                    {item.songLabel || 'Listen'}
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
