import React, {useState} from "react";
import "./index.css"

function App() {

// const [input, setInput] = useState("");
  
let bricks1 = [1, 0, 1] //result should be 1
let bricks2 = [3, 0, 2] //result should be 2
let bricks3 = [5, 0, 7] //result should be 5
let bricks4 = [2, 0, 9] // result should be 2
let bricks5 = [3, 0, 7, 0, 2] // result should be 5
let bricks6 = [8, 2, 6, 0, 2] // result should be 5

function spotsFilledByWater(bricks5, spaceWithin){

    // set the water amount stored that can be changed
    let water = 0;

    // loop through the brick number sequence from within the first number and last number
    for (let i = 1; i < spaceWithin - 1 ; i++){
        
        // this will loop through the brick sequence and find the highest number within the first number starting from the left 
        let left = bricks5[i];
        for(let j = 0; j < i; j++){

            left = Math.max(left, bricks5[j]);
        
        }

        // this will loop through the brick sequence and find the highest number within the last number start from the right
        let right = bricks5[i];
        for(let j = i + 1; j < spaceWithin; j++){

            right= Math.max(right, bricks5[j]);
        
        }
        // This changes the intial value of the water sequence to the minimum of the number that was looped through
        water +=Math.min(left, right) - bricks5[i];

    }
    // 
    return water

}

// 
let spaceWithin = bricks5.length;

console.log(spotsFilledByWater(bricks5, spaceWithin));

// function handleInput(event){
//   const newValue = event.target.value;
//   setInput(newValue);
// }

// function handleAddBricks(){
//   bricks5.push(input)
// }

function handleBricks5(){
  document.getElementById("bricks5").innerText = ("The brick sequence is ") + bricks5 +"."+ " This can hold " + spotsFilledByWater(bricks5, spaceWithin) + " bricks of water."
}

  return (
    <div className="App">
      <header className="App-header">
        <p id="bricks5">
        Click the button to get the brick sequence and see how much water can be stored.
        </p>
        <button className="btnBrick5" onClick={handleBricks5} type="submit">Get Bricks & Water Results</button>
       

        {/* <br/>
        <br/>
       Want to add bricks?
       <br/>
       <br/>
       <input onChange={handleInput} type="text" value={input}></input>
       <br/>
       <br/>
       <button onClick={handleAddBricks}>Add Bricks</button> */}
      </header>
    </div>
  );
}

export default App;
