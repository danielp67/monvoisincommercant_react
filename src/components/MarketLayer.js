import React from 'react';
import { CircleMarker, LayerGroup, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { blackIcon } from './Icon';


  const MarketLayer = (props) => {
    const marketColor = ['#462410', "#ae3d8f", "#d60000", "#ccb217", "#149e00", "#0241cc", "#4c4c4c", "#19bab6"];
    const rows = props.marketData.map((row, index) => {
      console.log(row);
      console.log(marketColor[row.rank]);

    const center = row.position === null ? null : Object.values(row.position);
    const fillBlueOptions = { fillColor: 'red' };
      return (
        <CircleMarker center={center} pathOptions={{fillColor : marketColor[row.rank]}} radius={5} stroke={true}>

        <Marker position={row.position} icon={ blackIcon } key={index}>
         <Popup> <div style={{backgroundColor:marketColor[row.rank], height:"10px", width:"10px", display:"inline-block", marginRight:"5px"  }}></div>
        Magasin : {row.name}<br/>
        Catégorie : {row.category}<br/>
        Adresse : {row.address}<br/>
        Description : {row.address}<br/>
        <a href={row.address} >Site internet</a><br/>
        </Popup>
      </Marker>
      </CircleMarker>
      )
    })
  
    return   <LayerGroup>
          {rows} 
    </LayerGroup>

  }
  

export default MarketLayer;