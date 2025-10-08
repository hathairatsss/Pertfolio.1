window.onload = function () {
    document.getElementById("top").innerHTML = "Welcome to the Forum";
};

// Use a counter to decide which box to post to.
let postCounter = 0;

function postFunction() {
    let message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please type your message.");
        return;
    }

    let targetElement;
    if (postCounter === 0) {
        // Target the 'topic' div first.
        targetElement = document.getElementById("topic");
        targetElement.textContent = "Topic: " + message;
        postCounter++;
    } else if (postCounter === 1) {
        // Then, the 'reply1' div.
        targetElement = document.getElementById("reply1");
        targetElement.textContent = "Reply 1: " + message;
        postCounter++;
    } else if (postCounter === 2) {
        // Then, the 'reply2' div.
        targetElement = document.getElementById("reply2");
        targetElement.textContent = "Reply 2: " + message;
        postCounter++;
    } else {
        alert("No more space for new posts.");
        return;
    }

    // Clear the input box after posting.
    document.getElementById("message").value = "";
}

function clearFunction() {
    // Clear the content of all three display divs.
    document.getElementById("topic").textContent = "";
    document.getElementById("reply1").textContent = "";
    document.getElementById("reply2").textContent = "";
    document.getElementById("message").value = "";
    postCounter = 0; // Reset the counter to start over.
}

