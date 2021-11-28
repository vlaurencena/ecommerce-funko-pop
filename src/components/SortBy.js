const SortBy = (props) => {



    return (
        <div className="sort-by-container">
        <div>({props.numberOfItems}) results</div>
        <select className="sort-by-select" onChange={props.handleSortByChange}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="price-low-high">Price (low to high)</option>
            <option value="price-high-low">Price (high to low)</option>
        </select>
        </div>
    )
}

export default SortBy;