import Card from 'components/Card'
import ContentWrapper from 'components/ContentWrapper'
import Header from 'components/Header'
import { MapContentProps } from 'components/Map'
import { useViewOptions } from 'context/viewOptions'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
const MapContent = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapContentProps): ReactElement => {
  const { viewType } = useViewOptions()

  return (
    <main
      className={`${
        viewType === 'list' ? 'min-h-screen' : 'h-screen'
      }  w-screen`}
    >
      <Header />
      {viewType === 'map' ? (
        <MapContent places={places} />
      ) : (
        <ContentWrapper className="mt-8">
          <div className="grid grid-cols-3 gap-4">
            {places?.map((place) => (
              <Card key={`place-${place.id}`} />
            ))}
          </div>
        </ContentWrapper>
      )}
    </main>
  )
}

export default HomeTemplate
