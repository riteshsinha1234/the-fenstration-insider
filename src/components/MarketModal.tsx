import React from 'react';
import { 
  X, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  Calendar, 
  BarChart2, 
  Info,
  ShieldAlert
} from 'lucide-react';
import { MarketItem } from '../types';

interface MarketModalProps {
  item: MarketItem | null;
  onClose: () => void;
}

export const MarketModal: React.FC<MarketModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs p-4 flex items-center justify-center animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-sm max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 bg-slate-950 text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-sm">
                {item.symbol}
              </span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.category}</span>
            </div>
            <h3 className="font-black text-lg text-white">
              {item.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-sm bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm">
          
          {/* Main Price & Delta */}
          <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-wider block">Current Benchmark Price</span>
              <div className="text-3xl font-mono font-black text-slate-900 dark:text-white mt-0.5">
                {item.price}
              </div>
              <span className="text-[11px] text-slate-500 font-mono">{item.unit}</span>
            </div>

            <div className="text-right">
              <span className={`inline-flex items-center gap-1 font-mono font-black text-sm px-2 py-1 rounded-sm ${
                item.isPositive 
                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300' 
                  : 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-300'
              }`}>
                {item.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{item.change} ({item.changePercent}%)</span>
              </span>
              <span className="text-[10px] text-slate-400 block mt-1 font-mono">Updated {item.lastUpdated}</span>
            </div>
          </div>

          {/* 24-Hour Range Bar */}
          <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-sm border border-slate-200 dark:border-slate-800 space-y-1.5 font-mono">
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>24h Low: <strong>{item.low24h}</strong></span>
              <span>24h High: <strong>{item.high24h}</strong></span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-sm overflow-hidden relative">
              <div className="bg-amber-500 h-full rounded-sm w-3/5 ml-auto"></div>
            </div>
          </div>

          {/* Procurement Advisory Note */}
          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-sm border border-amber-200 dark:border-amber-800 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-black text-amber-900 dark:text-amber-300 block mb-1 flex items-center gap-1 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              Fenestration Procurement Advisory
            </span>
            <p>
              Fabricators and facade contractors are advised to hedge bilateral extrusion billet contracts for Q4 deliveries against volatile natural gas and CBAM tariff impacts.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2 bg-slate-900 dark:bg-slate-800 text-white font-black uppercase text-xs rounded-sm hover:bg-slate-800"
          >
            Close Commodity View
          </button>

        </div>

      </div>
    </div>
  );
};
