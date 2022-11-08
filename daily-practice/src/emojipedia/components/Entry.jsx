function Entry(props) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.name}
                </span>
                <span>{props.emoji}</span>
            </dt>
            <dd>
                {props.description}
            </dd>
        </div>
    )
}

export default Entry;