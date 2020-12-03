export default function validate(values) {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'First name must be at least 2 characters';
    }
    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Last name must be at least 2 characters';
    }
    if (!values.email) {
        errors.email = 'Email addrres is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email addrress is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Password must be confirmed';
    } else if (values.password !== values.confirmPassword) {
        errors.password = 'Passwords must be the same';
    }
    
    return errors;
}

