const url = "https://dog.ceo/api/breeds/image/random";

function gallery(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Encountered something unexpected: ${response.status} ${response.statusText}`);
            }
        })
        .then((content) => {
            display(content);
        })
        .catch(error => console.log(error))
}

function display(content) {
    const dogList = document.querySelector(".dog-list");
    const list = document.createElement("li");
    const image = document.createElement("img");
    image.src = content.message;
    list.append(image);
    dogList.append(list);
}

