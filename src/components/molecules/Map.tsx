import React from 'react'
import MapContainer from '../atoms/MapContainer'
import MainCampus from '../atoms/MainCampus'
import RitchieHall from '../atoms/RitchieHall'
import Professors from '../atoms/Professors'
import Dorms from '../atoms/Dorms'

const Map: React.FC<{
  toggleOverlay: (show: boolean) => void
  setMapLocation: () => void
  setOverlay: () => void
  location: string
}> = ({ location, setMapLocation, toggleOverlay, setOverlay }) => {
  function getMap(location: string) {
    switch (location) {
      case 'main-campus':
        return <MainCampus setMapLocation={setMapLocation} />
      case 'dorms':
        return <Dorms setMapLocation={setMapLocation} />
      case 'professors':
        return <Professors setMapLocation={setMapLocation} />
      case 'ritchie-hall':
        return (
          <RitchieHall
            setMapLocation={setMapLocation}
            setOverlay={setOverlay}
            toggleOverlay={toggleOverlay}
          />
        )
      default:
        return <MainCampus setMapLocation={setMapLocation} />
    }
  }
  return <MapContainer>{getMap(location)}</MapContainer>
}

export default Map
