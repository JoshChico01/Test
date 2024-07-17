<script>
    import { SvelteFlow, Handle, Position, Background, EdgeLabel, getBezierPath  } from '@xyflow/svelte';
    import { writable } from 'svelte/store';
    import "./style.css"

    import CustomNode from './customNode.svelte';

    import '@xyflow/svelte/dist/style.css';

    const nodeDefaults = {
      sourcePosition: Position.Up,
      targetPosition: Position.Down
    };

    const nodeTypes = {
        custom: CustomNode
    };

    
    // Initialize the nodes store
    let nodes = writable([
        {
            id: '1',
            data: { label: 'Node 1',graph: true, },
            type:"custom",
            position: { x: 100, y: 100 },
            style: "background-color: #C9E4D800;",            
            ...nodeDefaults
        },
        {
            id: '2',
            data: { label: 'Node 2',graph: true, },
            position: { x: 300, y: 300 },
            style: "background-color:#C9E4D8;",
            ...nodeDefaults
        }
    ]);

    let edges = writable([
        { type:'straight', id: 'e1-2', source: '1', target: '2', label : "True"}
    ]);
    let graphs = false;

    let editting = false;
    let edit_type = "node"
    let node_edit = $nodes[0];
    let edge_edit = $edges[0];

    let selectedId = writable(null);
    let newLabel = writable('');

    function importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                nodes.set(jsonData.nodes || []);
                edges.set(jsonData.edges || []);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };
        reader.readAsText(file);
    }

    // Function to add a new node
    function addNode() {
        const newNodeId = ($nodes.length + 1).toString();
        const newNode = {
            id: newNodeId,
            data: { label: `Node ${newNodeId}` },
            position: { x: Math.random() * 400, y: Math.random() * 400 },
            ...nodeDefaults
        };

        nodes.update(currentNodes => {
            return [...currentNodes, newNode];
        });

        selectedId = newNodeId
        editNode(newNodeId)
    }

    // Function to update node position
    function updateNodePosition(event, nodeId) {
        const newPosition = { x: event.detail.position.x, y: event.detail.position.y };
        nodes.update(currentNodes => {
            return currentNodes.map(node => {
                if (node.id === nodeId) {
                    return { ...node, position: newPosition };
                }
                return node;
            });
        });
    }

    // Function to export nodes and edges
    function exportData() {
        let nodesData, edgesData;
        nodes.subscribe(value => { nodesData = value; })();
        edges.subscribe(value => { edgesData = value; })();
        const data = {
            nodes: nodesData,
            edges: edgesData
        };
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'flow-data.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    function updateNode() {
        if(!selectedId) return;
        
        if (edit_type == 'node'){
            nodes.update(currentNodes => {
                return currentNodes.map(node => {
                    if (node.id === selectedId) {
                        return { ...node, data: { ...node.data, label: $newLabel }, style: "background-color:#C9E4D8" };
                    }
                    return node;
                });
            });
        }
        else if (edit_type == 'edge') {
            edges.update(currentEdges => {
                return currentEdges.map(edge => {
                    if (edge.id === selectedId) {
                    return { ...edge, label: $newLabel};
                    }
                 return edge;
                });
            });
        }
        

        closeEdit()
    }

    function makeRejected() {
        nodes.update(currentNodes => {
            return currentNodes.map(node => {
                if (node.id === selectedId) {
                    return { ...node, data: { ...node.data, label: "Rejected" }, style: "background-color:#D9534F" };
                }
                return node;
            });
        });
        closeEdit()
    }

    function makeAccepted() {
        nodes.update(currentNodes => {
            return currentNodes.map(node => {
                if (node.id === selectedId) {
                    return { ...node, data: { ...node.data, label: "Accepted" }, style: "background-color:#00966C" };
                }
                return node;
            });
        });
        closeEdit()
    }

    function getNode(id) {
        let output = 0
        $nodes.forEach(
            el => {
                if (el.id == id){
                    output = el
                }
            }
        )
        return output
    }

    function getEdge(id) {
        let output = 0
        $edges.forEach(
            el => {
                if (el.id == id){
                    output = el
                }
            }
        )
        return output
    }

    function editNode(id) {
        node_edit = getNode(id)
        edit_type = "node"
        editting = true;
        $newLabel = node_edit.data.label
    }

    function editEdge(id) {
        edge_edit = getEdge(id)
        edit_type = "edge"
        editting = true;

        if(edge_edit.label){
            $newLabel = edge_edit.label
        }
        else{
            $newLabel = ""
        }
    }

    function closeEdit() {
        editting = false;
    }

    // Function to select a node
    function selectNode(nodeId) {
        if (selectedId == nodeId) {
            editNode(nodeId)
        }
        selectedId = nodeId;
    }

    function selectEdge(edgeId) {
        
        if (selectedId == edgeId) {
            editEdge(edgeId)
        }
        selectedId = edgeId;
    }

    function showGraphs(){
        console.log($nodes)
        console.log(graphs)
        nodes.update(currentNodes => {
                return currentNodes.map(node => {
                    if (graphs) {                        
                        return { ...node, data: { ...node.data, graph: false } };                        
                    }
                    if (!graphs) {
                        return { ...node, data: { ...node.data, graph: true } };                        
                    }                    
                });
            });

        graphs = !graphs
        console.log(graphs)

    }

</script>

<div class="container">
    <SvelteFlow 
        {nodes} {edges} {nodeTypes}
        on:nodeDragStop={(event) => updateNodePosition(event, event.detail.node.id)} 
        on:nodeclick={(event) => selectNode(event.detail.node.id)}
        on:edgeclick={(event) => selectEdge(event.detail.edge.id)}
        defaultEdgeOptions={{ type: 'straight', animated: true }}
        style="position: absolute">
            <Background bgColor="#FFFFFF" patternColor="#00966C"/>
            
    </SvelteFlow>
    {#if (editting)}
    <div class="editor">
        <button class="close" on:click={closeEdit}>&#x274c</button>
        <h3 class="edit_header">Node Editor</h3>
        <p class="edit_label">Names: <input class="text_input" bind:value={$newLabel} > </p>
        {#if (edit_type == 'node')}
            <p class="edit_label">End Nodes:</p>
            <button class="defaultNodes" style="background-color: #00966C" on:click={makeAccepted}>Accepted</button>
            <button class="defaultNodes" style="background-color: #D9534F" on:click={makeRejected}>Rejected</button>

        {/if}
        <button class="done" on:click={updateNode}> &#x2714</button>
    </div>
    {/if}
    <button class="addNode" on:click={addNode}>Add Node</button>
    <button class="showGraphs" on:click={showGraphs}>Show Graph</button>
</div>

<button class="exportButton" on:click={exportData}>Export Data</button>

<label class="importButton" on:change={importData}>
    Choose file
    <input type="file" accept="application/json" on:change={importData} />
</label>