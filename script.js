let menu= document.querySelector('#menu-icon');
let navlist= document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset:true
});
sr.reveal('.tmax1-text',{delay:200, origin :'top'});
sr.reveal('.icons',{delay:500, origin :'left'});
sr.reveal('.myVideo3',{delay:200, origin :'right'});
sr.reveal('.title1',{delay:100, origin :'top'});
sr.reveal('.mobile',{delay:100, origin :'right'});
sr.reveal('.contact',{delay:100, origin :'left'});
sr.reveal('.myVideo4',{delay:500, origin :'left'});
sr.reveal('.card',{delay:500, origin :'top'});
sr.reveal('.p',{delay:500, origin :'right'});<model-viewer id="neutral-demo" tone-mapping="neutral" camera-controls touch-action="pan-y" auto-rotate  src="t-max.glb"></model-viewer>