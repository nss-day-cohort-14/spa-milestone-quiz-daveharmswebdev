var carLot = (function(car) {

	var carsPost = document.getElementById('cars');
	var descInput = document.getElementById('descInput');

	car.init = function() {
		carLot.requestInventory();
	};
	car.displayCar = function(inventory) {
		var elCarDiv;
		for (var x = 1; x < inventory.length+1; x++) {
			carsPost.innerHTML += carLot.getCarHTML(x,inventory[x-1]);
			document.getElementById('car--' + x).style.border = `5px solid ${inventory[x-1].color}`;
		}
    };
    car.addListeners = function() {
    	el = document.getElementsByClassName('carCard');
    	for (let x = 0; x < el.length; x++) {
    		el[x].addEventListener('click', carLot.clickHandler);
    	}
    };

	return car;

})(carLot || {});