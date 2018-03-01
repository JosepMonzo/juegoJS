
// Para obtener un sumero aleatorio
let getRandomNumber = size => {
	return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
	let diffX = e.offsetX - target.x;
	let diffY = e.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
	if (distance <30 ){
		return "Estás ardiendo!!";
	} else if (distance < 40){
		return "Estás muy caliente";
	}else if (distance < 60){
		return "Caliente";
	}else if (distance < 100){
		return "Frío";
	}else if (distance < 180){
		return "Muy Frío";
	}else if (distance < 100){
		return "Congeladooooo";
	}
}