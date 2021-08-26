import './App.css';
import Spot from './Spot.js';

var vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]


function App() {

  var cards2= vacationSpots.map((locations,index)=>
    <div key={locations.name + "-" + index}>
    <Spot location={locations}/>
    </div>
  )
  
  return (
    <div className="container">
      <h1>Vacation Spots</h1>
      <div className="listContainer">
      {cards2}
      </div>
    </div>
  )
}
export default App;




