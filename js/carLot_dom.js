var carLot = (function(car) {

	var carsPost = document.getElementById('cars');

	car.init = function() {
		carLot.requestInventory();
	};
	car.displayCar = function(inventory) {
		for (var x = 0; x < inventory.length; x++) {
			carsPost.innerHTML += carLot.getCarHTML(x+1,inventory[x]);
			document.getElementById('car--' + (x+1)).style.border = `5px solid ${inventory[x].color}`;
			document.getElementById('car--' + (x+1))addEventListener('click', carLot.clickHandler);
		}
    };

	return car;

})(carLot || {});

carLot.init();
