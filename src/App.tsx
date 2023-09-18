import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Modal from "./components/Modal";

export default function App(){
    
    
const showModal = false;

    return(
    <>
    <main>
        <div className="grid" data-id="grid">

            <div className="turn" data-id="turn">
                <i className="fa-solid fa-x turquoise"></i>
                <p className="turquoise">Player 1, you're up</p>
            </div>


            <Menu onAction={(action) => console.log(action)}/>


            {[1,2,3,4,5,6,7,8,9].map((squareId) => {
                return(
                    <div key={squareId} className="square shadow">
                        <i className="fa-solid fa-x turquoise"></i>
                    </div>
                );
            })}


            <div className="score shadow" style={{ backgroundColor: "var(--turquoise)" }}>
              <p>Player 1</p>
              <span data-id="p1-wins">0 Wins</span>
            </div>
            <div className="score shadow" style={{ backgroundColor: "var(--light-gray)" }}>
              <p>Ties</p>
              <span data-id="ties">0</span>
            </div>
            <div className="score shadow" style={{ backgroundColor: "var(--yellow)" }}>
              <p>Player 2</p>
              <span data-id="p2-wins">0 Wins</span>
            </div>
        </div>
    </main>

    <Footer />

    {showModal && <Modal message="Player 1 wins!"/>}
      
    </>);
} 