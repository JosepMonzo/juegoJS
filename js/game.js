const WIDTH = 400;
const HEIGH = 400;

let target = {
	x: getRandomNumber(WIDTH),
	y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');

$map.addEventListener('click', function (e){

	let distance = getDistance(e, target);
	console.log(distance);
	let distanceHint =  getDistanceHint(distance);
	$distance.innerHTML = '<h1>${distanceHint}</h1>'

	if (distance < 20) {
		alert ("Encontraste el Tesoro en ${clicks} clicks");
		location.reload();
	}

})