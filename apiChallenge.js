const apiUrl = "https://cataas.com/cat?json=true";
const baseUrl = "https://cataas.com";
async function fetchcatGifs () {
    const response = await fetch (apiUrl);
    let data = await response.json();

    return data;
}

async function search() {
    var data = await fetchcatGifs();
    document.getElementById("catGif").src = baseUrl + data.url;
    document.getElementById("catGif").hidden="";
}