var carLot = (function(lot) {

	var targetDescr;

	lot.clickHandler = function(event) {
		carID = event.currentTarget.id;
		carLot.borderPOW(carID,'pink');
		targetDescr = this.querySelector('div.descr');
		descInput.focus();
		descInput.value = '';
	};
	lot.changeDesc = function() {
		targetDescr.innerHTML = descInput.value;
	};
	lot.borderPOW = function(car, color) {
		el = document.getElementsByClassName('carCard');
		for (var i = 0; i < el.length; i++) {
			el[i].style.borderWidth = '5px';
			el[i].style.backgroundColor = '';
		}
		document.getElementById(car).style.borderWidth = '15px';
		document.getElementById(car).style.backgroundColor = color;
	};

	return lot;

})(carLot || {});

carLot.init();