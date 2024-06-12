const form = document.getElementById('form')
const name = document.getElementById('name');
const number = document.getElementById('number');
const vote = document.getElementById('vote');

form.addEvenListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDsiplay = inputControl.querySelector('.error');

    errorDsiplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDsiplay = inputControl.querySelector('.error');

    errorDsiplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const nameValue = Name.value.trim();
    const numberValue = number.value.trim();
    const voteValue = vote.value.trim();

    if(nameValue === '') {
        setError(Name, 'contenstant name is required');
    } else {
        setSuccess(Name);
    }

    if(numberValue === '') {
        setError(number, 'contentant number is required' );
    } else {
        setSuccess(number);
    }
    
    if(voteValue === '') {
        setError(vote, 'write amount of votes' );
    } else {
        setSuccess(vote);
    }
};
