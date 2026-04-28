export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-vgray-light rounded-card overflow-hidden animate-pulse">
              <div className="aspect-[16/10] bg-vgray-border" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-vgray-border rounded w-3/4" />
                <div className="h-3 bg-vgray-border rounded w-1/2" />
                <div className="h-6 bg-vgray-border rounded w-1/3 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
