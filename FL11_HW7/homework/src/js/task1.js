const MIN_USER_LENGTH = 6,
    MIN_PASSWORD_LENGTH = 5;

let userEmail = prompt('Write your email:'),
    userPassword, changePassword,
    checkPassword, correct;

for (let i = 1; i > 0; i--) {

    if (!userEmail) {
        alert('Canceled');
        break;
    } else if (userEmail.length < MIN_USER_LENGTH) {
        alert(`I don't know any emails having name length less than 6 symbols.`);
        break;
    } else if (userEmail === 'user@gmail.com' ||
        userEmail === 'admin@gmail.com') {
        userPassword = prompt('Write your password:');
    } else {
        alert(`I don’t know you`);
        break;
    }

    if (!userPassword) {
        alert('Canceled');
        break;
    } else if (userEmail === 'user@gmail.com' &&
        userPassword === 'UserPass' ||
        userEmail === 'admin@gmail.com' &&
        userPassword === 'AdminPass') {
        changePassword = confirm('Do you want to change your password?');
    } else {
        alert('Wrong password');
        break;
    }

    if (!changePassword) {
        alert('You have failed the change.');
        break;
    }

    checkPassword = prompt('Write your old password:');

    if (!checkPassword) {
        alert('Canceled');
        break;
    } else if (userEmail === 'user@gmail.com' &&
        checkPassword === 'UserPass' ||
        userEmail === 'admin@gmail.com' &&
        checkPassword === 'AdminPass') {
        correct = true;
    } else {
        alert('Wrong password');
        break;
    }

    do {
        userPassword = prompt('Write your new password:');

        if (!userPassword) {
            break;
        } else if (userPassword.length < MIN_PASSWORD_LENGTH) {
            alert(`It’s too short password. Sorry.`);
            continue;
        } else {
            break;
        }

    } while (correct);

    if (!userPassword) {
        alert('Canceled');
        break;
    }

    do {
        checkPassword = prompt('Write your new password again:');

        if (checkPassword === userPassword) {
            alert('You have successfully changed your password.');
            break;
        } else {
            alert('You wrote the wrong password');
        }
    } while (checkPassword);

    if (!checkPassword) {
        alert('Canceled');
        break;
    }

}