function ProgressCard({ dailyProgress = 75, weeklyProgress = 50, dailyLeft = 2, weeklyLeft = 4 }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Progress</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="w-16 h-16 bg-gray-200 rounded-full mx-auto"></div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between mb-3">
            <span className="font-medium text-gray-700">Daily Challenges</span>
            <span className="text-sm text-gray-500">{dailyLeft} remaining</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-300" 
              style={{ width: `${dailyProgress}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-3">
            <span className="font-medium text-gray-700">Weekly Challenges</span>
            <span className="text-sm text-gray-500">{weeklyLeft} remaining</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
              style={{ width: `${weeklyProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard 