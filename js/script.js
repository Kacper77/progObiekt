function Phone(brand, price, color,system,RAM) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
	this.RAM = RAM;
}
/*Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", the system is " + this.system + " and the phone contains memory " + this.RAM + ".");
}
	var iPhone6S = new Phone("Apple", 2250, "silver", "iOS", "32GB");
		iPhone6S.printInfo();
	var SamsungGalaxyS6 = new Phone("Samsung", 1600, "white", "Android", "32GB");
		SamsungGalaxyS6.printInfo();
	var OnePlusOne = new Phone("OnePlus", 1400, "black", "Android", "16GB");
		OnePlusOne.printInfo(); */

Phone.prototype.printInfo = function() {
	console.log(`The phone brand is ${this.brand}, color is ${this.color}, price is ${this.price}, the system is ${this.system}, and the phone contains memory ${this.RAM}.`);
}
	var iPhone6S = new Phone("Apple", 2250, "silver", "iOS", "32GB");
		iPhone6S.printInfo();
	var SamsungGalaxyS6 = new Phone("Samsung", 1600, "white", "Android", "32GB");
		SamsungGalaxyS6.printInfo();
	var OnePlusOne = new Phone("OnePlus", 1400, "black", "Android", "16GB");
		OnePlusOne.printInfo();
/////
function PhoneTwo(cam, model){
	this.cam = cam;
	this.model = model;
}
PhoneTwo.prototype.infoTwo = function() {
	console.log(`This ${this.model} also has the camera ${this.cam}.`);
}
	var iPhone6S = new PhoneTwo("12Mpix ", "iPhone6S");
		iPhone6S.infoTwo();
	var SamsungGalaxyS6 = new PhoneTwo("15Mpix", "SamsungGalaxyS6");
		SamsungGalaxyS6.infoTwo();
	var OnePlusOne = new PhoneTwo("12Mpix", "OnePlusOne");
		OnePlusOne.infoTwo();
