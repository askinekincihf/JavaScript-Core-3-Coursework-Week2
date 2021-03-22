const url = "https://xkcd.now.sh/?comic=latest";

function setup(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Encountered something unexpected: ${response.status} ${response.statusText}`)
            }
        })
        .then((content) => {
            console.log(content);
            display(content);
        })
}

function display(content) {
    const container = document.querySelector(".container");
    const image = document.createElement("img");
    image.src = content.img;
    container.append(image);
}

setup(url);