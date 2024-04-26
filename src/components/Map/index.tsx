import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapContentProps = {
  places?: Place[]
}

const MapContent = ({ places }: MapContentProps): ReactElement => {
  const router = useRouter()

  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
  const MAPBOX_STYLEDID = process.env.NEXT_PUBLIC_MAPBOX_STYLEDID

  const CustomTailLayer = () => {
    return MAPBOX_API_KEY ? (
      <TileLayer
        attribution='&copy; <a href="https://apps.mapbox.com/feedback/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEDID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
    ) : (
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    )
  }

  return (
    <section className="w-full h-[calc(100vh-4.5rem)] bg-black-800">
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
      >
        <CustomTailLayer />
        {places?.map(({ id, name, slug, location }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </section>
  )
}

export default MapContent
