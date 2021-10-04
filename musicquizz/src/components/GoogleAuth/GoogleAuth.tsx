import GoogleLogin from 'react-google-login';
import { config } from '../../App.config';
import React from "react";

type GoogleAuthProps = {
    setUsername: (username: string) => void;
};

//Db Example
/*const categories = ref(database, "categories");*/

function GoogleAuth({ setUsername }: GoogleAuthProps) {

    //DZ TS argument type
    const responseGoogle = (response: any) => {
        setUsername(response.profileObj.name);
    };

    const errorGoogle = (response: any) => {
        alert('unexpected error');
        console.log(response);
    };

    return <GoogleLogin
        clientId={config.googleClientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={errorGoogle}
    />
}

export default GoogleAuth