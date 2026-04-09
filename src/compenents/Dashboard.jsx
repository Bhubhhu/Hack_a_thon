export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    student: null,
    companies: null,
    aiInsights: null
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const response = await apiService.fetchDashboardData();
        setData(response);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-stone-200 rounded-full mb-4"></div>
          <p className="text-stone-500 font-medium">Loading Dashboard Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <Header student={data.student} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Opportunities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <OpportunityList companies={data.companies} />
          </div>

          {/* Right Column: Analytics & AI Insights (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col h-[800px]">
            <AILogFeed data={data.aiInsights} studentName={data.student.name} />
            <AnalyticsCharts availableCompanies={data.companies.available} />
          </div>

        </div>
      </div>
    </div>
  );
}