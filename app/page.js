'use client';
import { useRef, useState } from "react";
import Box from "./components/board"

export default function Main() {
  const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', '']);
  const [shape, setShape] = useState("O");
  const [isFinished, setIsFinished] = useState(false);

  const Html_Shape = useRef(null);
  const Restart_Btn = useRef(null);

  if(Restart_Btn.current){
    Restart_Btn.current.onclick = function(){
      window.location.reload();
    }
  }

  return (
    <section className="main">
        <div className="game-board">
          {boxes.map((box, index) => {
            return <Box 
            key={index}
            shape={shape}
            setShape={setShape}
            boxes={boxes}
            setBoxes={setBoxes}
            Html_Shape={Html_Shape}
            Restart_Btn={Restart_Btn}
            isFinished={isFinished}
            setIsFinished={setIsFinished}
            id={index}
            />;
          })}
        </div>
        {boxes == []}
        <span className="shape" ref={Html_Shape}>The Shape Is <span className={shape}>{shape}</span></span>
        <button ref={Restart_Btn} className="restart-button">Restart</button>
    </section>
  )
}