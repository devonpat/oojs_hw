/*
// Part 1
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
*/

/*
// Part 2
function Album(){
	this.photos = [];
	this.addPhoto = function(photo) {
		this.photos.push(photo);
	}
	this.getListPhotos = function(){
		let photo_names = [];
		for (var i = 0; i < this.photos.length; i++) {
			photo_names.push(this.photos[i].path);
		}

		return photo_names;
	}
};

function Photo(path, location){
	this.path = path;
	this.location = location;
};

//allow you to add a new Photo
var album2 = new Album();
var image = new Photo('image1.png', 'Sandy');
var image2 = new Photo('image2.png', 'here');
album2.addPhoto(image);
album2.addPhoto(image2);
*/













