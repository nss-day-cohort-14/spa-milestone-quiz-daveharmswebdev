var carLot = (function (car) {

    car.requestInventory = function(callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'js/inventory.json');
      xhr.send();
      xhr.addEventListener("load", carLot.loadInventory);
    };
    car.loadInventory = function(response) {
      var obj = JSON.parse(this.responseText);
      carLot.displayCar(obj.cars);
    };
    car.getCarHTML = function(num, car) {
      return `<div id="car--${num}" class="carCard col-md-4">
                <div>${car.year} ${car.make} ${car.model}</div>
                <div>${carLot.convertToCurrency(car.price)}</div>
                <div>Color: ${car.color}</div>
                <div>${carLot.getAvailable(car.purchase)}</div>
                <div>Desc: ${car.description}</div>
              </div>`
    };
    car.convertToCurrency = function(num) {
      var right, left;
      right = num.slice(-3);
      left = num.slice(0, -3);
      return `$${left},${right}`;
    };
    car.getAvailable = function(arg) {
      if (arg !== false) {
        return 'FOR SALE!';
      } else {
        return 'Sold.'
      }
    };         

    return car;

})(carLot || {});