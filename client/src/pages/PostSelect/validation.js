export default function validate(value) {
    let errors = {};

    if (value.comment === 0) {
        errors.comment= 'You must provide a comment to submit.';
    } 
    
    return errors;
}

// const [errors, setError] = useState({});
// const submitError = validate(comment);
// if(submitError.length > 0) {
//     console.log({submitError})
//     setError(submitError);
//     console.log('This statement is also working')
//     setLoading(false);
// } else { 