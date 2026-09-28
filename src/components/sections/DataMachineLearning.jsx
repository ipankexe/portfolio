import React, { useState } from 'react';
import {
  BarChart3,
  Brain,
  Sparkles,
  CheckCircle2,
  Play,
  RotateCcw,
  Activity
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';

export function DataMachineLearning() {
  const { language, t } = useLanguage();
  const [activePlaygroundTab, setActivePlaygroundTab] = useState('pipeline');
  
  // Interactive Pipeline demo state
  const [isCleaned, setIsCleaned] = useState(false);

  // Interactive Metrics Calculator state
  const [tp, setTp] = useState(85);
  const [fp, setFp] = useState(12);
  const [fn, setFn] = useState(8);
  const [tn, setTn] = useState(95);

  const total = tp + fp + fn + tn;
  const accuracy = total > 0 ? (((tp + tn) / total) * 100).toFixed(1) : 0;
  const precision = (tp + fp) > 0 ? ((tp / (tp + fp)) * 100).toFixed(1) : 0;
  const recall = (tp + fn) > 0 ? ((tp / (tp + fn)) * 100).toFixed(1) : 0;
  const f1 = (parseFloat(precision) + parseFloat(recall)) > 0
    ? ((2 * parseFloat(precision) * parseFloat(recall)) / (parseFloat(precision) + parseFloat(recall))).toFixed(1)
    : 0;

  // Conceptual mock mini data points for interactive visualizer
  const barData = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 68 },
    { label: 'Mar', value: 52 },
    { label: 'Apr', value: 88 },
    { label: 'May', value: 74 },
    { label: 'Jun', value: 95 },
  ];

  const scatterPoints = [
    { x: 15, y: 25 }, { x: 28, y: 40 }, { x: 35, y: 32 },
    { x: 50, y: 65 }, { x: 65, y: 58 }, { x: 75, y: 82 },
    { x: 85, y: 78 }, { x: 92, y: 90 }
  ];

  return (
    <section id="data-ml" className="py-20 lg:py-28 relative overflow-hidden" aria-label="Data and Machine Learning Studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('dataMl.badge', 'Emerging Capabilities')}
          title={t('dataMl.title', 'Data & Machine Learning Studio')}
          subtitle={t('dataMl.subtitle', 'Practical competency in preprocessing raw datasets, exploratory analysis, and core machine learning paradigms to solve problems with empirical clarity.')}
        />

        {/* 3 Core Conceptual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Card 1: Data Analysis */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-blue-400 dark:hover:border-blue-500/40 transition-all card-hover-fx group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Data Analysis
                </h3>
                <Badge variant="primary" size="sm">
                  Foundational
                </Badge>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Transforming unstructured raw records into clean, dependable structures to reveal meaningful trends.
              </p>

              <div className="space-y-2.5">
                {[
                  { name: "Data Cleaning", desc: "Missing values, duplicate detection & formatting" },
                  { name: "Data Preparation", desc: "Feature scaling, encoding & normalization" },
                  { name: "Exploratory Data Analysis", desc: "Distribution inspection, correlations & outliers" },
                  { name: "Data Visualization", desc: "Line graphs, categorical bar charts & distributions" },
                  { name: "SQL for Analytics", desc: "Aggregations, GROUP BY queries & filtering" },
                  { name: "Descriptive Statistics", desc: "Central tendency, standard deviations & percentiles" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{item.name}: </span>
                      <span className="text-slate-500 dark:text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Bar Chart Preview */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>Distribution Pattern Demo</span>
                <span>Trend Preview</span>
              </div>
              <div className="flex items-end gap-2 h-16 pt-2">
                {barData.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div
                      className="w-full bg-blue-500/80 hover:bg-blue-400 rounded-t transition-all"
                      style={{ height: `${d.value}%` }}
                    />
                    <span className="text-[9px] font-mono text-slate-400">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Machine Learning */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all card-hover-fx group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Machine Learning
                </h3>
                <Badge variant="indigo" size="sm">
                  Foundations
                </Badge>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Conceptual and practical grounding in learning algorithms, feature engineering, and model validation.
              </p>

              <div className="space-y-2.5">
                {[
                  { name: "ML Fundamentals", desc: "Train/test split, overfitting & generalization" },
                  { name: "Supervised Learning", desc: "Classification & numerical regression concepts" },
                  { name: "Unsupervised Learning", desc: "Clustering techniques & pattern discovery" },
                  { name: "Data Preprocessing", desc: "Standardization, categorical encoding & pipeline" },
                  { name: "Feature Selection", desc: "Correlation screening & dimensional filtering" },
                  { name: "Model Evaluation", desc: "Accuracy, Precision, Recall, F1 & MSE metrics" },
                  { name: "Basic Predictive Modeling", desc: "Iterative testing on structured benchmarks" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{item.name}: </span>
                      <span className="text-slate-500 dark:text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Scatter Plot Visualizer */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>Correlation Scatter Preview</span>
                <span>Regression Line</span>
              </div>
              <div className="relative h-16 w-full bg-slate-50 dark:bg-slate-950/60 rounded-lg p-2 border border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
                <div className="absolute inset-x-2 top-2 bottom-2 border-b border-l border-slate-300 dark:border-slate-700 pointer-events-none" />
                <svg className="w-full h-full">
                  <line x1="10%" y1="80%" x2="90%" y2="20%" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                  {scatterPoints.map((pt, i) => (
                    <circle
                      key={i}
                      cx={`${pt.x}%`}
                      cy={`${100 - pt.y}%`}
                      r="3"
                      className="fill-indigo-500 dark:fill-indigo-400"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: Data-Driven Problem Solving */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-all card-hover-fx group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-900/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Problem Solving
                </h3>
                <Badge variant="cyan" size="sm">
                  Approach
                </Badge>
              </div>

              <div className="p-3.5 mb-5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200/50 dark:border-cyan-900/50 text-xs font-semibold text-cyan-900 dark:text-cyan-200 leading-snug">
                "Using empirical data to discover patterns, optimize application logic, and drive dependable decisions."
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Bridging software systems and analytical data pipelines. Whether calculating child growth trajectories against WHO percentile charts or analyzing database query latency, data provides the foundation for reliable software decisions.
              </p>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Healthcare Data (StuntingCareNet):</span>
                  Classifying z-scores and nutritional growth risk curves directly inside application logic.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Operational Metrics (Kulu Asri POS):</span>
                  Aggregating daily receipts to evaluate shift performance and item sales trends.
                </div>
              </div>
            </div>

            {/* Tabular Schema Preview */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>Tabular Schema Preview</span>
                <span>Tidy Format</span>
              </div>
              <div className="overflow-x-auto text-[10px] font-mono bg-slate-950 text-slate-300 p-2.5 rounded-lg border border-slate-800">
                <div className="grid grid-cols-4 gap-2 text-slate-400 pb-1 border-b border-slate-800 font-semibold">
                  <span>Record_ID</span>
                  <span>Feature_A</span>
                  <span>Feature_B</span>
                  <span>Class</span>
                </div>
                <div className="grid grid-cols-4 gap-2 py-1 text-slate-300">
                  <span className="text-blue-400">#001</span>
                  <span>14.2 kg</span>
                  <span>88.5 cm</span>
                  <span className="text-emerald-400">Normal</span>
                </div>
                <div className="grid grid-cols-4 gap-2 py-1 text-slate-300">
                  <span className="text-blue-400">#002</span>
                  <span>10.1 kg</span>
                  <span>78.2 cm</span>
                  <span className="text-amber-400">At-Risk</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Data & ML Lab Playground */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4" />
                <span>Interactive Demonstration</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                Hands-On Data & ML Simulator
              </h3>
            </div>

            {/* Simulator Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActivePlaygroundTab('pipeline')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer select-none ${
                  activePlaygroundTab === 'pipeline'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t('dataMl.tabPipeline', 'Data Cleaning Pipeline')}
              </button>
              <button
                type="button"
                onClick={() => setActivePlaygroundTab('metrics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer select-none ${
                  activePlaygroundTab === 'metrics'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t('dataMl.tabMatrix', 'Confusion Matrix & Metrics')}
              </button>
            </div>
          </div>

          {/* Simulator Content 1: Pipeline */}
          {activePlaygroundTab === 'pipeline' && (
            <div className="pt-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
                <p>
                  Demonstrates automated handling of dirty datasets (null values, inconsistent date formats, and casing normalization).
                </p>
                <button
                  type="button"
                  onClick={() => setIsCleaned(!isCleaned)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                    isCleaned
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isCleaned ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isCleaned ? 'Reset to Raw Data' : 'Execute Cleaning Pipeline'}</span>
                </button>
              </div>

              {/* Data Table Comparison */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Patient / Record</th>
                      <th className="p-3">Recorded Date</th>
                      <th className="p-3">Weight (kg)</th>
                      <th className="p-3">Height (cm)</th>
                      <th className="p-3">Calculated Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-950/60">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="p-3 text-slate-400">#101</td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-white">
                        {isCleaned ? 'Ananda Rizky' : 'ananda rizky '}
                      </td>
                      <td className="p-3">
                        {isCleaned ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">2024-03-15</span>
                        ) : (
                          <span className="text-amber-500">15/03/2024 (unformatted)</span>
                        )}
                      </td>
                      <td className="p-3">
                        {isCleaned ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">12.4 kg (mean imputed)</span>
                        ) : (
                          <span className="text-rose-500 font-bold">NULL / NaN</span>
                        )}
                      </td>
                      <td className="p-3">
                        {isCleaned ? '84.0 cm' : '84 cm'}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isCleaned ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                        }`}>
                          {isCleaned ? 'Z-Score: -0.4 (Normal)' : 'Pending Calculation'}
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="p-3 text-slate-400">#102</td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-white">
                        {isCleaned ? 'Siti Aisyah' : '  SITI AISYAH'}
                      </td>
                      <td className="p-3">
                        {isCleaned ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">2024-03-15</span>
                        ) : (
                          <span className="text-amber-500">2024.03.15</span>
                        )}
                      </td>
                      <td className="p-3">9.8 kg</td>
                      <td className="p-3">76.5 cm</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isCleaned ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                        }`}>
                          {isCleaned ? 'Z-Score: -2.1 (At-Risk)' : 'Pending Calculation'}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {isCleaned ? 'Pipeline executed: Stripped whitespace, standardized ISO dates, imputed missing records.' : 'Click "Execute Cleaning Pipeline" to run data preparation transformations.'}
                </span>
              </div>
            </div>
          )}

          {/* Simulator Content 2: Confusion Matrix & Metrics */}
          {activePlaygroundTab === 'metrics' && (
            <div className="pt-6 space-y-6">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Adjust values to observe real-time recalculation of classification metrics (Accuracy, Precision, Recall, and F1-Score).
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* 2x2 Matrix */}
                <div className="lg:col-span-6 bg-slate-50 dark:bg-[#070a12] p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 text-center">
                    Confusion Matrix (Binary Classifier)
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                        True Positive (TP)
                      </div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white font-display my-1">{tp}</div>
                      <input
                        type="range"
                        min="20"
                        max="120"
                        value={tp}
                        onChange={(e) => setTp(Number(e.target.value))}
                        className="w-full h-1 bg-emerald-200 rounded-lg cursor-pointer"
                        aria-label="True Positives"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60">
                      <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold uppercase">
                        False Positive (FP)
                      </div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white font-display my-1">{fp}</div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={fp}
                        onChange={(e) => setFp(Number(e.target.value))}
                        className="w-full h-1 bg-rose-200 rounded-lg cursor-pointer"
                        aria-label="False Positives"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60">
                      <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold uppercase">
                        False Negative (FN)
                      </div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white font-display my-1">{fn}</div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={fn}
                        onChange={(e) => setFn(Number(e.target.value))}
                        className="w-full h-1 bg-rose-200 rounded-lg cursor-pointer"
                        aria-label="False Negatives"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
                      <div className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                        True Negative (TN)
                      </div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white font-display my-1">{tn}</div>
                      <input
                        type="range"
                        min="20"
                        max="120"
                        value={tn}
                        onChange={(e) => setTn(Number(e.target.value))}
                        className="w-full h-1 bg-blue-200 rounded-lg cursor-pointer"
                        aria-label="True Negatives"
                      />
                    </div>
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#070a12] border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Accuracy</span>
                    <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-display mt-1">
                      {accuracy}%
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">(TP+TN)/Total</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#070a12] border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Precision</span>
                    <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 font-display mt-1">
                      {precision}%
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">TP/(TP+FP)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#070a12] border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Recall</span>
                    <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-display mt-1">
                      {recall}%
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">TP/(TP+FN)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#070a12] border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">F1-Score</span>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-display mt-1">
                      {f1}%
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Harmonic Mean</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
