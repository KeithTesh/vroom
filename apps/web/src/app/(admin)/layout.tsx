import AdminSidebar from '@/components/admin/AdminSidebar'
import ImageKitProvider from '@/components/admin/ImageKitProvider'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ImageKitProvider>
      <div className="flex min-h-screen bg-vgray-light">
        <AdminSidebar />
        <main className="flex-1 md:ml-56 p-4 pt-16 md:p-8 md:pt-8">
          {children}
        </main>
      </div>
    </ImageKitProvider>
  )
}
