import { useRef } from "react";

const Search = ({ searchUsername}) => {
    const inputRef = useRef();
    const searched = e => {
        e.preventDefault();
        // console.log(inputRef.current.value);
        const searchKeyword = inputRef.current.value;
        searchUsername(searchKeyword);
    }

    return (
        <div className="card search">
            <form onSubmit={searched}>
                <h2>Search Username</h2>
                <input type="text" ref={inputRef} />
                <button>search</button>
            </form>
        </div >
    )
}
export default Search; 