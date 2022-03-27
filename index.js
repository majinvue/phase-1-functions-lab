// Code your solution in this file!
const HQ = 42;
//Using 42nd street as the HQ number
function distanceFromHqInBlocks(street){
    return Math.abs(street - HQ);
//Subrtract the street number to the HQ number
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264;
//Multiply street number to 264, which is the distance of each block in Manhattan
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance < 350) return 0;
    if(distance > 2400) return 'cannot travel that far';
    if(distance > 400 && distance <=2000){
        return ((distance - 400) * 2)/100;
      } else {
        return 25;
    }
}