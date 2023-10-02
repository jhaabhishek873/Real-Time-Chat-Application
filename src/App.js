import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App =()=>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height="100vh"
            projectID="
            b0129bbc-f958-42a8-94bf-73213fb15386"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}
        />}
        />
    );
}

export default App;