import React from 'react';
import "./TableComponent.css";

const TableComponent = ({ headers, data, hasError, errorMsg, callBackClick }) => {
    return (
        !hasError ? 
            <div className="table-responsive">
                <table className="table table-sm table-striped table-hover">
                    <thead>
                        <tr>
                            { headers.map(header => <th key={header.name} id={header.name}>{header.displayName}</th>) }
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((row, index) => 
                            <tr id={index} key={"entry_" + index} onClick={() => callBackClick(index)}>
                                {Object.entries(row).map(([key, value]) => <td className='cell' id={key + "_" + index} key={key + "_" + index}>{value}</td>)}
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