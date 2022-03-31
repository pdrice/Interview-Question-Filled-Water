import React from 'react'

function Bricks1() {

    let bricks1 = [1, 0, 1] //result should be 1

    function spotsFilledByWater(bricks1, spaceWithin){
  
        // set the water amount stored that can be changed
        let water = 0;
    
        // loop through the brick number sequence from within the first number and last number
        for (let i = 1; i < spaceWithin - 1 ; i++){
            
            // this will loop through the brick sequence and find the highest number within the first number starting from the left 
            let left = bricks1[i];
            for(let j = 0; j < i; j++){
    
                left = Math.max(left, bricks1[j]);
            
            }
    
            // this will loop through the brick sequence and find the highest number within the last number start from the right
            let right = bricks1[i];
            for(let j = i + 1; j < spaceWithin; j++){
    
                right= Math.max(right, bricks1[j]);
            
            }
            // This changes the intial value of the water sequence to the minimum of the number that was looped through
            water +=Math.min(left, right) - bricks1[i];
    
        }
        // 
        return water
    
    }
    
    // 
    let spaceWithin = bricks1.length;
    
    //Check brickfilled sequence in log;
    console.log(spotsFilledByWater(bricks1, spaceWithin));

    function handleBricks1(){
        document.getElementById("bricks1").innerText = ("The brick sequence is ") + bricks1 +"."+ " This can hold " + spotsFilledByWater(bricks1, spaceWithin) + " bricks of water."
      }

  return (
    <div> 
    <p id="bricks1">
    Click the button to get the brick sequence and see how much water can be stored.
    </p>
    <button className="btnBrick5" onClick={handleBricks1} type="button">
    Get Bricks & Water Results
    </button>
    <br/>
    <br/></div>
  )
}

export default Bricks1