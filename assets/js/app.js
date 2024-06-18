//variabeldeklarationer
let largeImg = document.querySelector(".largeImg");
let smallImgs = document.querySelectorAll(".smallImg");

//For-løkke til at tilføje event listeners som gentager hvert element i smallImgs
for (let index = 0; index < smallImgs.length; index++) {
  smallImgs[index].addEventListener("click", (data) => {
    largeImg.src = data.target.src;
    /*Når et lille billede klikkes, opdateres src-attributten af largeImg 
    til src-værdien af det klikkede billede (data.target). Dette gør, at 
    det store billede ændres til at vise det samme billede som det klikkede
     lille billede.*/

    /*Fjerne active "class" på alle img */
    document.querySelector("img.active").classList.remove("active");

    /*Tilføje active "class" på det click event der er aktiv */
    data.target.classList.add("active");
  });
}
