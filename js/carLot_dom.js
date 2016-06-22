var carLot = (function(car) {

	var carsPost = document.getElementById('cars');
	var descInput = document.getElementById('descInput');

	car.init = function() {
		carLot.requestInventory();
		descInput.addEventListener('keyup', carLot.changeDesc);
	};
	car.displayCar = function(inventory) {
		var elCarDiv;
		for (var x = 1; x < inventory.length+1; x++) {
			if (x === 1) carsPost.innerHTML += '<div class="row">';
			carsPost.innerHTML += carLot.getCarHTML(x,inventory[x-1]);
			if (x%3 === 0) carsPost.innerHTML += '</div><div class="row">';
			if (x === inventory.length) carsPost.innerHTML += '</div>';
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