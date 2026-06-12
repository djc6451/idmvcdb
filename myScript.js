fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const grid = document.getElementById("grid");

    
    const amount = data.length;
    document.getElementById("browseAmount").textContent = `Browse Over ${amount} Cars!`;



    data.forEach(car => {

      const card = document.createElement("div");
      card.className = "car-card";

      const link = document.createElement("a");
      link.href = `spot.html?id=${car.id}`;

      const img = document.createElement("img");
      img.src = car.images[0];
      img.loading = "lazy"

      link.appendChild(img);

      const title = document.createElement("p");
      title.innerText = car.title;

      const plate = document.createElement("p")
      plate.innerText = car.info.Plate;

      card.appendChild(link);
      card.appendChild(title);
      card.appendChild(plate)
      grid.appendChild(card);
    });
  });