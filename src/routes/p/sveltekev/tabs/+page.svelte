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
					slug: 'Tabs names',
					href: '#tabNames'
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
			Attribute: 'tabs',
			Type: 'string[]',
			Default: "['Tab 1', 'Tab 2', 'Tab 3']"
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
	];
</script>

<svelte:head>
	<title>Tabs | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Tabs</Title>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Tabs.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock size="sm" lang="ts" radius="lg" code={"import { Tabs } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="tabNames">Tabs names</Title>
	<Text color="gray">Slot names goes from "tab1" to "tab8".</Text>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']}>
				<Text slot="tab1" color="white">Tab 1 content</Text>
				<Text slot="tab2" color="white">Tab 2 content</Text>
				<Text slot="tab3" color="white">Tab 3 content</Text>
			</Tabs>
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']}>
    <Text slot="tab1" color="white">Tab 1 content</Text>
    <Text slot="tab2" color="white">Tab 2 content</Text>
    <Text slot="tab3" color="white">Tab 3 content</Text>
</Tabs>`}
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Tabs tabs={[`Tab ${size} 1`, `Tab ${size} 2`, `Tab ${size} 3`]} {size}>
					<Text slot="tab1" color="white">Tab 1 content</Text>
					<Text slot="tab2" color="white">Tab 2 content</Text>
					<Text slot="tab3" color="white">Tab 3 content</Text>
				</Tabs>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Tabs tabs={['Tab xs 1', 'Tab xs 2', 'Tab xs 3']} size='xs'>
    <Text slot="tab1" color="white">Tab 1 content</Text>
    <Text slot="tab2" color="white">Tab 2 content</Text>
    <Text slot="tab3" color="white">Tab 3 content</Text>
</Tabs>`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Tabs tabs={[`Tab radius ${r} 1`, `Tab radius ${r} 2`, `Tab radius ${r} 3`]} radius={r}>
					<Text slot="tab1" color="white">Tab 1 content</Text>
					<Text slot="tab2" color="white">Tab 2 content</Text>
					<Text slot="tab3" color="white">Tab 3 content</Text>
				</Tabs>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Tabs tabs={['Tab radius lg 1', 'Tab radius lg 2', 'Tab radius lg 3']} radius='lg'>
    <Text slot="tab1" color="white">Tab 1 content</Text>
    <Text slot="tab2" color="white">Tab 2 content</Text>
    <Text slot="tab3" color="white">Tab 3 content</Text>
</Tabs>`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Tabs tabs={[`Tab ${color} 1`, `Tab ${color} 2`, `Tab ${color} 3`]} {color}>
					<Text slot="tab1" color="white">Tab 1 content</Text>
					<Text slot="tab2" color="white">Tab 2 content</Text>
					<Text slot="tab3" color="white">Tab 3 content</Text>
				</Tabs>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Tabs tabs={['Tab danger 1', 'Tab danger 2', 'Tab danger 3']} color='danger'>
    <Text slot="tab1" color="white">Tab 1 content</Text>
    <Text slot="tab2" color="white">Tab 2 content</Text>
    <Text slot="tab3" color="white">Tab 3 content</Text>
</Tabs>`}
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
		prevHref="/p/sveltekev/table"
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