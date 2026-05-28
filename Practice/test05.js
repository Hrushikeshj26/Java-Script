//objects


// 1. Object Iteration (Object.keys, Object.values, Object.entries)
// Expected Behavior:
// calculateTotalSize(systemPackages);
// Should return: 252


const systemPackages = {
  firefox: 210,
  git: 35,
  htop: 5,
  neofetch: 2
};


const calculateTotalSize = () => {
    let values = Object.values(systemPackages);
    let totalSize = values.reduce( (acc, curr) => {
        return acc + curr;
    },0)
    return console.log(totalSize);
    
}

calculateTotalSize();


//2. Object Methods and this Context
// Expected Behavior:
// gamingLaptop.playGame(2);
// Should return: "Battery at 50%"

// gamingLaptop.playGame(3);
// Should return: "Battery dead! Please plug in."

const gamingLaptop = {
    model : 'ASUS TUF A15',
    batteryLevel : 100,

    playGame(durationInHours) {

    let drainAmount = durationInHours * 25;

    this.batteryLevel = this.batteryLevel - drainAmount;

    if(this.batteryLevel <= 0){
        this.batteryLevel = 0
        return 'Battery dead! Please plug in..';
    }else{
        return 'Battery at ' + this.batteryLevel + '%';
    }
  }
}

console.log(gamingLaptop.playGame(1));

console.log(gamingLaptop.playGame(1));
