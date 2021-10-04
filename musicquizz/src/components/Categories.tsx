import {database, ref, set} from "../initFirebase";

interface StartProps {

}

//Db Example
/*const categories = ref(database, "categories");*/

function Categories(props: StartProps) {
    return <span>Hello, categories!</span>
}


export default Categories
