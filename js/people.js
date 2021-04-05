const people_peoplePage = document.querySelector(".people_page");
const people_mainPage = document.querySelector(".main_page");

const people_peopleBtn = document.querySelector(".people");
const introPeopleBox = document.querySelector(".intro_people_box");
const forRotateBox = document.querySelector(".for_rotate");

forRotateBox.addEventListener("mousemove", function(event)
{
    
    x = event.offsetX - 35;
    y = event.offsetY - 35;
    console.log(x);
    console.log(y);
    introPeopleBox.style.transform = "rotateX("+ -y +"deg) rotateY("+ x +"deg)";
});

function clickPeopleBtn()
{
    people_peoplePage.style.transform = "translateY(-100%)";
    people_mainPage.style.transform = "translateY(0%)";
}
people_peopleBtn.addEventListener("click", clickPeopleBtn);