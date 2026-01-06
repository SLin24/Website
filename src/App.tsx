import React, { useState } from 'react';
import './App.css';
import About from './sections/About';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Media from './sections/Media';

function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'blog' | 'media'>('about');

  return (
    <div className="h-screen flex flex-col text-white overflow-hidden">
      {/* Fixed navigation header */}
      <header className="flex-shrink-0 p-6 md:px-16 lg:px-20 xl:px-24 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-10 text-base uppercase tracking-[0.1em] font-inter">
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
      </header>

      {/* Scrollable content area */}
      <main className="flex-1 overflow-y-auto px-6 md:px-16 lg:px-20 xl:px-24 max-w-7xl mx-auto w-full pb-12">
        {activeTab === 'about' && <About />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'blog' && <Blog />}
        {activeTab === 'media' && <Media />}
      </main>
    </div>
  );
}

export default App;
