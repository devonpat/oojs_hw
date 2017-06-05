function Multiplyer (number) {
	this.currentValue = 1;
	this.number = number;
	this.multiply = function() {
		this.currentValue *= this.number;
	} 
	this.getCurrentValue = function(){
		return this.currentValue;
	}
};

let answer = new Multiplyer(11);

console.log(answer.getCurrentValue());
answer.multiply();
console.log(answer.getCurrentValue());
answer.multiply();
console.log(answer.getCurrentValue());
answer.multiply();
