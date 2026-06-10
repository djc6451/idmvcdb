fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const grid = document.getElementById("grid");

    data.forEach(car => {

      const card = document.createElement("div");
      card.className = "car-card";

      const link = document.createElement("a");
      link.href = `spot.html?id=${car.id}`;

      const img = document.createElement("img");
      img.src = car.images[0];

      link.appendChild(img);

      const title = document.createElement("p");
      title.innerText = car.title;

      card.appendChild(link);
      card.appendChild(title);

      grid.appendChild(card);
    });
  });