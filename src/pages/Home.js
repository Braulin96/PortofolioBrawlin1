import Layout from "../componentes/Layout";
import homeImage from "../componentes/images/slamedit.png"
/*import About from "../componentes/About";
import Perfil from "../componentes/Perfil";
import Poesia from "../componentes/Poesia";*/

const Home = () => {
  return (   
    <Layout > 
      <div className="homeGeral"> 
      
        <div id="details">
          <ul>
            <h2>Brawlin Pires</h2>
            <h3>Front-End Developer</h3>
            <p>"Walking in the south doesn't stop me from being northern"</p>
        </ul>
        </div>
        <div id="homepageImage">
          <img id="Homepage" src={homeImage} alt="perfil" />
        </div>
       
      </div>  
    </Layout> 
  );
}
export default Home;