

document.querySelectorAll(".socials-box").forEach((box, idx) => { if(idx > 0 && idx != 4){
    box.addEventListener("mouseenter", () => {
        box.querySelector(".socials-txt").style.color = "white";
        box.querySelector(".socials-arrow-container").style.opacity = "1";
        box.querySelector(".socials-arrow-container").style.top = "0px";
        box.querySelector(".socials-arrow-container").style.transform = "rotate(-45deg)";
    });
    } else{  
        box.querySelector(".socials-txt").style.color = "white"; 
        box.querySelector(".socials-arrow-container").style.opacity = "1"; 
        box.querySelector(".socials-arrow-container").style.top = "0px"; 
        box.querySelector(".socials-arrow-container").style.transform = "rotate(-45deg)";
}});
document.querySelectorAll(".socials-box").forEach((box, idx) => { if(idx > 0){
    box.addEventListener("mouseleave", () => {
        box.querySelector(".socials-txt").style.color = "var(--grey)";
        box.querySelector(".socials-arrow-container").style.opacity = "0";
        box.querySelector(".socials-arrow-container").style.top = "50px";
        box.querySelector(".socials-arrow-container").style.transform = "rotate(0deg)";
    });
}});
console.log(document.querySelector(".project-img").style.height);
console.log(document.querySelector(".project-flex").style.height);
// display project imgs onclick
let arrowContainers = document.querySelectorAll(".arrow-right-container");
let projectBoxes = document.querySelectorAll(".project-box");
document.querySelectorAll(".project-flex").forEach((box, idx) => {
    projectBoxes[idx].style.maxHeight = "153px";
    let boxHeight;
    if(window.innerWidth < 492){
        boxHeight = "560px";
    } else if(window.innerWidth < 1264){
        boxHeight = "860px";    }
     else {
        boxHeight = "960px";
    }

    box.addEventListener("click", () => {
        if(projectBoxes[idx].style.maxHeight == "153px"){
            projectBoxes[idx].style.maxHeight = boxHeight;
            projectBoxes[idx].style.borderBottom = "1px solid transparent";
            arrowContainers[idx].style.backgroundColor = "hsl(253, 100%, 64%)";
            arrowContainers[idx].style.border = "2px solid hsl(253, 100%, 64%)";
            arrowContainers[idx].style.transform = "rotate(90deg)";
        } else {
            projectBoxes[idx].style.maxHeight = "153px";
            projectBoxes[idx].style.borderBottom = "1px solid var(--dark_grey)";
            arrowContainers[idx].style.backgroundColor = "transparent";
            arrowContainers[idx].style.border = "2px solid var(--dark_grey)";
            arrowContainers[idx].style.transform = "rotate(0deg)";
        }
    });
});
// HOVER
document.querySelectorAll(".project-img").forEach((img, idx) => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(0.98)";
        img.style.opacity = "0.18";
        document.querySelectorAll(".expand-icon")[idx].style.opacity = "1";
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        img.style.opacity = "0.1";
        document.querySelectorAll(".expand-icon")[idx].style.opacity = "0";
    });
});

// PROJECT MODAL
let modalIdx = 0;
let clickTimeout = false;
let allImgs = document.querySelectorAll(".project-modal-img");
let modalCircles = document.querySelectorAll(".modal-idx");
function moveModalImgs(direction){if(!clickTimeout){
    clickTimeout = true;
    let currentImg = allImgs[modalIdx];
    if(direction == "right"){
        // HANDLE OLD IMG MOVING AWAY
        currentImg.style.left = "1200px";

        // HANDLE NEW IMG
        let newImg;
        if(modalIdx == (allImgs.length - 1)){ // FROM STARFT TO END
            modalIdx = 0;
            newImg = document.querySelectorAll(".project-modal-img")[0];
        } else {
            modalIdx++;
            newImg = document.querySelectorAll(".project-modal-img")[modalIdx]; // + 1
        }       
        modalCircles.forEach((circle, idx) => {
            if(idx == modalIdx){
                circle.style.opacity = "1";
            } else {
                circle.style.opacity = "0.25";
            }
        });

        newImg.style.transition = "0s ease";
        newImg.style.left = "-1200px";
        newImg.offsetWIdth;
        setTimeout(() => {
            newImg.style.transition = "0.6s ease";
            newImg.style.left = "0px";
        }, 200);
    } else {
        // HANDLE OLD IMG MOVING AWAY
        currentImg.style.left = "-1200px";

        // HANDLE NEW IMG
        let newImg;
        if(modalIdx == 0){ // FROM STARFT TO END
            modalIdx = (allImgs.length - 1);
            newImg = document.querySelectorAll(".project-modal-img")[modalIdx];
        } else {
            modalIdx--;
            newImg = document.querySelectorAll(".project-modal-img")[modalIdx]; // + 1
        }       
        modalCircles.forEach((circle, idx) => {
            if(idx == modalIdx){
                circle.style.opacity = "1";
            } else {
                circle.style.opacity = "0.25";
            }
        });

        newImg.style.transition = "0s ease";
        newImg.style.left = "1200px";
        newImg.offsetWIdth;
        setTimeout(() => {
            newImg.style.transition = "0.6s ease";
            newImg.style.left = "0px";
        }, 200);
    }
    //CLICKTIMEOUT
    setTimeout(() => {
        clickTimeout = false;
    }, 600);
}}

document.querySelectorAll(".project-img-container").forEach((container, idx) => {
    container.addEventListener("click", () => {
        openModal(idx + 1);
    });
});
document.querySelector(".project-modal").addEventListener("click", (e) => {
    if(!document.querySelector(".project-modal-flex").contains(e.target) && !document.querySelector(".chev-flex").contains(e.target)){
        closeModal();
    }
});
function openModal(workIdx){
    document.querySelectorAll(".project-modal-img").forEach((img, idx) => {
        sourceString = "images/projects/work" + workIdx + "_" + String(idx + 1) + ".png";
        console.log(sourceString);
        img.src = sourceString;
        console.log(img);
    });
    let modal = document.querySelector(".project-modal");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 100);
}
function closeModal(){

    let modal = document.querySelector(".project-modal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
        modalIdx = 0;
        modalCircles.forEach((circle, idx) => {
            if(idx == 0){
                circle.style.opacity = "1";
            } else {
                circle.style.opacity = "0.25";
            }
        });
        allImgs.forEach((img, idx) => {
            img.style.transition = "0s ease";
            if(idx == 0){
                img.style.left = "0px";
            } else {
                img.style.left = "1100px";
            }
            setTimeout(() => {
                img.style.transition = "0.6s ease";
            }, 100);
        });
    }, 400);
}

// SERVICES OPEN/CLOSE
let activeBox;
document.querySelectorAll(".skill-box").forEach((box, idx) => {
    box.style.minHeight = "0px";
    box.addEventListener("click", () => {
        if(box != activeBox){
            closeService(box);
        }
    });
});
function openService(clickedBox){
    if(window.innerWidth <= 1264 && window.innerWidth > 736){
        clickedBox.style.minHeight = "780px";
    } else if(window.innerWidth <= 736 && window.innerWidth > 492){
        clickedBox.style.minHeight = "520px";
    } else if(window.innerWidth <= 492){
        clickedBox.style.minHeight = "490px";
    } else {
        clickedBox.style.minWidth = "680px";
    }
        setTimeout(() => {
        clickedBox.querySelector(".arrow-up-container").style.opacity = "0";
            clickedBox.querySelector(".skill-title").style.opacity = "0";
            setTimeout(() => {
                clickedBox.querySelector(".active-box").style.zIndex = "10";
                clickedBox.querySelector(".active-box").style.opacity = "1";
                clickedBox.querySelector(".active-box").style.backgroundColor = "hsl(0, 0%, 7%)";
            }, 500);
    }, 600);
}
function closeService(newBox){
    if(activeBox == undefined){
        openService(newBox);
        activeBox = newBox;
    } else {
        console.log(activeBox);
        activeBox.querySelector(".active-box").style.opacity = "0";
        activeBox.querySelector(".active-box").style.backgroundColor = "black";
        setTimeout(() => {
            activeBox.querySelector(".active-box").style.zIndex = "10";
        }, 500)
        setTimeout(() => {
            activeBox.querySelector(".skill-title").style.opacity = "1";
            activeBox.querySelector(".arrow-up-container").style.opacity = "1";
            setTimeout(() => {
                if(window.innerWidth > 1264){
                    activeBox.style.minWidth = "0px";
                } else {
                    activeBox.style.minHeight = "0px";
                }
            setTimeout(() => {
                openService(newBox);
                activeBox = newBox;
            }, 300);
        }, 500);
    }, 400);
}}
let activeIdx = 0;
let activeImgs = document.querySelectorAll(".active-img");
function slideActiveImages(){
    setInterval(() => {
        let imgOffset;
        if(window.innerWidth <= 1264 && window.innerWidth > 736){
            imgOffset = "1300px";
        } else {
            imgOffset = "800px";
        }

        document.querySelectorAll(".active-box").forEach((box) => {
            console.log(activeIdx);
            let oldImg = box.querySelectorAll(".active-img")[activeIdx];
            let newImg;
            if(activeIdx == 2){
                newImg = box.querySelectorAll(".active-img")[0];
            } else {
                newImg = box.querySelectorAll(".active-img")[activeIdx + 1];
            }
            oldImg.style.transition = "0.5s ease";
            oldImg.style.left = "-" + imgOffset;
            newImg.style.transition = "0s ease";
            newImg.style.left = imgOffset;
            setTimeout(() => {
                newImg.style.transition = "0.5s ease";
                newImg.style.left = "0px";
            }, 300);
        });
        if(activeIdx == 2){
            activeIdx = 0;
        } else {
            activeIdx++;
        }
    }, 4000);
}
slideActiveImages();
// HOVER
document.querySelectorAll(".skill-box").forEach((box, idx) => {
    box.addEventListener("mouseenter", () => {
        document.querySelectorAll(".arrow-up-container")[idx].style.backgroundColor = "hsl(253, 100%, 64%)";
        document.querySelectorAll(".arrow-up-container")[idx].style.border = "2px solid hsl(253, 100%, 64%)";
    });
    box.addEventListener("mouseleave", () => {
        document.querySelectorAll(".arrow-up-container")[idx].style.backgroundColor = "transparent";
        document.querySelectorAll(".arrow-up-container")[idx].style.border = "2px solid var(--dark_grey)";
    });
});

// QUOTES MOVEMENT
let quoteHolder = document.querySelector(".test-quote-col");
let quotes = document.querySelectorAll(".quote-container");
let quoteIdx = 0;
let quoteTimeout = false;
function switchQuote(direction){if(!quoteTimeout){
    let oldQuote = quotes[quoteIdx];
    quoteTimeout = true;
    if(direction == "right"){
        //MOVE OLD
        oldQuote.style.transition = "0.6s ease";
        oldQuote.style.left = "1300px";

        //ENTER NEW
        let newQuote;
        if(quoteIdx == 3){
            newQuote = quotes[0];
            quoteIdx = 0;
        } else {
            newQuote = quotes[quoteIdx + 1];
            quoteIdx++;
        }
        newQuote.style.transition = "0s ease";
        newQuote.style.left = "-1300px";
        setTimeout(() => {
            newQuote.style.transition = "0.6s ease";
            newQuote.style.left = "0px";
        }, 300);
        setTimeout(() => {
            quoteTimeout = false;  
        }, 600);
    } else {
        //MOVE OLD
        oldQuote.style.transition = "0.6s ease";
        oldQuote.style.left = "-1300px";

        //ENTER NEW
        let newQuote;
        if(quoteIdx == 0){
            newQuote = quotes[3];
            quoteIdx = 3;
        } else {
            newQuote = quotes[quoteIdx - 1];
            quoteIdx--;
        }
        newQuote.style.transition = "0s ease";
        newQuote.style.left = "1300px";
        setTimeout(() => {
            newQuote.style.transition = "0.6s ease";
            newQuote.style.left = "0px";
        }, 300);
        setTimeout(() => {
            quoteTimeout = false;  
        }, 600);
    }
}}

// SCROLL TARGET/ANIMATION START
const riser = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.top = "0px";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25 // Trigger when 25% of the element is visible
});
document.querySelectorAll(".scroll-target").forEach(target => {
    riser.observe(target);
});
function startAnimation(){
    let starters = document.querySelectorAll(".starter");
    const animationPause = 250;
    starters.forEach((starter, idx) => {
        setTimeout(() => {
            if(idx < 2 || idx > 3){
                starter.style.top = "0px";
                starter.style.opacity = "1";
            } else {
                starter.style.left = "0px";
                starter.style.opacity = "1";
            }
        }, animationPause * (idx + 1));
    });
}
startAnimation();

// MENU DROPDOWN
let menuOpen = false;
let dropDown = document.querySelector(".dd-container");
let menuIcon = document.querySelector(".menu-icon-container");
function toggleMenu(){
    if(!menuOpen){
        menuOpen = true;
        dropDown.style.display = "flex";
        setTimeout(() => {
            dropDown.style.opacity = "1";
        }, 100);
        menuIcon.style.transform = "rotate(180deg)";
    } else {
        menuOpen = false;
        dropDown.style.opacity = "0";
        setTimeout(() => {
            dropDown.style.display = "none";
        }, 300);
        menuIcon.style.transform = "rotate(0deg)";
    }
}