<script lang="ts">
    import { RevoGrid } from "@revolist/svelte-datagrid";
    import { defineCustomElements } from '@revolist/revogrid/loader';
    import { generateFakeDataObject } from "../utils/mockData";

    let source: ReturnType<typeof generateFakeDataObject>["source"];
    let columns: ReturnType<typeof generateFakeDataObject>["headers"];

    // define webcomponent element in DOM
    defineCustomElements().then(() => {
        const data = generateFakeDataObject(1000, 100);

        source = data.source;
        columns = data.headers;
    });
</script>

<style>
	revo-grid {
	  height: 100%;
	}
</style>

<RevoGrid on:beforeedit={console.log} {source} resize="true" {columns} theme="material"/>
