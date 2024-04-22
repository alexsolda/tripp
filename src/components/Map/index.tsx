import { ReactElement } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapContent = (): ReactElement => {
  return (
    <section className="w-full h-[calc(100vh-5.5rem)] bg-red-500">
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default MapContent
