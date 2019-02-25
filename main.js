fetch("/img/satsuki.png")
    .then(function(response) {
        return response.blob();
    })
    .then(function(blob) {
        const body = document.querySelector("body");
        body.style.backgroundImage = `url(${window.URL.createObjectURL(blob)}`;
    });
