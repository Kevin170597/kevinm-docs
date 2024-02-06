<script lang="ts">
	import {
		Table,
		Title,
		Text,
		Breadcrumbs,
		Divider,
		Chip,
		CodeBlock,
		OnThisPage,
		BottomPagination,
		Tabs
	} from 'sveltekev';

	let paths: { slug: string; href: string }[] = [
		{
			slug: 'Home',
			href: '/'
		},
		{
			slug: 'products',
			href: '/p'
		},
		{
			slug: 'SvelteKev',
			href: '/p/sveltekev'
		},
		{
			slug: 'Table',
			href: '/p/sveltekev/table'
		}
	];

	let onThisPageLinks = [
		{
			slug: 'Import',
			href: '#import'
		},
		{
			slug: 'Usage',
			href: '#radius',
			sublinks: [
				{
					slug: 'Data',
					href: '#data'
				},
				{
					slug: 'Size',
					href: '#size'
				},
				{
					slug: 'Radius',
					href: '#radius'
				},
				{
					slug: 'Color',
					href: '#color'
				},
				{
					slug: 'Shadow',
					href: '#shadow'
				}
			]
		},
		{
			slug: 'API',
			href: '#api'
		}
	];

	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	let sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

	type Radius = 'none' | 'sm' | 'md' | 'lg' | 'full';
	let radius: Radius[] = ['none', 'sm', 'md', 'lg', 'full'];

	type Shadow = 0 | 1 | 2 | 3;
	let shadows: Shadow[] = [0, 1, 2, 3];

	type Color =
		| 'black'
		| 'white'
		| 'gray'
		| 'none'
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	let colors: Color[] = [
		'black',
		'white',
		'gray',
		'none',
		'default',
		'primary',
		'secondary',
		'success',
		'warning',
		'danger'
	];

	let api = [
		{
			Attribute: 'data',
			Type: "{ key: value, key: value }[] | null",
			Default: null
		},
		{
			Attribute: 'size',
			Type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			Default: '"md"'
		},
		{
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg'",
			Default: '"none"'
		},
		{
			Attribute: 'color',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: '"default"'
		},
		{
			Attribute: 'shadow',
			Type: '0 | 1 | 2 | 3',
			Default: '0'
		}
	];

	let tableData = [
		{
			Name: 'Pikachu',
			Type: 'Electric',
			Species: 'Mouse'
		},
		{
			Name: 'Gengar',
			Type: 'Ghost Poison',
			Species: 'Shadow'
		},
		{
			Name: 'Gyarados',
			Type: 'Water Flying',
			Species: 'Atrocious'
		}
	];
</script>

<svelte:head>
	<title>Table | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Table</Title>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Table.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock size="sm" lang="ts" radius="lg" code={"import { Table } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="data">Data</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Table data={tableData} />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Table data={[{ name: 'Pikachu', type: 'Electric', species: 'Mouse' }, ...]} />`}
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Text color="white">{size}</Text>
				<Table data={tableData} {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Table data={[{ name: 'Pikachu', type: 'Electric', species: 'Mouse' }, ...]} size='md' />`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				{#if r != 'full'}
					<Text color="white">{r}</Text>
					<Table data={tableData} radius={r} />
				{/if}
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Table data={[{ name: 'Pikachu', type: 'Electric', species: 'Mouse' }, ...]} radius='lg' />`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Text color="white">{color}</Text>
				<Table data={tableData} {color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Table data={[{ name: 'Pikachu', type: 'Electric', species: 'Mouse' }, ...]} color='default' />`}
		/>
	</Tabs>
    <Title color="white" id="shadow">Shadow</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Text color="white">{shadow}</Text>
				<Table data={tableData} color="warning" {shadow} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Table data={[{ name: 'Pikachu', type: 'Electric', species: 'Mouse' }, ...]} shadow={2} />`}
		/>
	</Tabs>
    <Title color="white" id="api">API</Title>
	<Table radius="lg" shadow={1} size="sm" data={api} />
	<BottomPagination
		color="default"
		radius="lg"
		size="sm"
		shadow={1}
		buttonsColor="secondary"
		buttonShadow={1}
		buttonsRadius="lg"
		prevHref="/p/sveltekev/switch"
		nextHref="/p/sveltekev/text"
	/>
</div>
<div class="w-1/5">
	<OnThisPage
		links={onThisPageLinks}
		color="none"
		shadow={1}
		radius="lg"
		tailwindClass="fixed h-[88vh] w-1/5"
	/>
</div>