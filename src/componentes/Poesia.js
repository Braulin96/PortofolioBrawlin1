import React, {useState} from 'react'

export default function Poesia() {
    const[quotes, setQuotes] = useState ("");
    const [font, setFont] = useState("");
    const set = (quotes, font) => {
      setQuotes(quotes); setFont(font);
    }
    const setStyle = (quotes, font) => {}
    return (
      <div>
          <div>
            <h3 id="quotes" onMouseEnter={() =>set("","- Social problems such as drug and alcohol use.")}
            onMouseOut ={() =>set("","... ")}>"Skola di vida" </h3> 
           </div>
          <div><p>{font}</p>
          </div>
      </div>
    )
  }
  
