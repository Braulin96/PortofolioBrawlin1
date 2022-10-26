//import { useState } from "react"; /*to allow making uptadates by using onclick*/
import Layout from "../componentes/Layout";
import Footer from "../componentes/Footer";
import Poesia from "../componentes/Poesia";
import Decoracao from "../componentes/Decoracao";
import ObraDeArte from "../componentes/ObraDeArte";

const Slam = () => {
        
    return (  
        <Layout>

                <div id="slam">
                  
                    <div id="primeiroIframe">
                        <Poesia />
                        <div>  
                            <iframe width="513" height="289" src="https://www.youtube.com/embed/f3KBHWdbUys" title="Skola Di Vida - Brawlin Pires, LTI STUDIO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <ObraDeArte />
                        <div>
                            <iframe width="630" height="300" src="https://www.youtube.com/embed/EETbSg0Z81s" title="Bu corpo é um obra di arte" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Decoracao />
                        <div>
                            <iframe width="636" height="300" src="https://www.youtube.com/embed/JY7F2dSS7EU" title="Di-Cor-Acção" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>  
                    </div>
                    <div id="PhraseSlam">
                        <h2>
                            Irony of life <br />If there is the beautiful is because there are those who think he is ugly,<br /> There is only the intelligent, because the "idiot" doubts himself,<br /> The impossible prevails if you do nothing to change that concept,<br /> We quarrel with our neighbor and cry for world peace, <br /> It will be a wrong path, if everything is right in that right I don't see myself,<br /> the pocket full remains poor, and he who has it empty has become a slave,<br /> Poor only exist because those who have little keep enriching their opposite,<br /> We blame our roots but ignorance doesn't come from the cradle,<br /> Yet you may not be able to change ours the world but think of a better one for your grandson! 
                        </h2>
                    </div>
                 
                </div>
               <p id="YoutubeChannel"><a href="https://www.youtube.com/channel/UCshZRErqDugCAVhc3w4ugfA" target="_blank" rel="noreferrer" >Acess my Youtube channel!</a></p>
              
        <Footer/>
        </Layout>
        
    );
    
}

export default Slam ;