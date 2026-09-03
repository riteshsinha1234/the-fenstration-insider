import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  Sun, 
  Wind, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Info,
  RotateCcw,
  Zap
} from 'lucide-react';

export const FacadePerformanceLab: React.FC = () => {
  // Input parameters state
  const [glassType, setGlassType] = useState<'single' | 'double' | 'triple' | 'vig'>('triple');
  const [coatingType, setCoatingType] = useState<'clear' | 'lowE-single' | 'lowE-triple' | 'solar-control'>('lowE-triple');
  const [gasFill, setGasFill] = useState<'air' | 'argon' | 'krypton' | 'vacuum'>('argon');
  const [frameType, setFrameType] = useState<'alu-thermal' | 'upvc-multi' | 'alu-wood' | 'curtain-unitized'>('alu-thermal');
  const [thermalBreakMm, setThermalBreakMm] = useState<number>(38);
  const [facadeAreaSqm, setFacadeAreaSqm] = useState<number>(2500);

  // Physics calculation lookup and algorithm
  const calculateMetrics = () => {
    let ug = 5.8; // base Single float
    let shgc = 0.85;
    let vlt = 0.90;
    let rw = 31; // dB

    // Glass config
    if (glassType === 'single') {
      ug = 5.8;
      shgc = 0.82;
      vlt = 0.88;
      rw = 31;
    } else if (glassType === 'double') {
      ug = gasFill === 'argon' ? 1.3 : gasFill === 'krypton' ? 1.1 : 2.7;
      shgc = 0.60;
      vlt = 0.78;
      rw = 36;
    } else if (glassType === 'triple') {
      ug = gasFill === 'argon' ? 0.6 : gasFill === 'krypton' ? 0.45 : 1.8;
      shgc = 0.48;
      vlt = 0.70;
      rw = 42;
    } else if (glassType === 'vig') {
      ug = 0.40;
      shgc = 0.45;
      vlt = 0.72;
      rw = 39;
    }

    // Coating modification
    if (coatingType === 'lowE-triple') {
      ug = ug * 0.85;
      shgc = shgc * 0.60;
      vlt = vlt * 0.85;
    } else if (coatingType === 'solar-control') {
      shgc = 0.28;
      vlt = 0.52;
    }

    // Frame Uf & Uw calculations
    let uf = 2.0;
    if (frameType === 'alu-thermal') {
      uf = Math.max(1.0, 3.2 - (thermalBreakMm * 0.05));
    } else if (frameType === 'upvc-multi') {
      uf = 1.1;
    } else if (frameType === 'alu-wood') {
      uf = 1.2;
    } else if (frameType === 'curtain-unitized') {
      uf = Math.max(1.1, 2.6 - (thermalBreakMm * 0.035));
    }

    // EN ISO 10077-1 Window U-value: Uw = (Ag*Ug + Af*Uf + Lg*psi) / (Ag + Af)
    // Approximate ratio: 75% glass, 25% frame, psi edge factor 0.05
    const glassRatio = 0.75;
    const frameRatio = 0.25;
    const psiSpacer = 0.045; // W/mK
    const perimeterRatio = 2.6; // approx edge length per sqm

    const uw = (glassRatio * ug) + (frameRatio * uf) + (perimeterRatio * psiSpacer);

    // Energy & Carbon savings comparison against baseline standard (Uw = 2.8 W/m²K)
    const baselineUw = 2.8;
    const deltaU = Math.max(0, baselineUw - uw);
    const degreeHours = 65000; // standard European/North American heating degree hours (Kh)
    const annualKwhSaved = (deltaU * facadeAreaSqm * degreeHours) / 1000;
    const annualCostSavedEur = annualKwhSaved * 0.18; // €0.18 per kWh
    const annualCo2TonsSaved = (annualKwhSaved * 0.35) / 1000; // 0.35 kg CO2 per kWh

    return {
      ug: ug.toFixed(2),
      uf: uf.toFixed(2),
      uw: uw.toFixed(2),
      shgc: shgc.toFixed(2),
      vlt: `${Math.round(vlt * 100)}%`,
      rw: `${rw} dB`,
      annualCostSaved: Math.round(annualCostSavedEur).toLocaleString(),
      annualCo2Saved: annualCo2TonsSaved.toFixed(1)
    };
  };

  const results = calculateMetrics();

  return (
    <section id="performance-lab" className="bg-slate-50 dark:bg-slate-900/90 py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Geometric Balance Tag */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-wider bg-slate-900 text-amber-400 border border-slate-700">
                <Calculator className="w-3 h-3 text-amber-400" />
                Engineering Simulation Lab
              </span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">EN ISO 10077-1 & CWCT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Façade Thermal Physics & Glass $U_w$ Simulator
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Simulate overall thermal transmittance ($U_w$), solar factor ($SHGC$), and annual carbon payback for high-performance building envelopes.
            </p>
          </div>

          <button
            onClick={() => {
              setGlassType('triple');
              setCoatingType('lowE-triple');
              setGasFill('argon');
              setFrameType('alu-thermal');
              setThermalBreakMm(38);
              setFacadeAreaSqm(2500);
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 self-start md:self-auto uppercase tracking-wider"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Standards</span>
          </button>
        </div>

        {/* Interactive Lab Grid (Col 7 Inputs / Col 5 Live Output Matrix) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-850 p-6 rounded-sm border border-slate-200 dark:border-slate-750 shadow-xs space-y-5">
            
            {/* Glass Configuration */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                1. Glazing Configuration ($U_g$ center-of-glass)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'single', label: 'Single Float' },
                  { id: 'double', label: 'Double DGU (28mm)' },
                  { id: 'triple', label: 'Triple TGU (44mm)' },
                  { id: 'vig', label: 'Vacuum VIG (8.3mm)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setGlassType(item.id as any)}
                    className={`py-2 px-2.5 rounded-sm text-xs font-bold transition text-center uppercase tracking-tight border ${
                      glassType === item.id
                        ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Low-E Coating */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                2. Sputtered Low-E Coating & Solar Control
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'clear', label: 'Clear Uncoated' },
                  { id: 'lowE-single', label: 'Single Low-E' },
                  { id: 'lowE-triple', label: 'Triple Silver Low-E' },
                  { id: 'solar-control', label: 'Solar Cool Blue' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCoatingType(item.id as any)}
                    className={`py-2 px-2.5 rounded-sm text-xs font-bold transition text-center uppercase tracking-tight border ${
                      coatingType === item.id
                        ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cavity Gas Fill */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  3. Cavity Inert Gas Fill
                </label>
                <select
                  value={gasFill}
                  onChange={(e) => setGasFill(e.target.value as any)}
                  className="w-full p-2.5 rounded-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold uppercase text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="air">Dehydrated Air (100%)</option>
                  <option value="argon">Argon Gas (90% Fill)</option>
                  <option value="krypton">Krypton Gas (95% Fill)</option>
                  <option value="vacuum">Ultra-High Vacuum (0.001 Pa)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  4. Frame & Mullion System ($U_f$)
                </label>
                <select
                  value={frameType}
                  onChange={(e) => setFrameType(e.target.value as any)}
                  className="w-full p-2.5 rounded-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold uppercase text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="alu-thermal">Thermally Broken Aluminium (75mm)</option>
                  <option value="curtain-unitized">Unitized Curtain Wall Mullion (160mm)</option>
                  <option value="upvc-multi">uPVC Multi-Chamber (88mm 6-Chamber)</option>
                  <option value="alu-wood">Alu-Clad Timber Passivhaus System</option>
                </select>
              </div>
            </div>

            {/* Thermal Break Slider */}
            <div>
              <div className="flex justify-between text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                <span>Polyamide 6.6 GF25 Thermal Break Width</span>
                <span className="font-mono text-amber-600 dark:text-amber-400 font-black">{thermalBreakMm} mm</span>
              </div>
              <input
                type="range"
                min="16"
                max="54"
                step="2"
                value={thermalBreakMm}
                onChange={(e) => setThermalBreakMm(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-200 dark:bg-slate-700 rounded-sm cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>16mm (Standard)</span>
                <span>34mm (High-End)</span>
                <span>54mm (Passivhaus Class A)</span>
              </div>
            </div>

            {/* Façade Area Slider */}
            <div>
              <div className="flex justify-between text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                <span>Building Façade Glazed Envelope Area</span>
                <span className="font-mono text-amber-600 dark:text-amber-400 font-black">{facadeAreaSqm.toLocaleString()} m²</span>
              </div>
              <input
                type="range"
                min="200"
                max="15000"
                step="100"
                value={facadeAreaSqm}
                onChange={(e) => setFacadeAreaSqm(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-200 dark:bg-slate-700 rounded-sm cursor-pointer"
              />
            </div>

          </div>

          {/* Results Output Matrix (5 Cols - Geometric Balance Display) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-sm border border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-black block">
                COMPLIANCE MATRIX EN ISO 10077-1
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Calculated Envelope Efficiency
              </h3>
            </div>

            {/* Main Result: Total Window Uw */}
            <div className="bg-slate-950 p-5 rounded-sm border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Overall System U-Value ($U_w$)
                </span>
                <div className="text-4xl font-mono font-black text-amber-400 mt-1">
                  {results.uw} <span className="text-xs text-slate-400 font-normal">W/m²K</span>
                </div>
              </div>

              <div className="text-right">
                <span className={`inline-block px-2.5 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider ${
                  Number(results.uw) <= 0.80 
                    ? 'bg-emerald-500 text-slate-950' 
                    : Number(results.uw) <= 1.20 
                    ? 'bg-amber-500 text-slate-950' 
                    : 'bg-rose-600 text-white'
                }`}>
                  {Number(results.uw) <= 0.80 ? 'Passivhaus Class' : Number(results.uw) <= 1.20 ? 'LEED Gold Standard' : 'Standard Building Code'}
                </span>
              </div>
            </div>

            {/* Sub-Metrics Grid (Ug, Uf, SHGC, VLT, Acoustic Rw) */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-sm border border-slate-700">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Center-of-Glass $U_g$</span>
                <span className="font-mono font-bold text-white text-base">{results.ug} <span className="text-[10px]">W/m²K</span></span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-sm border border-slate-700">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Frame Profile $U_f$</span>
                <span className="font-mono font-bold text-white text-base">{results.uf} <span className="text-[10px]">W/m²K</span></span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-sm border border-slate-700">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Solar Heat Gain ($SHGC$)</span>
                <span className="font-mono font-bold text-amber-400 text-base">{results.shgc}</span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-sm border border-slate-700">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Acoustic Sound ($R_w$)</span>
                <span className="font-mono font-bold text-sky-400 text-base">{results.rw}</span>
              </div>
            </div>

            {/* Financial & ESG Payback Banner */}
            <div className="p-4 bg-amber-500/10 rounded-sm border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-400">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Annual Energy & Carbon Offset (vs. 2.8 Uw Baseline)
              </div>
              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-slate-300">Annual HVAC Cost Saved:</span>
                <strong className="font-mono text-emerald-400 text-sm">€{results.annualCostSaved} / year</strong>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Annual CO₂ Reduction:</span>
                <strong className="font-mono text-amber-300 text-sm">{results.annualCo2Saved} Metric Tons</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
