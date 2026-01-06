import React from 'react';
import Profile from '../assets/profile.png'
export default function About() {
  return (
    <div className="flex gap-12 h-full">
      {/* Left side - Sticky */}
      <aside className="w-1/2 sticky top-0 self-start flex flex-col items-center justify-start pt-8">
        {/* Profile picture circle */}
        <div className="rounded-full bg-white mb-8 overflow-hidden border-2 border-white/20 flex items-center justify-center" style={{ width: '400px', height: '400px' }}>
          <img
            src={Profile}
            alt="Profile"
            className="object-contain"
            style={{ width: '75%', height: '75%' }}
          />
        </div>

        {/* Bullet points / intro info */}
        <div className="space-y-3 text-white/80 px-6">
          <ul className="space-y-2 list-disc list-inside">
            {/* <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li> */}
          </ul>
        </div>
      </aside>

      {/* Right side - Scrollable content */}
      <main className="flex-1 space-y-8 pb-20">
        <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
        
        {/* Placeholder content sections - you'll replace this */}
        <section className="space-y-4">
          {/* <h2 className="text-2xl font-semibold">Nothing Much</h2> */}
          <p className="text-white/80">Living Life.</p>
        </section>

        {/* <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Section 2</h2>
          <p className="text-white/70"></p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Section 3</h2>
          <p className="text-white/70">Content goes here...</p>
        </section> */}

        {/* Add more sections as needed */}
      </main>
    </div>
  );
}
