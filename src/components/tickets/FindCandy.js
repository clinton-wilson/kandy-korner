export const FindCandy = ({setterFunction}) => {
    return (
        <div>
            <input
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Search for candy here" />
        </div>
    )
}