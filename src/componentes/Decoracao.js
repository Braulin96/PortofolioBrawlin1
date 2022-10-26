import React, {useState} from 'react';



export default function Decoracao() {
    const[quotes, setQuotes] = useState ("","");
    const [font, setFont] = useState("");
    const set = (quotes, font) => {
      setQuotes(quotes); setFont(font);
    }
    const setStyle = (quotes, font) => {}
    return (
      <div>
        <div>
            <h3 id="quotes" onMouseEnter={() =>set("","- Racism and social inequality.")  }
            onMouseOut ={() =>set("","...")}>"De-cor-Acção"
            </h3>
        </div>
        <div> 
          <p>{font}</p>
        </div> 
      </div>
    )
  }
  