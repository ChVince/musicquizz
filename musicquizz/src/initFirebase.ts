import * as firebase from "firebase/app"
import "firebase/auth"
import {getDatabase, ref, set} from "firebase/database"


type FirebaseApp = ReturnType<typeof firebase.initializeApp>
type Database = ReturnType<typeof getDatabase>

let app: FirebaseApp;
let database: Database;

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.farebaseio.com`,
    projectId: process.env.FIREBASE_PROJECT_ID
}


function initFirebase() {
    if (!firebase.getApps().length) {
        app = firebase.initializeApp(config);
        database = getDatabase(app);
    }
}

initFirebase();

export { firebase, database, ref, set, app }
