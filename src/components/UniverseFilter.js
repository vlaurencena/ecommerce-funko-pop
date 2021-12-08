import CustomLinkButton from "./CustomLinkButton";

const UniverseFilter = (props) => {

    const convertSlugToString = (slug) => {
        return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    return (
        <>
            <div className="universe-filter">
                <p className="universe-filter__title">Filter by universe</p>
                <ul className="universe-filter__list">
                    {props.universes.map(universe => {
                        return (
                            <li key={universe} className="universe-filter__checkbox">
                                <label htmlFor={universe}>{convertSlugToString(universe)}</label>
                                <input
                                    onChange={props.handleUniverseChange}
                                    id={universe}
                                    name={universe}
                                    type="checkbox"
                                    checked={props.selectedUniverses.includes(universe) ? true : false} />
                            </li>
                        )
                    })}
                </ul>
                <CustomLinkButton
                    onClick={props.clearUniverseSelection}
                    text="CLEAR SELECTION"
                    type="button"
                    color="dark"
                />
            </div>
        </>
    )
}

export default UniverseFilter;