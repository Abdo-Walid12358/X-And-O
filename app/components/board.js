export default function Box({ shape, setShape, boxes, setBoxes, Html_Shape, Restart_Btn, isFinished, setIsFinished, id }) {
  
  const handleClick = () => {
      if (isFinished)
        return;

    const taken = boxes[id] == '' ? false : true;

    if(!taken){
      shape == "O" ? setShape("X") : setShape("O");
      
      boxes[id] = shape;
      setBoxes(boxes);
    }

    if(boxes[0] == boxes[1] && boxes[1] == boxes[2] && boxes[0] != ''){
      Win();
    }
    if(boxes[3] == boxes[4] && boxes[4] == boxes[5] && boxes[3] != ''){
      Win();
    }
    if(boxes[6] == boxes[7] && boxes[7] == boxes[8] && boxes[6] != ''){
      Win();
    }


    if(boxes[0] == boxes[3] && boxes[3] == boxes[6] && boxes[0] != ''){
      Win();
    }
    if(boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1] != ''){
      Win();
    }
    if(boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[2] != ''){
      Win();
    }


    if(boxes[0] == boxes[4] && boxes[4] == boxes[8] && boxes[0] != ''){
      Win();
    }
    if(boxes[2] == boxes[4] && boxes[4] == boxes[6] && boxes[2] != ''){
      Win();
    }
  };

  function Win(){
    if(Html_Shape.current){
      Html_Shape.current.innerHTML = `<span class="${shape}">${shape}</span> Won`;
    }
    setIsFinished(true);
    if(Restart_Btn.current){
      Restart_Btn.current.style.display = "block";
    }
  }

  var isDraw = true;
  for (var i = 0; i < boxes.length; i++) {
    if(boxes[i] != "X" && boxes[i] != "O"){
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    if (Html_Shape.current) {
      Html_Shape.current.innerHTML = "Draw!";
    }
    setIsFinished(true);
    if(Restart_Btn.current){
      Restart_Btn.current.style.display = "block";
    }
  }

  return (
    <div id={id} onClick={handleClick}>
      <span className={boxes[id]}>{boxes[id] == '' ? '' : boxes[id]}</span>
    </div>
  );
}