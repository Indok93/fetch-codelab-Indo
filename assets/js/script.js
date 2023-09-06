

async function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let count = 5;

    while (count >= 1) {
        countdownElement.textContent = count;
        await sleep(1000); // Vent i 1 sekund (1000 millisekunder)
        count--;
    }

    countdownElement.textContent = "Færdig!";

    await sleep(2000);

    startCountdown();
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
startCountdown();