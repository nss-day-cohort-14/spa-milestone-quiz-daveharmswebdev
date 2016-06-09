var carLot = (function(car) {

	var carsPost = document.getElementById('cars');

	car.init = function() {
		carLot.requestInventory();
	};
	car.displayCar = function(inventory) {
		for (var x = 0; x < inventory.length; x++) {
			carsPost.innerHTML += carLot.getCarHTML(inventory[x]);
		}
    };

	return car;

})(carLot || {});

carLot.init();
