import React from 'react'
import Tilesview from './TilesView'
const AllAudioBooks = (props) => {
  return (
    <div>
      
        <Tilesview title="All Audiobooks" sort={1} data={props.data}/>
        
    </div>
  )
}

export default AllAudioBooks