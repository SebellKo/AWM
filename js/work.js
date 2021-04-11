const teamPage = document.querySelector(".team_work");
const personalPage = document.querySelector(".personal_work");
const work_mainPage = document.querySelector(".main_page");
const work_workPage = document.querySelector(".work_page");

const teamBtn = document.querySelector(".team");
const personalBtn = document.querySelector(".personal");
const work_workBtn = document.querySelector(".work");

let teamPageHeight = teamPage.clientHeight;
let personalPageHeight = personalPage.clientHeight;
let scrollY = teamPage.scrollTop;
let teamBox = document.querySelectorAll(".team_work div");
let personalBox = document.querySelectorAll(".personal_work div");



function addEventHandlers()
{
    teamPage.addEventListener("scroll", checkPosition);
    teamPage.addEventListener("load", checkPosition);
    teamPage.addEventListener("resize", init);
};

function checkPosition()
{
    for (let i = 0; i < teamBox.length; i++)
    {
        let teamBoxTop = teamBox[i].getBoundingClientRect().top;
        if (teamPageHeight > teamBoxTop)
        {
            teamBox[i].classList.add("active");
        }
    }
}

function _addEventHandlers()
{
    personalPage.addEventListener("scroll", _checkPosition);
    personalPage.addEventListener("load", _checkPosition);
    personalPage.addEventListener("resize", init);
};

function _checkPosition()
{
    for (let i = 0; i < personalBox.length; i++)
    {
        let personalBoxTop = personalBox[i].getBoundingClientRect().top;
        if (personalPageHeight > personalBoxTop)
        {
            personalBox[i].classList.add("active");
        }
    }
}


if (matchMedia("screen and (max-width: 400px)").matches)
{
    function clickTeamBtn()
    {
        teamPage.style.transform = "translateY(0%)";
        personalPage.style.transform = "translateY(100%)";
    }

    function clickPersonalBtn()
    {
        teamPage.style.transform = "translateY(100%)";
        personalPage.style.transform = "translateY(0%)";
    }

    function clickWorkBtn()
    {
        work_workPage.style.transform = "translateX(100%)";
        work_mainPage.style.transform = "translateX(-0%)";
        teamPage.style.transform = "translateY(100%)";
        personalPage.style.transform = "translateY(100%)";
    }
}

else if(matchMedia("screen and (min-width: 1000px)").matches)
{
    function clickTeamBtn()
    {
        teamPage.style.transform = "translateX(0%)";
        personalPage.style.transform = "translateX(100%)";
    }

    function clickPersonalBtn()
    {
        teamPage.style.transform = "translateX(100%)";
        personalPage.style.transform = "translateX(0%)";
    }

    function clickWorkBtn()
    {
        work_workPage.style.transform = "translateY(-100%)";
        work_mainPage.style.transform = "translateY(0%)";
        teamPage.style.transform = "translateX(100%)";
        personalPage.style.transform = "translateX(100%)";
    }
}


work_workBtn.addEventListener("click", clickWorkBtn);
teamBtn.addEventListener("click", clickTeamBtn);
personalBtn.addEventListener("click", clickPersonalBtn);










function init()
{
    addEventHandlers();
}

function _init()
{
    
    _addEventHandlers();
}

_init();
init();