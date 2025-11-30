let messageCount = 0;

const selectBox = document.getElementById("selectBox");
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("clearBtn");

selectBox.addEventListener("change", function () {
    let value = selectBox.value;

    if (value === "") {
        msgBox.style.display = "none";
        return;
    }

    messageCount++;
    counter.textContent = "Messages shown: " + messageCount;

    if (value === "success") {
        msgBox.style.background = "green";
        msgBox.textContent = "✓ Operation successful!";
    }
    else if (value === "warning") {
        msgBox.style.background = "orange";
        msgBox.textContent = "⚠ Please review your input";
    }
    else if (value === "error") {
        msgBox.style.background = "red";
        msgBox.textContent = "✗ Something went wrong";
    }
    else if (value === "info") {
        msgBox.style.background = "blue";
        msgBox.textContent = "ℹ Here's some information";
    }

    msgBox.style.display = "block";
});

clearBtn.addEventListener("click", function () {
    selectBox.value = "";
    msgBox.style.display = "none";
});
