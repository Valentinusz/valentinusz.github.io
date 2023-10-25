import React from "react";
import styles from './styles.module.scss';
import {Handle} from "reactflow";
import {Position} from "reactflow";

/**
 * @param title {string}
 * @param tableData {[{columnName: string, columnType: string, description: string}]}
 * @constructor
 */
export default function DatabaseTableNode({data: {title, tableData}}) {
    return <div className={styles.container}>
        <Handle id='a' type="source" position={Position.Bottom} isConnectable={true} />
        <Handle id='b' type="target" position={Position.Bottom} isConnectable={true} />
        <h3>{title}</h3>
        <table className={styles.node}>
            <thead>
            <tr>
                <th>Oszlop</th>
                <th>Típus</th>
                <th>Leírás</th>
            </tr>
            </thead>
            <tbody>
            {tableData.map(({columnName, columnType, description}) => (
                <tr key={columnName}>
                    <td>{columnName}</td>
                    <td>{columnType}</td>
                    <td>{description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}
