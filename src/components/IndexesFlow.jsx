import React from "react";
import SystemCatalogsFlow from "./SystemCatalogsFlow/SystemCatalogsFlow";

export default function IndexesFlow({height = '35em'}) {
//     console.log(JSON.stringify(
//         `VARCHAR2 INDEX_NAME "az index neve"
// VARCHAR2 COMPOSITE "YES, ha lokális index, különben NO"
// VARCHAR2 PARTITION_NAME "Partíció neve"
// NUMBER SUBPARTITION_COUNT "Alpartíciók száma"`.split('\n').map(line => ({
//             columnType: line.split(" ")[0],
//             columnName: line.split(" ")[1],
//             description: line.split(" ").slice(2).join(" ").replaceAll('"', "")
//         }))))

    const initialNodes = [
        {id: '1', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/index.json')},
        {id: '2', type: 'databaseTable', position: {x: 300, y: 0}, data: require('../../static/table/ind_column.json')},
        {id: '3', type: 'databaseTable', position: {x: 300, y: 250}, data: require('../../static/table/ind_expression.json')},
    ];

    const initialEdges = [
        {id: 'edge-1', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'left', label: "(OWNER, INDEX_NAME) 1:N (INDEX_OWNER, INDEX_NAME)"},
    ];

    return <div style={{width: '100%', height}}><SystemCatalogsFlow initialNodes={initialNodes}
                                                                    initialEdges={initialEdges}/></div>;
}
