import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsCharts = ({ availableCompanies }) => {
  const probData = {
    labels: availableCompanies.map(c => c.name),
    datasets: [{
      label: 'Selection Probability (%)',
      data: availableCompanies.map(c => c.matchScore),
      backgroundColor: '#10b981',
      borderRadius: 4
    }]
  };

  const probOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y}% Probability`
        }
      }
    },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } },
      x: { grid: { display: false } }
    }
  };

  const funnelData = {
    labels: ['Applied (Waiting)', 'Screening Passed', 'Interview Scheduled', 'Rejected'],
    datasets: [{
      data: [5, 3, 2, 2],
      backgroundColor: ['#e7e5e4', '#60a5fa', '#10b981', '#f43f5e'],
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  };

  const funnelOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } }
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 flex-1 flex flex-col min-h-0">
      <h2 className="text-lg font-bold text-stone-900 mb-1">Your Analytics</h2>
      <p className="text-xs text-stone-500 mb-4">Tracking your progress and probabilities.</p>
      
      <div className="grid grid-rows-2 gap-4 flex-1 h-full min-h-0">
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 flex flex-col h-full">
          <h3 className="text-sm font-semibold text-stone-700 mb-2 text-center">Selection Probability (Available Roles)</h3>
          <div className="relative w-full mx-auto flex-1 h-[200px]">
            <Bar data={probData} options={probOptions} />
          </div>
        </div>
        
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 flex flex-col h-full">
          <h3 className="text-sm font-semibold text-stone-700 mb-2 text-center">Application Tracking Funnel</h3>
          <div className="relative w-full mx-auto flex-1 h-[200px]">
            <Doughnut data={funnelData} options={funnelOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsCharts;