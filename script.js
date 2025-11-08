const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.addEventListener("click", () => {
    setTimeout(() => {
        text.innerHTML = "Start Downloading...";
    }, 0);

    let count = 10;
    let timer = setInterval(() => {
        if (count === 1) {
            clearInterval(timer);
        };
        count--;
        text.innerHTML = "Your file will download in 0" + count + " seconds";
        text.style.color = "black";
        btn.style.background = "transparent";
    }, 1000);

    setTimeout(() => {
        text.innerHTML = "Download again";
        text.style.color = "white";
        btn.style.background = "#00bfff";
    }, 12000);
});

