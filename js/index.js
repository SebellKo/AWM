const indexPage = document.querySelector(".index");
const mainPage = document.querySelector(".main_page");
const workBtn = document.querySelector(".workBtn");
const goodsBtn = document.querySelector(".goodsBtn");
const peopleBtn = document.querySelector(".peopleBtn");
const workPage = document.querySelector(".work_page");
const goodsPage = document.querySelector(".goods_page");
const peoplePage = document.querySelector(".people_page");


function hideIndexPage()
{
    indexPage.classList.add("index_hide");
}

setTimeout(hideIndexPage, 6000);


if (matchMedia("screen and (max-width: 400px)").matches)
{
    function workPageShow()
    {
        workPage.style.transform = "translateX(0%)";
        mainPage.style.transform = "translateX(-100%)";
    }
    
    function peoplePageShow()
    {
        peoplePage.style.transform = "translateX(0%)";
        mainPage.style.transform = "translateX(-100%)";
    }
    
    function goodsPageShow()
    {
        goodsPage.style.transform = "translateX(0%)";
        mainPage.style.transform = "translateX(-100%)";
    } 
}

else if(matchMedia("screen and (min-width: 1000px)").matches)
{
    function workPageShow()
    {
        workPage.style.transform = "translateY(0%)";
        mainPage.style.transform = "translateY(100%)";
    }

    function peoplePageShow()
    {
        peoplePage.style.transform = "translateY(0%)";
        mainPage.style.transform = "translateY(100%)";
    }

    function goodsPageShow()
    {
        goodsPage.style.transform = "translateY(0%)";
        mainPage.style.transform = "translateY(100%)";
    }
}


workBtn.addEventListener("click", workPageShow);
peopleBtn.addEventListener("click", peoplePageShow);
goodsBtn.addEventListener("click", goodsPageShow);


function init()
{

}

init();