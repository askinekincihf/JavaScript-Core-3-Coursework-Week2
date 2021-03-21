
const btn = document.querySelector("button");
btn.addEventListener("click", createDogGallery);

function createDogGallery() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Encountered something unexpected: ${response.status} ${response.statusText}`);
            }
        })
        .then((gallery) => {
            display(gallery);
        })
        .catch(error => console.log(error))
}

function display(gallery) {
    const dogList = document.querySelector(".dog-list");
    const list = document.createElement("li");
    const image = document.createElement("img");
    image.src = gallery.message
    list.append(image);
    dogList.append(list);
}

