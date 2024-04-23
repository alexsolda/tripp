import { ReactElement } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    lat: number
    log: number
  }
}

type MapContentProps = {
  places?: Place[]
}

const MapContent = ({ places }: MapContentProps): ReactElement => {
  return (
    <section className="w-full h-[calc(100vh-4.5rem)] bg-red-500">
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map(({ id, name, location }) => {
          const { lat, log } = location
          return (
            <Marker key={`place-${id}`} position={[lat, log]} title={name} />
          )
        })}
      </MapContainer>
    </section>
  )
}

export default MapContent
