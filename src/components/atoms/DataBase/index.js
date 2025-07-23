function getRandomColor() {
  // Retorna aleatoriamente 'red' ou 'green'
  return Math.random() > 0.5 ? 'red' : 'green';
}

function getRandomLatitude(min = -6, max = -23) {
  // Gera uma latitude aleatória dentro do intervalo fornecido
  return Math.random() * (max - min) + min;
}

function getRandomLongitude(min = -40, max = -60) {
  // Gera uma longitude aleatória dentro do intervalo fornecido
  return Math.random() * (max - min) + min;
}

function generateRandomMarkers(numberOfMarkers = 1) {
  const markers = [];
  for (let i = 0; i < numberOfMarkers; i++) {
    markers.push({
      id: i,
      color: getRandomColor(),
      coordinates: {
        latitude: getRandomLatitude(),
        longitude: getRandomLongitude(),
      },
    });
  }
  return markers;
}

const database = {
  // Gera 100 marcadores aleatórios e os adiciona ao banco de dados
  markers: generateRandomMarkers(100),
};

export default database;