export const TableBody = ({ tbodyData, tbodyDataKey }) => {
    return (
        <>
            <tbody>
                {tbodyData.map((data, index) => (
                    <tr key={index}>{
                        tbodyDataKey.map((key, innerIndex) => (
                            <td key={innerIndex}>{data[key]}</td>
                        ))
                    }
                    </tr>
                ))}
            </tbody>
        </>
    )
}
