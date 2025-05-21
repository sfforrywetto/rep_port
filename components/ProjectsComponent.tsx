'use client'

import { useState } from 'react';
import Image from 'next/image';

// Dummy data structure for projects
const projectData = {
  Blender: [
    {
      title: 'Abstract Scene',
      image: '/project_assets/blender/abstract1.png',
      description: 'Rendered 3D abstract environment in Blender.'
    },
    {
      title: 'Product Visualization',
      image: '/project_assets/blender/disk.png',
      description: 'Realistic product render with glass and shadows.'
    },
  ],
  IT: [
    {
      title: 'Portfolio Website Mockup',
      image: '/project_assets/it/portfolio_mockup.png',
      description: 'Mock up of modern portfolio, made in Figma.'
    },
    {
      title: 'Spotify Design',
      image: '/project_assets/it/spotify_design.png',
      description: 'Design of Spotify Web written on JS, CSS, HTML on Next.js framework.'
    },
    {
      title: 'Expenses Tracker',
      image: '/project_assets/it/et_tracker.png',
      description: 'Expenses Tracker (no functional) writen on JS, CSS, HTML on Next.js framework.'
    },
    {
      title: 'Valentin Site',
      image: '/project_assets/it/valentine_day.png',
      description: 'Valentine Card made for my girlfriend in one night to Valentines Day. Written on React.'
    },
    {
      title: 'ASCII Visualizer',
      image: '/project_assets/it/k.svg',
      description: 'Simple Python code, that recreate input PNG/JPEG image into ASCII SVG item(symbol and color can be changed optionaly).'
    },
  ],
  TouchDesigner: [
    {
      title: 'Flower Particle Math visualiztion',
      image: '/project_assets/TouchDesigner/particle.png',
      description: 'Flower made of particles proccedurally generate with Math function.'
    },
    {
      title: 'Web Visualization',
      image: '/project_assets/TouchDesigner/web.png',
      description: 'Spyder Web proccedurally generate with Math function.'
    },
    {
      title: 'Flower Edge Tracking',
      image: '/project_assets/TouchDesigner/blob_track.png',
      description: 'Edge Trackin of Flower proccedurally generate with Math function.'
    },
  ],
  Typografie: [
    {
      title: 'Poster with Elements of GlassMorphism',
      image: '/project_assets/typografie/New Era.png',
      description: 'Simple Poster with element of Glass Morphism.'
    },
    {
      title: 'Porsche Poster',
      image: '/project_assets/typografie/porsche.png',
      description: 'Poster of Porsche 911 turbo(930).'
    },
    {
      title: 'Skate Visit Card',
      image: '/project_assets/typografie/skate.png',
      description: 'Visit Card with skate brand add.'
    },
    {
      title: 'Pulp Fiction Poster',
      image: '/project_assets/typografie/pulp.png',
      description: 'Poster to film "Pulp Fiction".'
    },
    {
      title: 'Visitcard add',
      image: '/project_assets/typografie/pulp_visit.png',
      description: 'Visit card Add to film "Pulp Fiction".'
    },
  ],
};

export default function ProjectsPage() {
  const [category, setCategory] = useState<keyof typeof projectData>('Blender');
    const [selectedProject, setSelectedProject] = useState<null | typeof projectData.Blender[0]>(null)
    const [fullImageView, setFullImageView] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F0EAD6] p-6">
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(projectData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as keyof typeof projectData)}
            className={`px-4 py-2 rounded font-medium ${
              category === cat ? 'bg-black text-white' : 'bg-white text-black border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="text-2xl text-black font-bold mb-4 text-center">{category}</h2>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
        {projectData[category].map((project, idx) => (
          <div
            key={idx}
            className="relative p-2 bg-white rounded-xl shadow-lg border items-center justify-center w-fit h-fit border-gray-300 hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <div className="inline">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover rounded-md mb-4"
                />
                <h3 className=" relative font-semibold text-lg bottom-[-1%] left-2 *:px-3 py-0 rounded">{project.title}</h3>
            </div>

          </div>
        ))}
      </div>
      {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)} // click outside to close
            >
              <div
                className="relative bg-white/10 backdrop-blur-lg rounded-xl max-w-xs w-full p-4 shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()} // prevent background close
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-0 right-1 text-xl text-gray-300 hover:text-white"
                >
                  &times;
                </button>
    
                <Image 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={500}
                  height={350}
                  className="rounded-lg object-contain w-full mb-4 cursor-pointer"
                  onDoubleClick={() => setFullImageView(true)}
                />
    
    
                <h2 className="text-xl font-bold mb-2 text-white">{selectedProject.title}</h2>
                <p className="text-gray-200">{selectedProject.description}</p>
              </div>
            </div>
        )}
        {fullImageView && selectedProject && (
            <div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setFullImageView(false)} // Close on click
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] max-w-[90vw] rounded-xl"
              />
            </div>
        )}
    </div>
  );
}
