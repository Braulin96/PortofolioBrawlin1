import { useState } from "react";
import Layout from "../componentes/Layout"
import { textsList } from "../assets/textsData"



const Text = () => {

   
    const [portuguese, setPortuguese] = useState(true)
    const [english, setEnglish] = useState(false) // atualiza a pagina

    console.log(textsList);
   
    // funçao para alterar a variavel kriol e portu
    const showEnglish = () => {
     setPortuguese(false)
     setEnglish(true)
    }

    const showPortuguese = () => {
        setPortuguese(true)
        setEnglish(false)
    }
    
         
    return ( 
        // chamar a funçao acima para alterar o texto
        <Layout>
            <div id="poema">
                <div className="buttonWrapper">
                    <div className="buttonInner">
                        <button onClick={showPortuguese}>Portugues</button>
                        <button onClick={showEnglish}>English</button>
                    </div>
                </div>
                {textsList.map((poema) => (
                    <div id="poema">
                        <h3>{poema.title}</h3>
                        {portuguese && <p>{poema.portuguese}</p>
                        }
                        
                        {english && <p>{poema.English}</p>}
                    </div>    
                ))}
            
            </div>
        </Layout>
    );
}
 
export default Text ;