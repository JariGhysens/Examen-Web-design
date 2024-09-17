import React, { useState } from 'react';
import '../components/SeatsComponent.css';
import ButtonBestellen from './ButtonBestellen';

const SeatsComponent = () => {
  const rows = 5; // aantal rijen
  const columns = 10; // aantal kolommen

  const initialGrid = Array.from({ length: rows }, () => Array(columns).fill(0));
  const [grid, setGrid] = useState(initialGrid);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleSeat = (rowIndex, columnIndex) => {
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][columnIndex] = 1 - updatedGrid[rowIndex][columnIndex];

    const seatNumber = rowIndex * columns + columnIndex + 1;
    const updatedSelectedSeats = [...selectedSeats];

    if (updatedGrid[rowIndex][columnIndex]) {
      updatedSelectedSeats.push(seatNumber);
    } else {
      const seatIndex = updatedSelectedSeats.indexOf(seatNumber);
      if (seatIndex !== -1) {
        updatedSelectedSeats.splice(seatIndex, 1);
      }
    }

    setGrid(updatedGrid);
    setSelectedSeats(updatedSelectedSeats);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const alleStoelen = selectedSeats.join(', ');
  const totalePrijs  = selectedSeats.length * 12;

  return (
    <div className="seats-screen">
      <h1 className="seats-title">Kies een dag</h1>

      {/* Datumselectie */}
      <div className="date-selection">
      <button className='date-button'
        onClick={() => handleDateSelect(new Date().toISOString())}
        style={{
          backgroundColor: selectedDate === new Date().toISOString() ? 'blue' : 'white',
          color: selectedDate === new Date().toISOString() ? 'white' : 'rgb(38, 80, 115)'
        }}
>
  {new Date().toLocaleDateString()}
</button>

       
      </div>

      {/* Stoelgrid */}
      {selectedDate && (
        <>
        
        <h1 className="seats-title">Kies uw stoel(en)</h1>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cell, columnIndex) => (
                <div
                  key={columnIndex}
                  onClick={() => toggleSeat(rowIndex, columnIndex)}
                  style={{
                    border: '1px solid black',
                    width: '10%',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: grid[rowIndex][columnIndex] ? 'gray' : 'green',
                    cursor: 'pointer',
                  }}
                >
                  {rowIndex * columns + columnIndex + 1}
                </div>
              ))}
            </div>
          ))}
          <hr  className='line'/>
          <h2>Scherm</h2>
                  
          <div className="selected-seats">
            <h2>Geselecteerde stoelen: {alleStoelen}</h2>
            <h2 className="selected-seats">Totale prijs: € {totalePrijs}</h2>
            <ButtonBestellen zitplaatsen={alleStoelen} totalePrijs={totalePrijs} voorstellingDatum={selectedDate}  />
          </div>
          
        </>
      )}
    </div>
  );
};

export default SeatsComponent;