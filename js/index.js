// Your code goes here
// let body = document.getElementsByTagName('body');
// body.addEventListener('scroll', () =>{
//     let head = document.getElementsByTagName('header');
//     console.log("this is the head", head);
//     // document.getElementsByTagName('header').style.backgroundColor = blue;
// });


let navTag = document.querySelectorAll('.main-navigation .nav-link');

navTag.forEach((tag) => {
    tag.addEventListener('dblclick', () =>{
        alert(`This is the ${tag.textContent}`);
    });
    tag.addEventListener('mouseover', () =>{
        tag.style.color = "green";
    });
});

let signUpButt = document.querySelectorAll('.destination .btn');
signUpButt.forEach((butt) => {
    butt.addEventListener('click', () => {
        prompt('Please enter your email');
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
