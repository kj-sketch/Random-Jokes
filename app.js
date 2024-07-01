let btn = document.querySelector("button");
let url2 = " https://official-joke-api.appspot.com/jokes/random";

btn.addEventListener("click", async () => {
    let joke = await getJokes();
    let div = document.querySelector("#random-jokes");
    div.innerHTML = joke;
})


async function getJokes(){
    try {
        let res = await axios.get(url2);
        let q = res.data.setup;
        let p = res.data.punchline;
        return `Setup: ${q}<br>Punchline: ${p}`;
    } catch (error) {
        console.log("error - ", error);
        return "No Image found";
    }
}





// btn.addEventListener("click", async () => {
//     // let link = await getImage();
//     // // console.log(link);
//     // let img = document.querySelector("#result");
//     // img.setAttribute("src", link);
//     // console.log(link);
// })


