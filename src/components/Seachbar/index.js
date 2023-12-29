import React, {useState, useCallback} from 'react';
import searchIcon from "../../assets/search.png";
import "./index.css"

const Searchbar = ({handleSubmit}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputValueChange = useCallback((event) => {
        setInputValue(event.target.value)
    }, [])


    return (
        <div className="inputContainer">
            <input value={inputValue} onChange={handleInputValueChange} placeholder="Search..." className="search"/>
            <button onClick={() => handleSubmit(inputValue)} className="searchButton"><img height={13} width={13}
                                                                                           alt="search"
                                                                                           src={searchIcon}/>
            </button>

        </div>
    );
};

export default Searchbar;
