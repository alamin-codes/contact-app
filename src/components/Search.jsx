
const Search = ({ onSearch }) => {
    return (
        <div>
            <form action="#" className="mb-3">
                <input type="search" placeholder="Search by phone" onChange={(e) => onSearch(e.target.value)} className="border me-2 rounded outline-0" />
                <input type="submit" value="Search" className="border rounded px-1" />
            </form>
        </div>
    )
}

export default Search;