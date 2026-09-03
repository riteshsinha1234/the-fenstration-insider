import React, { useState } from 'react';
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  ExternalLink, 
  Building, 
  Clock, 
  Plus, 
  Check,
  Award
} from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/fenestrationData';
import { EventItem } from '../types';

export const EventsCalendar: React.FC = () => {
  const [addedEvents, setAddedEvents] = useState<Set<string>>(new Set());

  const handleToggleCalendar = (id: string) => {
    setAddedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="events-calendar" className="bg-white dark:bg-slate-950 py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-amber-500 rotate-45"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Global Trade Fairs & Summits (2026 - 2027)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              International Expos & Façade Conferences
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Meet system extruders, glass processors, hardware engineers, and architects at leading worldwide industry exhibitions.
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => {
            const isAdded = addedEvents.has(event.id);
            return (
              <div
                key={event.id}
                className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 p-5 shadow-2xs hover:border-amber-500 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded-sm border border-slate-200 dark:border-slate-700">
                      {event.category}
                    </span>
                    {event.featured && (
                      <span className="text-[9px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded-sm shadow-2xs">
                        Featured Expo
                      </span>
                    )}
                  </div>

                  {/* Dates Ribbon */}
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-600 dark:text-amber-400 mb-2 font-mono">
                    <CalendarDays className="w-4 h-4" />
                    <span>{event.dates}</span>
                  </div>

                  <h3 className="font-black text-slate-900 dark:text-white text-base sm:text-lg leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                    {event.name}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {event.description}
                  </p>

                  {/* Venue & Statistics */}
                  <div className="space-y-1.5 p-3 bg-slate-50 dark:bg-slate-950 rounded-sm border border-slate-200 dark:border-slate-800 text-xs mb-4">
                    <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-bold">{event.cityCountry}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 pl-5">
                      {event.venue}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800 font-mono">
                      <span>Exhibitors: <strong className="text-slate-900 dark:text-slate-100">{event.exhibitorsCount}</strong></span>
                      <span>Attendees: <strong className="text-slate-900 dark:text-slate-100">{event.attendeesCount}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <button
                    onClick={() => handleToggleCalendar(event.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-bold uppercase text-[11px] tracking-wider transition ${
                      isAdded
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{isAdded ? 'Saved to Calendar' : 'Save Date'}</span>
                  </button>

                  <a
                    href={event.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-black uppercase text-[11px] tracking-wider hover:underline"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
