import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QuestionList from './QuestionList';
import { ChakraProvider } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const Homepage = () => {
    return (
        <div className='container'>
            <h1>Homepage</h1>
            <p className='lead'>this home its working, finally i made it! and now i have to make some changes</p>
            <QuestionList/>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
});

export default Homepage;