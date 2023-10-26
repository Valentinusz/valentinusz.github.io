import React from "react";
import styles from './styles.module.scss';
import {Handle} from "reactflow";
import {Position} from "reactflow";
import DatabaseTable from "../DatabaseTable/DatabaseTable";

/**
 * @param name {string}
 * @param tableData {[{columnName: string, columnType: string, description: string}]}
 * @constructor
 */
export default function DatabaseTableNode({data: {name, columns}}) {
    return (
        <div className={styles.container}>
            <Handle id='top' type="source" position={Position.Top} />
            <Handle id='bottom' type="source" position={Position.Bottom} />
            <Handle id='left' type="source" position={Position.Left} />
            <Handle id='right' type="source" position={Position.Right} />
            <h3>{name}</h3>
            <DatabaseTable className={styles.node} columns={columns}/>
        </div>
    );
}
