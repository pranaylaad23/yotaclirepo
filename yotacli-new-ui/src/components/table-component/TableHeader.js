export const TableHeader = ({ theadData }) => {
    return (
        <>
            <thead>
                <tr>
                    {
                        theadData.map((header, index) => {
                            return <th key={index}>{header}</th>
                        })
                    }
                </tr>
            </thead>
        </>
    )

}