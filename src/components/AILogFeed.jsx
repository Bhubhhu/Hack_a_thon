import React from 'react';

const AILogFeed = ({ data, studentName }) => {
  const myResult = data.final_shortlist.find(s => s.student_name === studentName);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 flex-shrink-0">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <span className="text-xl">🤖</span> Autonomous Screenings
          </h2>
          <p className="text-xs text-stone-500 mt-1">Live results from Employer AI Agents</p>
        </div>
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded font-semibold animate-pulse">Live</span>
      </div>

      <div className="bg-stone-50 rounded-lg p-4 border border-stone-200 text-sm">
        <div className="mb-3 border-b border-stone-200 pb-3">
          <span className="font-bold text-stone-800">Company:</span> {data.employer_request.company} <br />
          <span className="font-bold text-stone-800">Searching for:</span>{' '}
          <span className="text-xs bg-stone-200 px-1 rounded">{data.employer_request.required_skills.join(', ')}</span>
        </div>
        
        <div className="space-y-1 mb-4 text-xs font-mono text-stone-500">
          <div className="font-semibold text-stone-700 font-sans mb-1">Agent Execution Log:</div>
          {data.agent_execution_log.map((log, index) => (
            <div key={index}>{`> ${log}`}</div>
          ))}
        </div>

        {myResult && (
          <div className="bg-emerald-50 border border-emerald-200 rounded p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-emerald-800">Your Result</span>
              <span className="bg-emerald-200 text-emerald-900 text-xs px-2 py-0.5 rounded font-bold">Match: {myResult.match_score}</span>
            </div>
            <p className="text-xs text-emerald-700 italic">"{myResult.agent_verification}"</p>
            <div className="mt-2 text-xs font-bold text-stone-800 border-t border-emerald-100 pt-2">
              TPC Action: <span className="text-emerald-600">{myResult.tpc_action}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AILogFeed;
