// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


// Responses
function talk() {
    var know = {
      "Hi": "Hello, have any questions?",
      "hi": "Hello, have any questions?",
      "Hello": "Hi",
      "hello": "Hi",
      "Good Morning": "Good Morning to you too!",
      "good morning": "Good Morning to you too!",
      "Good morning": "Good Morning to you too!",
      "Good Afternoon": "Good Afternoon to you too!",
      "good afternoon": "Good Afternoon to you too!",
      "Good afternoon": "Good Afternoon to you too!",
      "ok": "Okay?",
      "Ok": "Okay?",
      "OK": "Okay?",
      "Bye": "Okay! see you in a bit..(pun intended)",
      "BYE": "Okay! see you in a bit..(pun intended)",
      "bye": "Okay! see you in a bit..(pun intended)",
      "Yes": "Okay, what is it?",
      "yes": "Alright, Ready to answer!",
      "": "Hello, how may I help you today?"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
      document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br> please explain more!";
    }
  }