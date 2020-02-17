/*
 This script was meant to control a countdown div on the landing page.
 It was to remove the countdown and the register buttons after the deadline.
 It's obviously not used anymore.
 Thank you for coming to my TED Talk.
*/

const DEADLINE_DATE = CONSTANTS.DEADLINE_DATE;
const deadlineSecs = Math.floor(Date.parse(DEADLINE_DATE) / 1000);

const deadlineCheck = () => {
    ETA = deadlineSecs - Math.floor(Date.now() / 1000);
    if ((ETA) <= 0) {
        $('#countdown-span').css({
            "display": "none"
        })
        $('#register-btn').css({
            "display": "none"
        })
        $('.navbar-register').css({
            "display": "none"
        })
        $('#applications-closed-message').css({
            "display": "block"
        })
    }
}

deadlineCheck();
setInterval(deadlineCheck, 1000);