import { useState, useEffect } from "react";
import "./App.css";

const cardImages = [
  // {"src":"../public/img/cover.png"},
  {
    src: "/img/helmet-1.png",
    matched: false,
  },
  {
    src: "/img/potion-1.png",
    matched: false,
  },
  {
    src: "/img/ring-1.png",
    matched: false,
  },
  {
    src: "/img/scroll-1.png",
    matched: false,
  },
  {
    src: "/img/shield-1.png",
    matched: false,
  },
  {
    src: "/img/sword-1.png",
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled,setdisabled] = useState(false);

  const shuffleCards = () => {
    const shuffleCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCard);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const handleClick = (card) => {
    // console.log("clicked");
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setdisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        // console.log("same");
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((pervTurns) => pervTurns + 1);
        setdisabled(false);
        
        setCards((pervCard) => {
          return pervCard.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        // console.log("card Don't match");
        setTimeout(()=>{ 
          setChoiceOne(null);
          setChoiceTwo(null);
          setdisabled(false);
          setTurns((pervTurns) => pervTurns + 1);},500)
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(()=>{
    shuffleCards();

  },[])

  // console.log(cards);

  return (
    <>
      <div className="App">
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map((card) => {
            return (
              <div className="card" key={card.id}>
                <div className={card === choiceOne || card === choiceTwo || card.matched? "flipped" : "" }>
                  <img src={card.src} alt="card-font" className="front" />
                  <img
                    className="back"
                    src="/img/cover.png"
                    alt="front-card"
                    onClick={() => {
                      if(!disabled){
                        handleClick(card);
                      }
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p>turns : {turns} </p>
      </div>
    </>
  );
}

export default App;
