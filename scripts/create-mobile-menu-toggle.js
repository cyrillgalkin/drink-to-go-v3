function n(){let e=document.querySelector(".js-toggle-button"),t=document.querySelector(".navigation");document.querySelector(".header--without-js").classList.remove("header--without-js"),e.classList.remove("header__toggle-button--without-js"),t.classList.toggle("navigation--open-mobile"),e.addEventListener("click",()=>{e.classList.toggle("header__toggle-button--close"),t.classList.toggle("navigation--open-mobile")})}export{n as createMobileMenuToggle};