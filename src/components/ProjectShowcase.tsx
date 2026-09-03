import React, { useState } from 'react';
import { 
  FolderKanban, 
  MapPin, 
  Building2, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { PROJECT_CASE_STUDIES } from '../data/fenestrationData';
import { ProjectCaseStudy } from '../types';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy>(PROJECT_CASE_STUDIES[0]);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredProjects = PROJECT_CASE_STUDIES.filter((p) => {
    if (filterType === 'all') return true;
    return p.facadeType.toLowerCase().includes(filterType.toLowerCase());
  });

  return (
    <section id="projects-section" className="bg-slate-950 text-white py-12 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-amber-500 rotate-45"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Architectural BIM & Case Studies
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Façade Masterpieces & Engineering Audits
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Deep-dive technical audits of iconic building envelopes, solar thermal coatings, and hurricane-rated curtain walls.
            </p>
          </div>

          {/* Project Type Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Envelopes' },
              { id: 'unitized', label: 'Unitized' },
              { id: 'double-skin', label: 'Double-Skin' },
              { id: 'cable net', label: 'Point-Fixed / Cable' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider transition ${
                  filterType === f.id
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Spotlight + Interactive Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Project Feature Display (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-sm border border-slate-800 overflow-hidden shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-sm shadow">
                  {selectedProject.facadeType}
                </span>
                <span className="bg-slate-900/90 text-slate-200 text-xs font-mono px-2.5 py-1 rounded-sm border border-slate-700">
                  {selectedProject.year}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedProject.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Technical Spec Matrix */}
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-slate-950 rounded-sm border border-slate-800 text-xs">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">U-Value (Ucw)</span>
                  <span className="font-mono font-black text-amber-400 text-sm">{selectedProject.uValue}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Solar SHGC</span>
                  <span className="font-mono font-black text-white text-sm">{selectedProject.shgc}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Acoustic Rw</span>
                  <span className="font-mono font-black text-sky-400 text-sm">{selectedProject.acousticRw}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Façade Area</span>
                  <span className="font-mono font-black text-slate-200 text-sm">{selectedProject.facadeArea}</span>
                </div>
              </div>

              {/* Stakeholders & Partners */}
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Architect:</span>
                  <strong className="text-slate-200">{selectedProject.architect}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Façade Consultant:</span>
                  <strong className="text-slate-200">{selectedProject.facadeConsultant}</strong>
                </div>
                <div className="flex justify-between">
                  <span>System / Glass Provider:</span>
                  <strong className="text-slate-200">{selectedProject.systemSupplier}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Glass Specification:</span>
                  <strong className="text-slate-200 text-right truncate max-w-[280px]" title={selectedProject.glassSpec}>
                    {selectedProject.glassSpec}
                  </strong>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedProject.features.map((feat) => (
                  <span key={feat} className="bg-slate-800 text-amber-300 text-[11px] px-2.5 py-1 rounded-sm border border-slate-700 font-bold">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project List Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
              Select Architectural Case Study:
            </h4>

            {filteredProjects.map((proj) => {
              const isSelected = selectedProject.id === proj.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className={`p-3.5 rounded-sm border transition-all cursor-pointer flex gap-3.5 items-center ${
                    isSelected
                      ? 'bg-slate-850 border-amber-500 shadow-md ring-1 ring-amber-500/50'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <img 
                    src={proj.imageUrl} 
                    alt={proj.title}
                    className="w-20 h-16 rounded-sm object-cover shrink-0 border border-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] text-amber-400 mb-0.5 font-bold uppercase">
                      <span>{proj.facadeType}</span>
                      <span className="text-slate-400 font-mono">{proj.year}</span>
                    </div>
                    <h5 className="font-black text-white text-xs sm:text-sm line-clamp-1">
                      {proj.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 truncate">
                      {proj.architect} • {proj.location}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300 mt-1">
                      <span>Uw: {proj.uValue}</span>
                      <span>•</span>
                      <span>Rw: {proj.acousticRw}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
