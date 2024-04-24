import Header from 'components/Header'
import { MapContentProps } from 'components/Map'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
const MapContent = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapContentProps): ReactElement => {
  return (
    <main className="h-screen w-screen">
      <Header />
      <MapContent places={places} />
    </main>
  )
}

export default HomeTemplate
