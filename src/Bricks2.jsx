import React from 'react'

function Bricks2() {
 
    let bricks2 = [3, 0, 2] //result should be 2;

    function spotsFilledByWater(bricks2, spaceWithin){
  
        // set the water amount stored that can be changed
        let water = 0;
    
        // loop through the brick number sequence from within the first number and last number
        for (let i = 1; i < spaceWithin - 1 ; i++){
            
            // this will loop through the brick sequence and find the highest number within the first number starting from the left 
            let left = bricks2[i];
            for(let j = 0; j < i; j++){
    
                left = Math.max(left, bricks2[j]);
            
            }
    
            // this will loop through the brick sequence and find the highest number within the last number start from the right
            let right = bricks2[i];
            for(let j = i + 1; j < spaceWithin; j++){
    
                right= Math.max(right, bricks2[j]);
            
            }
            // This changes the intial value of the water sequence to the minimum of the number that was looped through
            water +=Math.min(left, right) - bricks2[i];
    
        }
        // 
        return water
    
    }
    
    // 
    let spaceWithin = bricks2.length;
    
    //Check brickfilled sequence in log;
    console.log(spotsFilledByWater(bricks2, spaceWithin));
 
    function handleBricks2(){
        document.getElementById("bricks2").innerText = ("The brick sequence is ") + bricks2 +"."+ " This can hold " + spotsFilledByWater(bricks2, spaceWithin) + " bricks of water."
      }

    return (
    <div>
    <p id="bricks2">
    Click the button to get the brick sequence and see how much water can be stored.
    </p>
    <button className="btnBrick" onClick={handleBricks2} type="button">
    Get Bricks & Water Results
    </button>
    <br/>
    <br/>
    </div>
  )
}

export default Bricks2