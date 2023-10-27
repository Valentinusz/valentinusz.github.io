import SystemCatalogsFlow from './SystemCatalogsFlow/SystemCatalogsFlow';

const initialNodes = [
    {id: 'OBJECT', type: 'databaseTable', position: {x: 0, y: 0}, data: require('../../static/table/object.json')},
    {id: 'TAB_COL', type: 'databaseTable', position: {x: 800, y: 0}, data: require('../../static/table/tab_col.json')},
    {id: 'DATA_FILE', type: 'databaseTable', position: {x: 0, y: 1000}, data: require('../../static/table/data_file.json')},
    {id: 'SEGMENT', type: 'databaseTable', position: {x: 0, y: 500}, data: require('../../static/table/segment.json')},
    {id: 'EXTENT', type: 'databaseTable', position: {x: 600, y: 500}, data: require('../../static/table/extent.json')},
    {id: 'TABLE_SPACE', type: 'databaseTable', position: {x: 750, y: 1000}, data: require('../../static/table/tablespace.json')},
    {id: 'INDEX', type: 'databaseTable', position: {x: -600, y: 0}, data: require('../../static/table/index.json')},
    {id: 'IND_COLUMN', type: 'databaseTable', position: {x: -800, y: 500}, data: require('../../static/table/ind_column.json')},
    {id: 'IND_EXPRESSION', type: 'databaseTable', position: {x: -800, y: 1000}, data: require('../../static/table/ind_expression.json')},
    {id: 'PART_TABLE', type: 'databaseTable', position: {x: 0, y: -350}, data: require('../../static/table/part_table.json')},
    {id: 'TAB_PARTITION', type: 'databaseTable', position: {x: 600, y: -350}, data: require('../../static/table/tab_partition.json')},
    {id: 'PART_KEY_COLUMN', type: 'databaseTable', position: {x: 1200, y: -350}, data: require('../../static/table/part_key_column.json')},
    {id: 'SUB_PARTITION', type: 'databaseTable', position: {x: 600, y: -700}, data: require('../../static/table/sub_partition.json')},
    {id: 'SUBPART_KEY_COLUMN', type: 'databaseTable', position: {x: 1200, y: -700}, data: require('../../static/table/subpart_key_column.json')},
    {id: 'PART_INDEX', type: 'databaseTable', position: {x: -600, y: -350}, data: require('../../static/table/part_index.json')},
    {id: 'IND_PARTITION', type: 'databaseTable', position: {x: -600, y: -700}, data: require('../../static/table/ind_partition.json')},
];

const initialEdges = [
    {id: 'edge-1', source: 'OBJECT', target: 'TAB_COL', sourceHandle: 'right', targetHandle: 'left', label: "1:N"},
    {id: 'edge-2', source: 'OBJECT', target: 'SEGMENT', sourceHandle: 'bottom', targetHandle: 'top', label: "1:N"},
    {id: 'edge-3', source: 'SEGMENT', target: 'EXTENT', sourceHandle: 'right', targetHandle: 'left', label: "1:N"},
    {id: 'edge-4', source: 'DATA_FILE', target: 'SEGMENT', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"},
    {id: 'edge-5', source: 'DATA_FILE', target: 'EXTENT', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"},
    {id: 'edge-6', source: 'TABLE_SPACE', target: 'EXTENT', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"},
    {id: 'edge-7', source: 'TABLE_SPACE', target: 'SEGMENT', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"},
    {id: 'edge-8', source: 'OBJECT', target: 'INDEX', sourceHandle: 'left', targetHandle: 'right', label: "1:N"},
    {id: 'edge-9', source: 'INDEX', target: 'IND_COLUMN', sourceHandle: 'bottom', targetHandle: 'top', label: "1:N"},
    {id: 'edge-10', source: 'IND_COLUMN', target: 'IND_EXPRESSION', sourceHandle: 'bottom', targetHandle: 'top', label: "1:N"},
    {id: 'edge-11', source: 'OBJECT', target: 'PART_TABLE', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"},
    {id: 'edge-12', source: 'PART_TABLE', target: 'TAB_PARTITION', sourceHandle: 'right', targetHandle: 'left', label: "1:N"},
    {id: 'edge-13', source: 'TAB_PARTITION', target: 'PART_KEY_COLUMN', sourceHandle: 'right', targetHandle: 'left', label: "1:N"},
    {id: 'edge-14', source: 'TAB_PARTITION', target: 'SUB_PARTITION', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"},
    {id: 'edge-15', source: 'TABLE_SPACE', target: 'DATA_FILE', sourceHandle: 'left', targetHandle: 'right', label: "1:N"},
    {id: 'edge-16', source: 'PART_INDEX', target: 'PART_TABLE', sourceHandle: 'right', targetHandle: 'left', label: "1:N"},
    {id: 'edge-17', source: 'PART_INDEX', target: 'INDEX', sourceHandle: 'bottom', targetHandle: 'top', label: "is a"},
    {id: 'edge-18', source: 'SUB_PARTITION', target: 'SUBPART_KEY_COLUMN', sourceHandle: 'right', targetHandle: 'left', label: "1:N"},
    {id: 'edge-19', source: 'PART_INDEX', target: 'IND_PARTITION', sourceHandle: 'top', targetHandle: 'bottom', label: "1:N"}
];

export default function AllViewsFlow({height = '35em'}) {
    return (
        <div style={{width: '100%', height}}>
            <SystemCatalogsFlow initialNodes={initialNodes} initialEdges={initialEdges}/>
        </div>
    );
}
