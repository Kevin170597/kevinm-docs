<script lang="ts">
	import {
		Table,
		Title,
		Text,
		Breadcrumbs,
		Divider,
		Chip,
		CodeBlock,
		Input,
		OnThisPage,
		Select,
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
			slug: 'Input',
			href: '/p/sveltekev/input'
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
					slug: 'Options',
					href: '#options'
				},
				{
					slug: 'Placeholder',
					href: '#placeholder'
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
			Attribute: 'options',
			Type: "{ label: string, value: string }[]",
			Default: "[{ value: 'Option 1', label: '1' }, { value: 'Option 2', label: '2' }]"
		},
		{
			Attribute: 'placeholder',
			Type: 'string',
			Default: '"Placeholder"'
		},
		{
			Attribute: 'size',
			Type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			Default: '"md"'
		},
		{
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
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
</script>

<svelte:head>
	<title>Select | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Select</Title>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Select.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock size="sm" lang="ts" radius="lg" code={"import { Select } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="options">Options</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Select
				placeholder="Select one"
				options={[
					{ value: '1', label: 'Option 1' },
					{ value: '2', label: 'Option 2' },
					{ value: '3', label: 'Option 3' }
				]}
			/>
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Select
	placeholder="Select one"
	options={[
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' }
	]}
/>`}
		/>
	</Tabs>
	<Title color="white" id="placeholder">Placeholder</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Select placeholder="Select one" />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Select placeholder="Select one" />`}
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Select placeholder="Select {size}" {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Select placeholder="Select xs" size='xs' />
<Select placeholder="Select sm" size='sm' />
<Select placeholder="Select md" size='md' />
<Select placeholder="Select lg" size='lg' />
<Select placeholder="Select xl" size='xl' />`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Select placeholder="Radius {r}" radius={r} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Select placeholder="Radius none" radius="none" />
<Select placeholder="Radius sm" radius="sm" />
<Select placeholder="Radius md" radius="md" />
<Select placeholder="Radius lg" radius="lg" />
<Select placeholder="Radius full" radius="full" />`}
		/>
	</Tabs>
    <Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Select placeholder="Color {color}" {color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Select placeholder="Color black" color="black" />
<Select placeholder="Color white" color="white" />
<Select placeholder="Color gray" color="gray" />
<Select placeholder="Color none" color="none" />
<Select placeholder="Color default" color="default" />
<Select placeholder="Color primary" color="primary" />
<Select placeholder="Color secondary" color="secondary" />
<Select placeholder="Color success" color="success" />
<Select placeholder="Color warning" color="warning" />
<Select placeholder="Color danger" color="danger" />`}
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Select placeholder="Shadow {shadow}" color="primary" {shadow} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Select placeholder="Shadow 0" color='primary' shadow={0} />
<Select placeholder="Shadow 1" color='primary' shadow={1} />
<Select placeholder="Shadow 2" color='primary' shadow={2} />
<Select placeholder="Shadow 3" color='primary' shadow={3} />`}
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
		prevHref="/p/sveltekev/link"
		nextHref="/p/sveltekev/switch"
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
