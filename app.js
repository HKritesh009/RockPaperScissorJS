const userOp = document.querySelector(".user").children;
const userOp1 = document.querySelector(".user");

const rock = document.querySelector("#rock");

const gamemsg = document.querySelector("#gamemsg");

Array.from(userOp).forEach((element) => {
    element.addEventListener("click", () => {
        let url = element.querySelector("img").src;
        animation();
        setTimeout(() => {
            userSelect(url);
            cpuSelect();
            winer();
        }, 2000);
        setTimeout(() => {
            deselect();
        }, 4000)
        userOp1.classList.add("stopclick");
        setTimeout(() => {
        userOp1.classList.remove("stopclick");
        }, 5000);
    })
});

function animation() {
    let box1 = document.querySelector("#img1");
    let box2 = document.querySelector("#img2");

    box1.classList.add("wave-image")
    box2.classList.add("wave-image2")

    setTimeout(() => {
        box1.classList.remove("wave-image")
        box2.classList.remove("wave-image2")
    }, 3000)
}

function userSelect(src) {
    let box = document.querySelector("#img1");
    box.src = src;

}
function cpuSelect() {
    let index = Math.floor(Math.random() * 3);
    let url = userOp[index].querySelector("img").src;
    let box = document.querySelector("#img2");
    box.src = url;

}

function deselect() {
    let box = document.querySelector("#img2");
    let box2 = document.querySelector("#img1");
    box.src = rock.src;
    box2.src = rock.src;

}

function winer() {
    let box = document.querySelector("#img1").src;
    let box2 = document.querySelector("#img2").src;
    let winner;

    if (box.includes("rock") && box2.includes("paper")) {
        winner = "cpu won";
    }
    else if (box.includes("rock") && box2.includes("scissor")) {
        winner = "User won";
    }
    else if (box.includes("paper") && box2.includes("rock")) {
        winner = "User won";
    }
    else if (box.includes("paper") && box2.includes("scissor")) {
        winner = "cpu won";
    }
    else if (box.includes("scissor") && box2.includes("rock")) {
        winner = "cpu won";
    }
    else if (box.includes("scissor") && box2.includes("paper")) {
        winner = "User won";
    }
    else {
        winner = "its a draw!!!";
    }
    gamemsg.innerText = winner;
}