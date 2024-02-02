const renderSections = (e) => {
    e.preventDefault();
    let sectionId = e.target.dataset.id;
    handleSections({id: sectionId});
}
const handleSections = (data) => {
    let sections = document.querySelectorAll('.content section');
    let {id} = data
    if (sections) {
        sections.forEach((section) => {
            let sectionId = section.getAttribute("id");
            let currMenu = document.querySelector(`[data-id=${section.id}]`);
            sectionId === id ? (section.style.display = "block", currMenu.classList.add("active")) : (section.style.display = "none",currMenu.classList.remove("active"))
            
        })
    }
}


const renderUI = () => {
    console.log("UI render starting....")
    let menu = document.querySelectorAll('.sidebar ul.menu .link');
    handleSections({id: "about"});
    if (menu) {
        menu.forEach((item) => {
            item.addEventListener("click", (e) => {
                return renderSections(e)
            });
        })

    }
}

window.document.addEventListener("load", renderUI())

