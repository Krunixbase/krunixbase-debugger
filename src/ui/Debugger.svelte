<script>
    export let logs = [];
</script>

<h2>Krunixbase Debugger</h2>

{#each logs as log}
<div>
    {log.level} - {log.message}
</div>
{/each}
