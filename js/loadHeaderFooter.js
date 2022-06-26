loadHeader();
loadFooter();
loadIconTitle();
// loadJS_dropMenu();
// loadCSS_Header_Footer();
window.addEventListener("load", function()
{
    console.log("ok")

})

function loadHeader()
{
    var header = document.createElement("header")
    header.innerHTML=
    `
    <div class="container_Header">
    <div class="container_dropdown-menu">
    <!-- <ul class="dropdown-menu_list">
        <li class="dropdown-menu_item"><a href="">Thiết bị</a> </li>
        <li class="dropdown-menu_item"><a href="">Cà phê</a></li>

    </ul> -->
</div>  
            <div class="container_toggerMenu">
                <div class="toggerMenu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div class="container_header_logo"><div class="header_logo">                    <a href="index.html"><img src="https://media3.giphy.com/media/U1gGi872CMzfUjI00p/giphy.gif?cid=6c09b952081a49a710ce165939adaa25954f5f0bc79e2d6c&rid=giphy.gif&ct=s" alt=""></a></div></div>
            <div class="container_header_listMenu container_header_listMenuText">
                <div class="container_toggerClose">
                    <div class="toggerClose">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <ul class="header_listMenuText">
                    <li class="header_itemMenu header_itemMenuText"><a href="index.html">Trang chủ</a></li>
                    <li class="header_itemMenu header_itemMenuText has-list"><a href="sanpham.html">Sản phẩm</a><div class="icon_detail">></div></li>
                    <li class="header_itemMenu header_itemMenuText"><a href="dangnhap.html">Đăng nhập</a></li>
                </ul>
            </div>
            <div class="container_header_listMenu container_header_listMenuIcon">
                <ul class="header_listMenu header_listMenuIcon">
                    <li class="header_itemMenu header_itemMenuIcon"><a href="giohang.html"><i class="fas fa-shopping-cart"></i></a></li>
                    <li class="header_itemMenu header_itemMenuIcon itemSearchHeader">
                        <input type="text" name="" id="" class="inputSearchHeader">
                        <i class="fas fa-search"></i></li>
                </ul>
            </div>
        </div>
    `
    var body = document.querySelector("body");
    body.appendChild(header);
}
function loadCSS_Header_Footer()
{
    var linkCSS = document.createElement("link");
    linkCSS.rel="stylesheet";
    linkCSS.href="/css/header_footer.css"
    var head= document.querySelector("head");
    head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`)
    head.appendChild(linkCSS);
}
function loadFooter()
{
    var footer = document.createElement("footer")
    footer.innerHTML=
    `
    <div class="container_footer">
            <div class="container_footerBrand">
                <div></div>
                <div class="footerBrand_logo">
                    <a href="index.html"><img src="https://media3.giphy.com/media/U1gGi872CMzfUjI00p/giphy.gif?cid=6c09b952081a49a710ce165939adaa25954f5f0bc79e2d6c&rid=giphy.gif&ct=s" alt=""></a>
                </div>
                <div class="footerBrand_name">
                    Coffee Villa
                </div>
            </div>
            <div class="container_footerQuickLink">
                <div class="container_footerQuickLink_list">
                    <div class="footerQuickLink_title">
                        Quick Links
                    </div>
                    <ul class="footerQuickLink_list">
       
                        <li class="footerQuickLink_item"><a href="lienhe.html">Liên lạc</a></li>
                        <li class="footerQuickLink_item"><a href="chinhsach.html">Chính sách</a></li>
                        <li class="footerQuickLink_item"><a href="dieukhoan.html">Điều khoản</a></li>
                    </ul>
                </div>
            </div>
            <div class="container_footerIntro">
                <div class="footerIntro_title">
                    Introduce
                </div>
                <div class="footerIntro">
                    <p>
                        Cà phê có chứa caffeine là một chất kích thích thần kinh. Sau khi uống cà phê, caffeine sẽ được hấp thụ vào máu và từ đó di chuyển đến não. Trong não, caffeine ngăn chặn chất dẫn truyền thần kinh ức chế adenosine. Điều này giúp cải thiện mức năng lượng, tâm trạng và các khía cạnh khác nhau của chức năng não.
                    </p>
                </div>
            </div>

        </div>
    `
    var body = document.querySelector("body");
    body.appendChild(footer);

}
function loadJS_dropMenu()
{
    var script = document.createElement("script");
    script.src="js/drop-menu.js"
    var body = document.querySelector("body");
    body.appendChild(script);
}
function loadIconTitle()
{
    var head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend",`<link rel="icon" href="images/logo_CF.png">`)
}