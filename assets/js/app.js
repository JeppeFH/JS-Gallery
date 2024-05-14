/*Henter stort billede*/
let largeImg = document.querySelector(".largeImg");

/*Henter alle små lille billede, 
(querySelectorAll gør at alle bliver selected og ikke kun første)*/
let smallImgs = document.querySelectorAll(".smallImg");

console.log();

/**/
for (let index = 0; index < smallImgs.length; index++) {
  smallImgs[index].addEventListener("click", (data) => {
    largeImg.src = data.target.src;

    /*Fjerne active "class" */
    document.querySelector("img.active").classList.remove("active");

    /*Tilføje active "class" */
    data.target.classList.add("active");
  });
}
