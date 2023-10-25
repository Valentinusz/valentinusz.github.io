import React from "react";
import SystemCatalogsFlow from "./SystemCatalogsFlow/SystemCatalogsFlow";
import extents from "../../static/table/extent.json";

export default function AllViewsFlow({height = '35em'}) {
    const initialNodes = [
        {id: '3', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/data_file.json')},
        {id: '4', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/extent.json')},
        {id: '5', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/tablespace.json')},
        {id: '6', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/index.json')},
        {id: '7', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/ind_column.json')},
        {id: '8', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/ind_expression.json')},
    ];

    const initialEdges = [
        {id: 'edge-1', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'left', label: "(OWNER, INDEX_NAME) 1:N (INDEX_OWNER, INDEX_NAME)"},
    ];

    return <div style={{width: '100%', height}}><SystemCatalogsFlow initialNodes={initialNodes}
                                                                    initialEdges={initialEdges}/></div>;
}
