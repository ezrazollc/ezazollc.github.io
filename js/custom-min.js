!function(){let e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",e=>{let l=t.getAttribute("href");document.querySelector(l).scrollIntoView({behavior:"smooth"}),history.pushState(null,null,l),e.preventDefault()})}();