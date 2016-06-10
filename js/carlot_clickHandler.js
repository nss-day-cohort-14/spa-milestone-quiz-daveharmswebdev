var carLot = (function(lot) {

	lot.clickHandler = function(event) {
		var el = document.getElementsByClassName('carCard');
		for (var i = 0; i < el.length; i++) {
			el[i].classList.remove('selected');
		}
		carID = event.currentTarget.id;
		document.getElementById(carID).classList.add('selected');
		descInput.focus();
		descInput.value = '';
	};
	lot.changeDesc = function() {
		console.log(descInput.value);
	};

	return lot;

})(carLot || {});

carLot.init();