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

function clickgoodsBtn()
{
    goods_goodsPage.style.transform = "translateY(-100%)";
    goods_mainPage.style.transform = "translateY(0%)";
}

goods_goodsBtn.addEventListener("click", clickgoodsBtn);



