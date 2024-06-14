let name_target = window.prompt("Enter Your Name: ")
var max_length = 8; 
var min_length = 3; 

while(name_target  === "" || name_target === null || name_target.length > max_length || name_target.length < min_length){
        if(name_target === "" || name_target === null ||  name_target.length > max_length || name_target.length < min_length){
            name_target = window.prompt("Enter Your Name: (3-8 characters)",);
        }
    }

const box = document.getElementById("box2");
const click = document.getElementById("click2");
const myBtn = document.getElementById("myBtn");
const shadow = document.getElementById("shadow2");
const balloon2 = document.getElementById("balloon2")
var audio = document.getElementById("music"); 
const myMessage1 = document.getElementById("my-message1");
const myMessage2 = document.getElementById("my-message2");
const myMessage3 = document.getElementById("my-message3");
const myMessage4 = document.getElementById("my-message4");
const myMessage5 = document.getElementById("my-message5");
const myMessage6 = document.getElementById("my-message6");
const myMessage7 = document.getElementById("my-message7");

myBtn.addEventListener("click", () => {
    audio.play();
    myBtn.disabled = true;

    box.animate([
        {transform: 'scale(1)'},
        {borderRadius: '30px'},
        {transform: 'scale(1.3, .8)'},
        {transform: 'scale(1)'},
    ], {
      iterations: 1, duration: 1000
    });

    click.animate([
    
        {transform: 'translateY(-130px)'},
    ], {
        delay: 1500, iterations: 1, duration: 1000, fill: "forwards"
    });

    box.style.animation = "none"
    shadow.style.animation = "none"

    /* MESSAGE 1 */
    myMessage1.animate([
        {transform: 'translateY(-125px)'}
    ], {
        delay: 1300, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    myMessage1.innerHTML = "HAPPY BIRTH DAY! "+ name_target.toUpperCase();

    myMessage1.animate([
        {transform: 'translateY(-40px)'}
    ], {
        delay: 11000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    /* MESSAGE 2 */
    myMessage2.animate([
        {transform: 'translateY(-140px)'},
    ], {
        delay: 14000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out",
    })

    myMessage2.innerHTML = "Wishing you an amazing day, full of happiness!";

    myMessage2.animate([
        {transform: 'translateY(-30px)'}
    ], {
        delay: 21000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    /* MESSAGE 3 */
    myMessage3.animate([
        {transform: 'translateY(-140px)'},
    ], {
        delay: 23000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out",
    })

    myMessage3.innerHTML = "I hope all of your wishes and dreams come true";


    myMessage3.animate([
        {transform: 'translateY(-30px)'}
    ], {
        delay: 30000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    /* MESSAGE 4 */

    myMessage4.animate([
        {transform: 'translateY(-130px)'},
    ], {
        delay: 32000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out",
    })

    myMessage4.innerHTML = "Make this year count and memorable!";

    myMessage4.animate([
        {transform: 'translateY(-30px)'}
    ], {
        delay: 39000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    /* MESSAGE 5 */
    myMessage5.animate([
        {transform: 'translateY(-130px)'},
    ], {
        delay: 41000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out",
    })

    myMessage5.innerHTML = "I hope you'll find your dilaw, Happy Birth Day!";

    myMessage5.animate([
        {transform: 'translateY(-30px)'}
    ], {
        delay: 48000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    /* MESSAGE 6 */
    myMessage6.animate([
        {transform: 'translateY(-120px)'},
    ], {
        delay: 50000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out",
    })

    myMessage6.innerHTML = "Thank you for everything! <br>" + name_target.toUpperCase();

    myMessage6.animate([
        {transform: 'translateY(-30px)'}
    ], {
        delay: 57000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    /* MESSAGE 7 */
    myMessage7.animate([
        {transform: 'translateY(-100px)'},
    ], {
        delay: 59000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out",
    })

    myMessage7.innerHTML = "HEP HEP?!";

    myMessage7.animate([
        {transform: 'translateY(-30px)'}
    ], {
        delay: 66000, iterations: 1, duration: 1200, fill: "forwards", timing: "ease-in-out"
    })

    balloon1.animate([
        {transform: 'translateY(-600px)'}
    ], {
        delay: 5000, iterations: 1, duration: 5000, fill: "forwards", timing: "ease-in-out"
    })

    click.animate([
        {transform: 'translateY(1px)'}
    ], {
        delay: 67000, iterations: 1, duration: 1000, fill: "forwards", timing: "ease-in-out",
    });

});
