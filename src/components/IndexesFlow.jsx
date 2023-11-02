import React from 'react';
import SystemCatalogsFlow from './SystemCatalogsFlow/SystemCatalogsFlow';

const initialNodes = [
    {id: '1', type: 'databaseTable', position: {x: 0, y: 0}, data: require('/static/data/databases2/schema/index.json')},
    {id: '2', type: 'databaseTable', position: {x: 300, y: 0}, data: require('/static/data/databases2/schema/ind_column.json')},
    {id: '3', type: 'databaseTable', position: {x: 300, y: 250}, data: require('/static/data/databases2/schema/ind_expression.json')},
];

const initialEdges = [
    {id: 'edge-1', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'left', label: '(OWNER, INDEX_NAME) 1:N (INDEX_OWNER, INDEX_NAME)'},
];

export default function IndexesFlow({height = '35em'}) {
    return (
        <div style={{width: '100%', height}}>
            <SystemCatalogsFlow initialNodes={initialNodes} initialEdges={initialEdges}/>
        </div>
    );
}
