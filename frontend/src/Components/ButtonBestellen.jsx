import { useState } from 'react';
import '../components/ButtonBestellen.css';
import { postTicket } from '../api/API';
import { useParams } from 'react-router';



const ButtonBestellen = ({zitplaatsen, totalePrijs, voorstellingDatum}) => {

  const [gebruikerId, setGebruikerId] = useState(3);
  const [aankoopDatum, setAankoopDatum] = useState(new Date().toISOString());
  const {id} =  parseInt(useParams());

   
    const handleBestellen = async () => {
      const ticketData = {
        gebruikerId: gebruikerId,
        voorstellingId: 3,
        zitplaatsen: zitplaatsen,
        totalePrijs: totalePrijs,
        aankoopdatum: aankoopDatum,
        voorstellingsDatum: voorstellingDatum
      };
    
      try {
        const response = await postTicket(ticketData);
        console.log(response);
        console.log("test");
    
        if (response.status === 200) {
          const responseData = response.data;
          if (responseData && responseData.token) {
            alert('Bestelling geplaatst');
            console.log('Bestelling geplaatst with response:', response);
          } else {
            alert('Bestelling niet geplaatst');
          }
        } else {
          alert('Bestelling niet geplaatst');
        }
      } catch (error) {
        console.error("Error:", error);
        alert('Bestelling niet geplaatst');
      }
    };
    
  return (
    <div>
        <button className="button-bestellen" onClick={handleBestellen}>Betalen</button>
    </div>
  )
}

export default ButtonBestellen





