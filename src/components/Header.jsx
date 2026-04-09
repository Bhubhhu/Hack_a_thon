import React from 'react';

const Header = ({ student }) => {
  const getReliabilityColor = (score) => {
    if (score > 90) return "text-emerald-600";
    if (score > 75) return "text-amber-500";
    return "text-rose-600";
  };

  return (
    <header className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">{student.name}</h1>
        <p className="text-stone-500 text-sm mt-1">
          Section: <span className="font-medium text-stone-700">{student.section}</span> | 
          CGPA: <span className="font-medium text-stone-700">{student.cgpa}</span>
        </p>
      </div>
      
      <div className="flex gap-4 w-full md:w-auto">
        <div className="bg-stone-100 rounded-xl p-4 flex-1 text-center">
          <div className="text-3xl font-bold text-stone-800">{student.applications}</div>
          <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Total Applications</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex-1 text-center relative group cursor-help">
          <div className={`text-3xl font-bold ${getReliabilityColor(student.reliabilityScore)}`}>
            {student.reliabilityScore}%
          </div>
          <div className="text-xs text-emerald-600 uppercase tracking-wider mt-1">Reliability Score</div>
          <div className="absolute hidden group-hover:block w-48 bg-stone-800 text-white text-xs rounded p-2 top-full right-0 mt-2 z-10 text-left">
            Based on past interview attendance and offer acceptance history. High score prioritizes you for top tier companies.
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
