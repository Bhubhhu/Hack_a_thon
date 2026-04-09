import React, { useState } from 'react';

const OpportunityList = ({ companies }) => {
  const [activeTab, setActiveTab] = useState('available');

  const renderAvailableCard = (item) => {
    let scoreColor = "text-stone-600 bg-stone-100";
    if (item.matchScore >= 90) scoreColor = "text-emerald-700 bg-emerald-100";
    else if (item.matchScore >= 75) scoreColor = "text-emerald-600 bg-emerald-50";

    return (
      <div key={item.id} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
            <p className="text-sm font-medium text-stone-700">{item.role}</p>
            <p className="text-xs text-stone-500 mt-2">{item.description}</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${scoreColor} mb-2 border border-stone-100`}>
              {item.matchScore}% Selection Prob.
            </span>
            <div className="text-xs text-amber-600 font-medium">⏳ {item.deadline}</div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center">
          <span className="text-xs font-medium text-stone-500">Status: {item.status}</span>
          <button className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  const renderUnavailableCard = (item) => {
    let icon = '❌'; 
    let typeClass = "bg-rose-50 text-rose-700 border-rose-100";
    
    if (item.type === 'deadline') { icon = '⏰'; typeClass = "bg-amber-50 text-amber-700 border-amber-100"; }
    if (item.type === 'academic') { icon = '📚'; }

    return (
      <div key={item.id} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm opacity-75">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-stone-500">{item.name}</h3>
            <p className="text-sm font-medium text-stone-500">{item.role}</p>
          </div>
          <div className="text-right">
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${typeClass} border`}>
              <span>{icon}</span> Blocked
            </span>
          </div>
        </div>
        <div className="mt-3 bg-stone-50 p-3 rounded border border-stone-100">
          <p className="text-xs text-stone-600"><span className="font-bold">Reason:</span> {item.reason}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col h-[800px]">
      <div className="p-6 border-b border-stone-100">
        <h2 className="text-lg font-bold text-stone-900 mb-2">Drive Eligibility & Opportunities</h2>
        <p className="text-sm text-stone-500">Stop applying randomly. See exactly where you stand based on your profile and skills.</p>
        
        <div className="flex space-x-2 mt-4">
          <button 
            onClick={() => setActiveTab('available')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none ${activeTab === 'available' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            Available for You
          </button>
          <button 
            onClick={() => setActiveTab('unavailable')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none ${activeTab === 'unavailable' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            Unavailable / Blocked
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50/50 custom-scroll">
        {companies[activeTab].length === 0 ? (
          <div className="text-center text-stone-500 py-8">No companies in this category.</div>
        ) : (
          companies[activeTab].map(item => 
            activeTab === 'available' ? renderAvailableCard(item) : renderUnavailableCard(item)
          )
        )}
      </div>
    </section>
  );
};

export default OpportunityList;
