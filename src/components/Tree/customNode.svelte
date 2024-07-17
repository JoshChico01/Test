<script>
  import { Position, Handle } from '@xyflow/svelte';
  import BarChart from './BarChart.svelte';

  

  //export let id;
  export let data;

  export let label = data.label;

  export let graph = data.graph;

  let barData = getData(label)

  function getData(key) {
    return [
    { label: 'True', value: (Math.random()*1000) },
    { label: 'False', value: (Math.random()*500) }
    ];
  }
</script>

<div class="customNode">
  <Handle type="source" position={Position.Bottom} />
  <Handle type="target" posit ion={Position.Top} />
  <div class="nodeLabel">{label}</div>
  {#if graph}
  <BarChart {barData} />
  {/if}
</div>

<style>
  .customNode {
    background: #C9E4D8;
    padding: 12px;
    border-radius: 20px;
    border: 1px solid black;
  }

  .nodeLabel {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
</style>