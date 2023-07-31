import Description from "../Description/Description";
import Header from "../Header/Header";
import Image from "../Image/Image";
import Location from "../Location/Location";
import Name from "../Name/Name";
import Numbers from "../Numbers/Numbers";
import Projects from "../Projects/Projects";
import Social from "../Social/Social";
import Title from "../Title/Title";
import "./Landing.css"




export default function Landing() {
    return (
        
        <div className="landing">
            <div className="fila1">
                <div className="fila1Columna1">
                    <Title/>
                    <Numbers/>
                </div>

                <div className="fila1Columna2">
                    <div className="fila1Columna2Fila1">
                        <Header/>
                    </div>
                    <div className="fila1Columna2Fila2">
                        <div className="fila1Columna2Fila2Columna1">
                            <Image/>
                        </div>
                        
                        <div className="fila1Columna2Fila2Columna2">
                            <Name/>
                            <Location/>
                            <Social/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fila2">
                <div className="fila2Columna1">
                    <Projects/>
                </div>

                <div className="fila2Columna2">
                    <Description/>
                </div>

            </div>
        </div>
        
    );
}