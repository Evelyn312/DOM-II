// Your code goes here


window.addEventListener('scroll', () => {
    document.getElementsByClassName('main-navigation')[0].style.backgroundColor = "lightpink";
});

let navTag = document.querySelectorAll('.main-navigation .nav-link');

navTag.forEach((tag) => {
    tag.addEventListener('dblclick', () =>{
        alert(`This is the ${tag.textContent}`);
    });
    tag.addEventListener('mouseover', () =>{
        tag.style.color = "green";
    });
    tag.addEventListener('mouseout', () =>{
        tag.style.color = "red";
    });''
    tag.addEventListener('click',(event) => {
        event.preventDefault();
    });
});

let signUpButt = document.querySelectorAll('.destination .btn');
signUpButt.forEach((butt) => {
    butt.addEventListener('click', (event) => {
        event.stopPropagation();
        prompt('Please enter your email');
    })
});
let destin = document.querySelectorAll('.destination');
destin.forEach((dest) => {
    dest.addEventListener('click',() => {
        dest.style.backgroundColor = '#f7e6ff';
    })
});

let allPara = document.querySelectorAll('p');
allPara.forEach((para) => {
    para.addEventListener('mouseenter', () => {
        para.style.transform = 'scale(1.3)';
        para.style.transition = 'transform 1s';
    })
    para.addEventListener('mouseleave', () => {
        para.style.transform = 'scale(1.0)';
   
    })
});

let allImg = document.querySelectorAll('img');
allImg.forEach((image) => {
    image.addEventListener('wheel', () => {
        image.style.transform = 'rotate(360deg)';
        image.style.transition = 'transform 2s';
    })
});

let allH2 = document.querySelectorAll('h2');
allH2.forEach((oneH2) => {
    oneH2.addEventListener('mousedown', () => {
        oneH2.style.color = 'pink';

    })
    oneH2.addEventListener('mouseup', () => {
        oneH2.style.color = 'grey';

    })
});
