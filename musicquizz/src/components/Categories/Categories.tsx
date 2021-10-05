import {database} from "../../initFirebase";
import { collection, getDocs } from "firebase/firestore";
import './Categories.style.scss'
import {ChangeEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface StartProps {
    action: any
}

interface OptionProps {
    isSelected: boolean;
    text: string,
    value: any
}

interface DropdownProps {
    children?: any,
    selectedOption: string,
    onOptionChange: (option: string) => void
}

type Categories = Array<string>;


function Dropdown(props: DropdownProps) {
    const saveCategory = () => {
        localStorage.setItem('category', props.selectedOption);
    };

    return (
    <>
        <select
            className="categories-select"
            id="categories"
            onChange={(e) => props.onOptionChange(e.target.value)}
        >
            {props.children}
        </select>

        <Link to='/quizz/step/1'>
            <button className="categories-start-button" disabled={!props.selectedOption} onClick={saveCategory}>Start Quizz</button>
        </Link>
     </>
    )
}

function Option(props: OptionProps) {
    return (
        <option value={props.value}>{props.text}</option>
    )
}

function Categories(props: StartProps) {
    const [option, setOption] = useState("");
    const [categories, setCategories] = useState([] as Categories);

    const handleChange = (nextOption: string) => {
        setOption(nextOption);
    }

    const options = categories.map((item, idx) => {
        return <Option isSelected={false} text={item} value={item} key={idx}/>
    });

    const fetchCategories = (): Promise<Categories> => {
        return getDocs(collection(database, "categories")).then(qs => qs.docs.map(d => d.get("name")));
    }

    useEffect(() => {
        fetchCategories().then((c) => setCategories(c));
    })

    return (
        <>
            <h1>Choose music category</h1>
            <p> You Selected::::: {option}</p>

            <Dropdown onOptionChange={handleChange} selectedOption={option}>
                {options}
            </Dropdown>
        </>
    )
}

export default Categories
