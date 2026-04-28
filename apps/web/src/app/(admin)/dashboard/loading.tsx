export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 bg-vgray-border rounded w-64" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-card p-5 border border-vgray-border">
            <div className="w-10 h-10 bg-vgray-light rounded-lg mb-3" />
            <div className="h-8 bg-vgray-light rounded w-16 mb-2" />
            <div className="h-3 bg-vgray-light rounded w-24" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-card border border-vgray-border h-96" />
    </div>
  )
}
