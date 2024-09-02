import React from 'react';
import "./TableComponent.css";

const TableComponent = ({ headers, data, hasError, errorMsg }) => {
    return (
        !hasError ? 
            <div className="table-responsive">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            { headers.map(header => <th key={header.name}>{header.displayName}</th>) }
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((row, index) => 
                            <tr key={"entry_" + index}>
                                {Object.entries(row).map(([key, value]) => <th key={key + "_" + index}>{value}</th>)}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        :
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{errorMsg}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;