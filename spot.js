const id = new URLSearchParams(window.location.search).get("id");

fetch("data.json")
  .then(r => r.json())
  .then(data => {

    const car = data.find(car => car.id === id);

    document.getElementById("title").innerText = car.title;

    const images = document.getElementById("grid");

    car.images.forEach(path => {

      const img = document.createElement("img");

      img.src = path;
      img.alt = car.title;

      images.appendChild(img);
    });

    const info = document.getElementById("info");

    for (const key in car.info) {
      info.innerHTML += `<li><b>${key}:</b> ${car.info[key]}</li>`;
    }

  });