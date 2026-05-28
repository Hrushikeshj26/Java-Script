// this keyword

const smartwatch = {
    owner : 'Hrushikesh',
    steps : 0,

    walk(stepsWalked){

        this.steps = this.steps + stepsWalked;

        if(this.steps <= 0){
            this.steps = 0
            return `Strat to walk ${this.owner}`;
        }else{
            return `Good Job ${this.owner}! Total Steps: ${this.steps}`
        }
    },

    resetDailytSteps(hours){

        if(hours === 24){
            this.steps = 0;
            return "Steps reset to 0. New day, new goals!";
        }else{
            return `You still have time to walk ${this.owner}!`
        }
    }
}

console.log(smartwatch.walk(500));
console.log(smartwatch.resetDailytSteps(24));