import React, { Component } from 'react';
import { MapContainer, TileLayer, LayerGroup, Circle, useMapEvents } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import MarketList from '../data/market.json';
import MarketLayer from './MarketLayer';


class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      marketData : MarketList,
      click : false,
      coordinates : []
    }
  }

  handleChange = (coordinates) =>{
    console.log('handleChange', coordinates);
    this.setState({coordinates : coordinates});
    console.log(this.state);
  }



render() {
  const fillBlueOptions = { fillColor: 'blue' };
  const center = [47.762727, 7.289758];

  return (
<MapContainer center={[47.762727, 7.289758]} zoom={15} scrollWheelZoom={false} style={{height:500, width:"100%"}} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LayerGroup>
  <Circle center={center} pathOptions={fillBlueOptions} radius={1000} />
  </LayerGroup>

  <LocationMarker  handleChange={this.handleChange} />
  <MarketLayer marketData={this.state.marketData} />

</MapContainer>
      );
   
  }
}

export default Map;
