<script lang="ts">
	import {
		Table,
		Title,
		Breadcrumbs,
		Divider,
		Chip,
		CodeBlock,
		Switch,
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
			slug: 'Switch',
			href: '/p/sveltekev/switch'
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
					slug: 'Radius',
					href: '#radius'
				},
				{
					slug: 'Color',
					href: '#color'
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
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			Default: 'none'
		},
		{
			Attribute: 'color',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: 'default'
		}
	];

	let checkedValue: boolean = true;
</script>

<svelte:head>
	<title>Switch | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Switch</Title>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Switch.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock size="sm" lang="ts" radius="lg" code={"import { Switch } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Switch bind:checked={checkedValue} radius={r} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Switch radius='none' bind:checked={checkedValue} />
<Switch radius='sm' bind:checked={checkedValue} />
<Switch radius='md' bind:checked={checkedValue} />
<Switch radius='lg' bind:checked={checkedValue} />
<Switch radius='full' bind:checked={checkedValue} />`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Switch radius="full" {color} bind:checked={checkedValue} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Switch radius='full' color='black' bind:checked={checkedValue} />
<Switch radius='full' color='white' bind:checked={checkedValue} />
<Switch radius='full' color='gray' bind:checked={checkedValue} />
<Switch radius='full' color='none' bind:checked={checkedValue} />
<Switch radius='full' color='default' bind:checked={checkedValue} />
<Switch radius='full' color='primary' bind:checked={checkedValue} />
<Switch radius='full' color='secondary' bind:checked={checkedValue} />
<Switch radius='full' color='success' bind:checked={checkedValue} />
<Switch radius='full' color='warning' bind:checked={checkedValue} />
<Switch radius='full' color='danger' bind:checked={checkedValue} />`}
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
		prevHref="/p/sveltekev/select"
		nextHref="/p/sveltekev/table"
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
