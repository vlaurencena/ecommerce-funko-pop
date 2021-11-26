const UniverseFilter = (props) => {

    const convertSlugToString = (slug) => {
        return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    return (
        <>
            <div className="universe-filter">
                <p className="universe-filter__title">Filter by universe</p>
                <ul onChange={props.handleUniverseChange}>
                    {props.universes.map(universe => {
                        return (
                            <>
                                {props.reloadCheckboxes ? null :
                                <li key={universe} className="universe-filter__checkbox">
                                    <label htmlFor={universe}>{convertSlugToString(universe)}</label>
                                    <input id={universe} name={universe} type="checkbox" />
                                </li>}
                            </>
                        )
                    })}
                </ul>
                <button onClick={props.clearUniverseSelection}>CLEAR SELECTION</button>
            </div>
        </>
    )
}

export default UniverseFilter;