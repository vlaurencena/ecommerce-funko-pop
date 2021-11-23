const SortBy = (props) => {
    return (
        <select className="sort-by" onChange={props.handleSortByChange}>
            <option a="a" value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="price-low-high">Price (low to high)</option>
            <option value="price-high-low">Price (high to low)</option>
        </select>
    )
}

export default SortBy;