const STARTING_MESSAGE = 'Do you want to play a game?',
    CANCEL_MESSAGE = 'You did not become a billionaire, but can.',
    RISE_NUMBERS_RANGE = 4,
    RISE_PRIZE = 2,
    SECOND_PRIZE = 50,
    THIRD_PRIZE = 25,
    FIRST_ATTEMPT = 3,
    ONE = 1,
    ZERO = 0;

let answer = confirm(STARTING_MESSAGE),
    answerStatus = answer ? answer : CANCEL_MESSAGE,
    gameStatus, restartStatus;

if (answerStatus !== CANCEL_MESSAGE) {

    do {

        let maxSecretNumber = 9,
            prizeQuality = ONE,
            totalPrizeValue = ZERO;

        restartStatus = '';

        do {
            let attempts = 3,
                prizeValue = 100;

            gameStatus = '';

            for (; attempts >= ZERO; attempts--) {

                if (attempts === ZERO) {
                    totalPrizeValue = 0;
                    break;
                }
                
                if (attempts === FIRST_ATTEMPT) {
                    prizeValue *= prizeQuality;
                }

                let secretNumber = Math.floor(Math.random() * maxSecretNumber),
                    briefingMessage = `Choose a roulette pocket number from 0 to ${maxSecretNumber - ONE}
Attempts left: ${attempts}
Total prize: ${totalPrizeValue}$
Possible prize on current attempt: ${prizeValue}$`,
                    userGuessNumber = prompt(briefingMessage);

                if (!(userGuessNumber === '0') && !userGuessNumber) {
                    continue;
                }

                userGuessNumber = Number(userGuessNumber);

                if (secretNumber === userGuessNumber) {
                    totalPrizeValue += prizeValue;

                    let winMessage = `Congratulation, you won!
Your prize is: ${totalPrizeValue}$.
Do you want to continue?`;

                    gameStatus = confirm(winMessage);
                    break;
                } else if (attempts === FIRST_ATTEMPT) {
                    prizeValue -= SECOND_PRIZE * prizeQuality;
                } else {
                    prizeValue -= THIRD_PRIZE * prizeQuality;
                }
            }
            maxSecretNumber += RISE_NUMBERS_RANGE;

            if (prizeQuality === ONE) {
                prizeQuality++;
            } else {
                prizeQuality += RISE_PRIZE
            }
        } while (gameStatus);

        let endMessage = `Thank you for your participation.
Your prize is: ${totalPrizeValue}$`;

        alert(endMessage);
        restartStatus = confirm('Do you want to play again?');
    } while (restartStatus);
} else {
    alert(answerStatus);
}