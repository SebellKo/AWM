const people_peoplePage = document.querySelector(".people_page");
const people_mainPage = document.querySelector(".main_page");

const people_peopleBtn = document.querySelector(".people");
const introPeopleBox = document.querySelector(".intro_people_box");
const peopleBack = document.querySelector(".people_back");
const introPeopleBoxDiv = document.querySelectorAll(".intro_people_box div");




if (window.innerWidth < 768)
{
    introPeopleBoxDiv.forEach(function(elem)
    {
        elem.addEventListener("mouseenter", function()
        {
            peopleBack.style.transform = "translateZ(-5vh) rotateX(180deg) rotateY(0deg)"
        });
        elem.addEventListener("mouseout", function()
        {
            peopleBack.style.transform = "translateZ(-5vh) rotateX(0deg) rotateY(180deg)"
        });
    });

    function clickPeopleBtn()
    {
        people_peoplePage.style.transform = "translateX(100%)";
        people_mainPage.style.transform = "translateX(0%)";
    }
}


else
{
    introPeopleBoxDiv.forEach(function(elem)
    {
        elem.addEventListener("mouseenter", function()
        {
            peopleBack.style.transform = "translateZ(-5vw) rotateX(180deg) rotateY(0deg)"
        });
        elem.addEventListener("mouseout", function()
        {
            peopleBack.style.transform = "translateZ(-5vw) rotateX(0deg) rotateY(180deg)"
        });
    });

    function clickPeopleBtn()
    {
        people_peoplePage.style.transform = "translateY(-100%)";
        people_mainPage.style.transform = "translateY(0%)";
    }
}

people_peopleBtn.addEventListener("click", clickPeopleBtn);