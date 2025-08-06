export function ImpactCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary-600">12,847</div>
        <div className="text-sm text-slate-600">Routes Cleaned</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary-600">2,156</div>
        <div className="text-sm text-slate-600">Active Users</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary-600">45,920</div>
        <div className="text-sm text-slate-600">Items Collected</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary-600">127</div>
        <div className="text-sm text-slate-600">Communities</div>
      </div>
    </div>
  )
}