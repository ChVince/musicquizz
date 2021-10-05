import * as firebase from "firebase/app"
import "firebase/auth"
import {getFirestore} from "firebase/firestore"


type FirebaseApp = ReturnType<typeof firebase.initializeApp>
type Database = ReturnType<typeof getFirestore>

let app: FirebaseApp;
let database: Database;

const config = {
    apiKey: "AIzaSyBTEnfBejDC-B_JwrobaAuvySDAbPvZ9rU",
    authDomain: `musicquizz-5fa2c.firebaseapp.com`,
    projectId: "musicquizz-5fa2c"
}


function initFirebase() {
    if (!firebase.getApps().length) {
        app = firebase.initializeApp(config);
        database = getFirestore(app);
    }
}

initFirebase();

export { firebase, database, app }
