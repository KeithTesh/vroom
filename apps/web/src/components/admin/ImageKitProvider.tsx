'use client'
import { IKContext } from 'imagekitio-react'

export default function ImageKitProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <IKContext
      publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!}
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
      authenticator={async () => {
        const res = await fetch('/api/imagekit-auth')
        return res.json()
      }}
    >
      {children}
    </IKContext>
  )
}
