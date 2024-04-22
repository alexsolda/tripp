import Header from 'components/Header'
import dynamic from 'next/dynamic'
const MapContent = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Header />
      <MapContent />
    </main>
  )
}
