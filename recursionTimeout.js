var subscribeToggle = document.querySelectorAll('paper-button.style-scope.ytd-subscribe-button-renderer');
var subCount = subscribeToggle.length;
i = 0;


function unsub(){
    if(i < subCount){
        setTimeout(()=>{
            if(subscribeToggle[i].ariaLabel.toString().includes('Unsubscribe from')){
                subscribeToggle[i].click();
                setTimeout(()=>{
                    console.log('Inside');
                    var subPopup = document.getElementsByClassName('style-scope yt-button-renderer style-blue-text size-default');
                    subPopup.button.click();
                    i += 1;
                    console.log(i);
                    unsub();
                }, 2000);
            }
        }, 500);
    }
}


// var x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
// var i = 0;

// function a(){
//     if(i < 10){
//         setTimeout(()=>{
//             console.log(x[i]);
//             a();
//             i += 1;
//         }, 500);
//     }
// }

// a();

{/* <paper-button noink="" class="style-scope ytd-subscribe-button-renderer" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" subscribed="" aria-label="Unsubscribe from A Chick Called Albert. 1.75M subscribers"><!--css-build:shady-->
      <yt-formatted-string class="style-scope ytd-subscribe-button-renderer">Subscribed</yt-formatted-string>
    <paper-ripple class="style-scope paper-button"><!--css-build:shady-->

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></paper-button> */}