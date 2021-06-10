

function sayHi() {
    var today = new Date();
    var hourNow = today.getHours();

    if (hourNow > 18) {
        alert ('Good evening cutie! Am I playing Minecraft or am I thinking about you? Or is it both.')
    }
    else if (hourNow > 12) {
        alert ('Good afternoon sweetheart! I hope you will have an amazing day today. Reminder: you are the most beautiful and perfect girl in the universe.')
    }
    else if (hourNow > 0) {
        alert ('Good morning beautiful! I hope you did not sleep too late last night. Go get Dutch')
    }
    else {
        alert ('My heart belongs to you and I will love you until the end of time')
    }
}
setTimeout(sayHi, 1000);


