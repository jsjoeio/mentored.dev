import React from 'react'
import MapContainer from '../atoms/MapContainer'
import MainCampus from '../atoms/MainCampus'
import RitchieHall from '../atoms/RitchieHall'

const Map: React.FC<{
  toggleOverlay: (show: boolean) => void
  setMapLocation: () => void
  location: string
}> = ({ location, setMapLocation, toggleOverlay }) => {
  function getMap() {
    if (location === 'main-campus')
      return <MainCampus setMapLocation={setMapLocation} />
    else if (location === 'ritchie-hall')
      return (
        <RitchieHall
          setMapLocation={setMapLocation}
          toggleOverlay={toggleOverlay}
        />
      )
    else return <MainCampus setMapLocation={setMapLocation} />
  }
  return <MapContainer>{getMap()}</MapContainer>
}

export default Map
