import SearchIcon from '@mui/icons-material/Search';
import {SyntheticEvent, useState, useRef, useEffect} from "react";
import classes from "./SearchBar.module.scss";
import {RouteComponentProps} from "react-router-dom";
import {constants} from "../shared/appConstants";

const SearchBar = (props:RouteComponentProps)=>{
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Click Search Icon set input visible.
     */
    useEffect(() => {
        if (searchBarVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchBarVisible]);

    const handleSearch =(event:SyntheticEvent)=> {
        event.preventDefault();

        console.log("search triggered!");
        // TODO: actions
        props.history.push(`${constants.productRoute}?search=${searchTerm}`)
    }

    const handleSearchTermChange =(event:SyntheticEvent) =>{
        setSearchTerm((event.target as HTMLInputElement).value);
    }

    return(
        <div className={classes.Container}>
            <form onSubmit={handleSearch}
                  style={{visibility:searchBarVisible? "visible":"hidden"}}>
                <input type="text" value={searchTerm}
                       className={classes.Input}
                       onChange={handleSearchTermChange}
                       onBlur={()=>{setSearchBarVisible(false)}}
                       ref={inputRef}
                />
            </form>
            <SearchIcon className={classes.Icon} onClick={()=>{setSearchBarVisible(true)}}/>
        </div>
    )
}

export default SearchBar;