import GoogleAuth from "../GoogleAuth/GoogleAuth";
import {useState} from "react";
import './Start.style.scss';
import {Link} from "react-router-dom";

type StartProps = {};

function Start(props: StartProps) {

    const [username, setUsername] = useState("");
    const usernameChanged = (value: string) => {
        setUsername(value);
    };

    const saveUsername = () => {
        localStorage.setItem('username', username);
    };

    return <div className="start-container">
        <h1>Hello, Quizz!</h1>
        <h2>Please enter your name</h2>
        <input type="text" value={username} onChange={(e) => usernameChanged(e.target.value)} placeholder="Player name" />
        <h4>or</h4>
        <GoogleAuth setUsername={setUsername} />

        <div className="start-quiz-sections">
            <Link to='/quizz/categories'>
                <button disabled={!username.length} onClick={saveUsername}>Start Quizz</button>
            </Link>
        </div>

    </div>
}


export default Start
