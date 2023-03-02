import SearchIcon from "../icons/searchicon/SearchIcon";
import "./Search.scss";

const Search = ({ propsData }) => {
    return (
        <div className="search">
            <input className={propsData.borderRadiusInput} type="text" placeholder={propsData.placeholder} />
            <div className={`SearchIcon ${propsData.borderRadiusSearchIcon}`}>
                <SearchIcon />
            </div>
        </div>
    );
}
 
export default Search;