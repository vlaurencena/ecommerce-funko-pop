const PageTitle = (title) => {
    return (
        <div className="page-title-container">
            <div className="page-title-container__secondary">{title.secondary}</div>
            {title.main && <div className="page-title-container__main">{title.main.toUpperCase()}</div>}
        </div>
    )
}

export default PageTitle;
