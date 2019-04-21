import React from 'react'
import MapContainer from '../atoms/MapContainer'
import MainCampus from '../atoms/MainCampus'
import RitchieHall from '../atoms/RitchieHall'

const Map: React.FC<{
  setMapLocation: () => void
  location: string
}> = ({ location, setMapLocation }) => {
  function getMap() {
    if (location === 'main-campus')
      return <MainCampus setMapLocation={setMapLocation} />
    else if (location === 'ritchie-hall')
      return <RitchieHall setMapLocation={setMapLocation} />
    else return <MainCampus setMapLocation={setMapLocation} />
  }
  return <MapContainer>{getMap()}</MapContainer>
}

export default Map
