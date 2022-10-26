import React, {useState} from 'react';

export default function ObraDeArte() {
  const[quotes, setQuotes] = useState ("");
  const [font, setFont] = useState("...");
  const set = (quotes, font) => {
    setQuotes(quotes); setFont(font);
  }
  const setStyle = (quotes, font) => {}
  return (
    <div>
      <div>
        <h3 id="quotes" onMouseEnter={() =>set("quotes","- Domestic violence vs self-love")}
         onMouseOut ={() =>set("","...")}>"Bu corpo é um Obra de Arte" 
        </h3> 
      </div>
      <div>
        <p>{font}</p>
      </div>
      
    </div>
  )
}
