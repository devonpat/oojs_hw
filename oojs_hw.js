// PART 1



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



// PART 2



function Album(){
	this.photos = [];
	this.addPhoto = function(photo){
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


var album2 = new Album();
var image = new Photo('image1.png', 'Sandy');
var image2 = new Photo('image2.png', 'here');
album2.addPhoto(image);
album2.addPhoto(image2);




// PART 3



function Library(){
	this.book_array = [];
	this.addBook = function(book){
		this.book_array.push(book);
	}
	this.getListBooks = function(){
		let book_titles = [];
		for (var i = 0; i < this.book_array.length; i++) {
			book_titles.push(this.book_array[i].title);
		}
		return book_titles;
	}
	this.removeBook = function(title) {
		for(var i = 0; i < this.book_array.length; i++){
			if(this.book_array[i].title === title){
				this.book_array.splice(i,1);
			}
		}
 	}
 	this.countTheBooks = function() {
 		console.log(this.book_array.length);
 	}
 	this.findBookbyTitle = function(title){
 		console.log(title);
 		for (var i = 0; i < this.book_array.length; i++) {
 			if(this.book_array[i].title === title){
 				return this.book_array[i];
 			};
 		}
 	};
};

function Book(title, author, genre){
	this.title = title;
	this.author = author;
	this.genre = genre;
};

var library2 = new Library();
var greenEggs = new Book('Green Eggs & Ham', 'Dr.', 'HoF');
var sneetches = new Book('Sneetches on Beeches', 'Seuss', 'Great');
var cat = new Book('Cat in the Hat', 'Dr. Seuss', "All Time");


library2.addBook(greenEggs);
library2.addBook(sneetches);
library2.addBook(cat);
console.log(library2.getListBooks());


library2.removeBook('Sneetches on Beeches');
console.log(library2.getListBooks());


console.log(library2.findBookbyTitle('Cat in the Hat'));



