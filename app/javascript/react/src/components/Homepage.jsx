import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import QuestionList from './QuestionList';
import { ChakraProvider } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

class Homepage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-2'>
                    <div className='col-lg-10 mx-auto'>
                        <h1>React Rails Q&A Blog!</h1>
                        <p className='lead'>Welcome to our Interview Q&A Blog!, right now mostly about ReactJS and Rails</p>
                    </div>
                </div>
                <QuestionList/>
            </div>
        );
     }
};
const root = ReactDOM.createRoot(document.getElementById('homepage'));
root.render(
    <React.StrictMode>
        <Homepage/>
    </React.StrictMode>
)

/* document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}); */

export default Homepage;