const validateUserReg = (
    username,
    email,
    password,
    confirmPassword,
) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Username is required';
    }
    if (email.trim() === '') {
        errors.email = 'Email is required';
    } else {
        if (!email.match(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)) {
            errors.email = 'Invalid email address';
        }
    }
    if (password.trim() === '') {
        errors.password = 'Password is required';
    } else if ( password !== confirmPassword) {
        errors.confirmPassword = 'Password must match!'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

const validateUserLogin = (
    username,
    password
) => {
    const errors = {};  

    if (username.trim() === '') {
        errors.username = 'Username is required';
    }
    if (password.trim() === '') { 
    errors.password = 'Password is required';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports = validateUserLogin, validateUserReg