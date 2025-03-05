document.addEventListener("DOMContentLoaded", ()=>{
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link")

    navLinks.forEach(link => {
        link.addEventListener("click", function (){
            navLinks.forEach(item => item.classList.remove("active"))

            this.classList.add("active")
        })
    })

    window.addEventListener("scroll", ()=>{
        const sections = document.querySelectorAll("section")
        let currentSection = ""

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if(window.scrollY >= sectionTop - sectionHeight/3){
                currentSection = section.getAttribute("id")
            }
        })

        navLinks.forEach(link => {
            link.classList.remove("active")
            if(link.getAttribute("href").includes(currentSection)){
                link.classList.add("active")
            }
        })
    })

    const navbar = document.querySelector(".navbar")
    let lastScrollTop = 0
    const scrollFadeThreshold = 100;

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.scrollY
        
        if(currentScrollTop > lastScrollTop && currentScrollTop > scrollFadeThreshold){
            navbar.style.transform = "translateY(-100%)"
            navbar.style.opacity = '0'
        }else{
            navbar.style.transform = "translateY(0)"
            navbar.style.opacity = '1'
        }

        lastScrollTop = currentScrollTop
    })
})