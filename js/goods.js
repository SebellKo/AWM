const introgoodsBox = document.querySelectorAll(".intro_goods_box div");
const goods_goodsBtn = document.querySelector(".goods");
const goods_mainPage = document.querySelector(".main_page");
const goods_goodsPage = document.querySelector(".goods_page");

introgoodsBox.forEach(elem => 
{
        elem.addEventListener("mouseenter", function(event)
        {
            event.target.classList.add("active");
        });
        elem.addEventListener("mouseout", function(event)
        {
            event.target.classList.remove("active");
        });
});

if (matchMedia("screen and (max-width: 400px)").matches)
{
    function clickgoodsBtn()
    {
        goods_goodsPage.style.transform = "translateX(100%)";
        goods_mainPage.style.transform = "translateX(0%)";
    }
}

else if(matchMedia("screen and (min-width: 1000px)").matches)
{
    function clickgoodsBtn()
    {
        goods_goodsPage.style.transform = "translateY(-100%)";
        goods_mainPage.style.transform = "translateY(0%)";
    }
}


goods_goodsBtn.addEventListener("click", clickgoodsBtn);



