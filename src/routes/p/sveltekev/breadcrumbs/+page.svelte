<script lang="ts">
	import {
		Table,
		Title,
		Text,
		CodeBlock,
		Chip,
		Divider,
		Breadcrumbs,
		OnThisPage,
		BottomPagination,
		Tabs
	} from 'sveltekev';

	let onThisPageLinks = [
		{
			slug: 'Import',
			href: '#import'
		},
		{
			slug: 'Usage',
			href: '#size',
			sublinks: [
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
				},
				{
					slug: 'Paths',
					href: '#paths'
				}
			]
		},
		{
			slug: 'API',
			href: '#api'
		}
	];

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
			slug: 'Breadcrumbs',
			href: '/p/sveltekev/breadcrumbs'
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

	type Shadow = 0 | 1 | 2 | 3;
	let shadows: Shadow[] = [0, 1, 2, 3];

	let api = [
		{
			Attribute: 'size',
			Type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			Default: 'md'
		},
		{
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			Default: 'none'
		},
		{
			Attribute: 'color',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: 'default'
		},
		{
			Attribute: 'shadow',
			Type: '0 | 1 | 2 | 3',
			Default: '0'
		},
		{
			Attribute: 'paths',
			Type: '{ slug: string; href: string }[]',
			Default: null
		}
	];
</script>

<svelte:head>
	<title>Breadcrumbs | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Breadcrumbs</Title>
	<Text color="gray">
		Breadcrumbs display a hierarchy of links to the current page or resource in an application.
	</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Breadcrumbs.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock
		lang="ts"
		radius="lg"
		size="sm"
		code={"import { Breadcrumbs } from 'sveltekev';"}
	/>
	<Divider />
	<Title color="white" id="size">Size</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Breadcrumbs paths={[...paths, { slug: size, href: '' }]} {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Breadcrumbs paths={paths} size='xs' />
<Breadcrumbs paths={paths} size='sm' />
<Breadcrumbs paths={paths} size='md' />
<Breadcrumbs paths={paths} size='lg' />
<Breadcrumbs paths={paths} size='xl' />`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Breadcrumbs radius={r} paths={[...paths, { slug: r, href: '' }]} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Breadcrumbs paths={paths} radius='none' />
<Breadcrumbs paths={paths} radius='sm' />
<Breadcrumbs paths={paths} radius='md' />
<Breadcrumbs paths={paths} radius='lg' />
<Breadcrumbs paths={paths} radius='full' />`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Breadcrumbs {color} paths={[...paths, { slug: color, href: '' }]} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Breadcrumbs paths={paths} color='black' />
<Breadcrumbs paths={paths} color='white' />
<Breadcrumbs paths={paths} color='gray' />
<Breadcrumbs paths={paths} color='none' />
<Breadcrumbs paths={paths} color='default' />
<Breadcrumbs paths={paths} color='primary' />
<Breadcrumbs paths={paths} color='secondary' />
<Breadcrumbs paths={paths} color='success' />
<Breadcrumbs paths={paths} color='warning' />
<Breadcrumbs paths={paths} color='danger' />`}
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Breadcrumbs {shadow} color="warning" paths={[...paths, { slug: `${shadow}`, href: '' }]} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Breadcrumbs paths={paths} color='warning' shadow={0} />
<Breadcrumbs paths={paths} color='warning' shadow={1} />
<Breadcrumbs paths={paths} color='warning' shadow={2} />
<Breadcrumbs paths={paths} color='warning' shadow={3} />`}
		/>
	</Tabs>
	<Title color="white" id="paths">Paths</Title>
	<CodeBlock
		lang="ts"
		radius="lg"
		size="sm"
		code={"<Breadcrumbs paths={[{ slug: 'Home', href: '/'}]} />"}
	/>
	<Divider />
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
		prevHref="/p/sveltekev/bottom-pagination"
		nextHref="/p/sveltekev/button"
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
