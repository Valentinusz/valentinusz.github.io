import { useRef, useCallback, useState } from 'react';
import ReactFlow, {addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls} from 'reactflow';
import 'reactflow/dist/style.css';

import DatabaseTableNode from "../DatabaseTableNode/DatabaseTableNode";
import {ControlButton} from "@reactflow/controls";
import OpenInFullIcon from "../../../static/img/open_in_full.svg"

const nodeTypes = { databaseTable: DatabaseTableNode };

export default function SystemCatalogsFlow({initialNodes = [], initialEdges = []}) {
    if (initialNodes.length === 0) {
        console.error("No nodes provided.")
        return null;
    }

    const flowElement = useRef(0);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            flowElement.current.requestFullscreen().then();
        } else if (document.exitFullscreen) {
            document.exitFullscreen().then();
        }
    }

    return (
        <ReactFlow
            ref={flowElement}
            nodes={nodes} onNodesChange={onNodesChange}
            edges={edges} onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            onConnect={onConnect} connectionMode='loose' nodesConnectable={false}
            fitView
        >
            <Background color='#ccc' variant='dots'/>
            <Controls>
                <ControlButton onClick={toggleFullScreen} title='fullscreen'>
                    <OpenInFullIcon/>
                </ControlButton>
            </Controls>
        </ReactFlow>
    );
}
