<script lang="ts">
	import {
		Table,
		Chip,
		Title,
		Text,
		Divider,
		CodeBlock,
		Breadcrumbs,
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
			slug: 'Chip',
			href: '/p/sveltekev/chip'
		}
	];

	let onThisPageLinks = [
		{
			slug: 'Import',
			href: '#import'
		},
		{
			slug: 'Usage',
			href: '#content',
			sublinks: [
				{
					slug: 'Content',
					href: '#content'
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
				},
				{
					slug: 'Icon',
					href: '#icon'
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

	type Shadow = 0 | 1 | 2 | 3;
	let shadows: Shadow[] = [0, 1, 2, 3];

	let api = [
		{
			Attribute: 'content',
			Type: 'string',
			Default: null
		},
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
			Attribute: 'icon',
			Type: 'string',
			Default: null
		}
	];
</script>

<svelte:head>
	<title>Chip | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Chip</Title>
	<Text color="gray">A Chip is a small block of essential information.</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Chip.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock lang="ts" radius="lg" size="sm" code={"import { Chip } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="content">Content</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Chip content="Content..." radius="full" />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code="<Chip content='Content...' radius='full' />"
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex items-start flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Chip content={`size ${size}`} {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code="<Chip content='size xs' size='xs' />
<Chip content='size sm' size='sm' />
<Chip content='size md' size='md' />
<Chip content='size lg' size='lg' />
<Chip content='size xl' size='xl' />"
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex items-start flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Chip content={`radius ${r}`} radius={r} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code="<Chip content='radius none' radius='none'/>
<Chip content='radius sm' radius='sm' />
<Chip content='radius md' radius='md' />
<Chip content='radius lg' radius='lg' />
<Chip content='radius full' radius='full' />"
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex items-start flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Chip content={color} {color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code="<Chip content='black' color='black'/>
<Chip content='white' color='white' />
<Chip content='gray' color='gray' />
<Chip content='none' color='none' />
<Chip content='default' color='default' />
<Chip content='primary' color='primary'/>
<Chip content='secondary' color='secondary' />
<Chip content='success' color='success' />
<Chip content='warning' color='warning' />
<Chip content='danger' color='danger' />"
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex items-start flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Chip content={`shadow ${shadow}`} color="primary" {shadow} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Chip content='shadow 0' shadow={0} color='primary'/>
<Chip content='shadow 1' shadow={1} color='primary' />
<Chip content='shadow 2' shadow={2} color='primary' />
<Chip content='shadow 3' shadow={3} color='primary' />`}
		/>
	</Tabs>
	<Title color="white" id="icon">Icon</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex items-start flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Chip icon="github" size="xs" content="Kevin170597" color="default" shadow={3} radius="lg" />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Chip icon='github' content='Kevin170597' shadow={3} radius='lg' />`}
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
		prevHref="/p/sveltekev/checkbox"
		nextHref="/p/sveltekev/image"
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
