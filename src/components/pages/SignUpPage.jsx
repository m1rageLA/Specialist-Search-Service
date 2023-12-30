import React from 'react';
import "./styles/css/pages.css"
import TextField from '@mui/material/Button';

const SignUpPage = () => {
    function request1() {
        db.Users.findAll().then(result => {
            console.log(result);
        });
    }
    return (
        <div className='signUp'>
            
            <form>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <button onClick={request1}>ЗАПРОС</button>
            </form>
        </div>
    );
}

export default SignUpPage;
