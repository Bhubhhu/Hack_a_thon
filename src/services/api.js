export const apiService = {
  fetchDashboardData: async () => {
    // Simulating network delay for realistic frontend feel
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          student: {
            name: "Umanshu Manan",
            section: "CSE-A",
            cgpa: 8.4,
            applications: 12,
            reliabilityScore: 94
          },
          companies: {
            available: [
              { id: 1, name: "Intuit", role: "SDE - Backend", matchScore: 94, deadline: "2 Days Left", status: "Auto-Screened", description: "Your Python & FastAPI skills make you a top candidate." },
              { id: 2, name: "Google", role: "Frontend Engineer", matchScore: 78, deadline: "5 Days Left", status: "Open", description: "Good match based on your recent React projects." },
              { id: 3, name: "Microsoft", role: "Cloud Support", matchScore: 85, deadline: "Closes Tomorrow", status: "Open", description: "Strong Azure knowledge aligns well here." },
              { id: 4, name: "Accenture", role: "Associate Software Engineer", matchScore: 90, deadline: "Next Week", status: "Open", description: "High probability based on CGPA and general aptitude." }
            ],
            unavailable: [
              { id: 5, name: "Amazon", role: "Machine Learning Engineer", reason: "Requires CGPA > 9.0 and specific PyTorch portfolio.", type: "academic" },
              { id: 6, name: "Atlassian", role: "SDE 1", reason: "Missed the coding test deadline on Oct 12.", type: "deadline" },
              { id: 7, name: "Uber", role: "Backend Developer", reason: "Requires Go/Golang proficiency which is missing from your profile.", type: "skill" }
            ]
          },
          aiInsights: {
            employer_request: {
              company: "Intuit",
              required_skills: ["Python", "FastAPI", "AI/ML"]
            },
            agent_execution_log: [
              "Scanned 2,400 CSE students. Found 85 potential matches.",
              "Autonomously generated custom API debugging challenge.",
              "Emailed challenge to 85 students. Received 60 submissions.",
              "Evaluated code quality and execution speed."
            ],
            final_shortlist: [
              {
                student_name: "Umanshu Manan",
                match_score: 94,
                agent_verification: "Passed FastAPI debugging challenge in 4 mins. Code architecture was highly efficient.",
                tpc_action: "Approved for final Intuit HR round."
              },
              {
                student_name: "Aman S.",
                match_score: 88,
                agent_verification: "Passed basic Python logic, but AI/ML implementation lacked error handling.",
                tpc_action: "Flagged for TPC upskilling intervention."
              }
            ]
          }
        });
      }, 800);
    });
  }
};
