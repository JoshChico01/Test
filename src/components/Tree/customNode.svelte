<script>
  import { Position, Handle } from '@xyflow/svelte';
  import BarChart from './BarChart.svelte';
  import { writable } from 'svelte/store';

  

  //export let id;
  export let data;

  let barData = getData(data.label)

  function getData(key) {
    return [
    { label: 'True', value: (Math.random()*1000) },
    { label: 'False', value: (Math.random()*500) }
    ];
  }

</script>

<div class="customNode" style="{data.style}">
  <Handle type="source" position={Position.Bottom} />
  <Handle type="target" posit ion={Position.Top} />
  <div class="nodeLabel">{data.label}</div>
  {#if (data.graph) && (data.label != "Accepted") && (data.label != "Rejected")}
  <BarChart {barData} />
  {/if}
</div>

<style>
  .customNode {
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