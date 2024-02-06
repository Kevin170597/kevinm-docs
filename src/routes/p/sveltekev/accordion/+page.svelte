<script lang="ts">
	import {
		Table,
		Title,
		Accordion,
		Text,
		Divider,
		Chip,
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
			slug: 'Accordion',
			href: '/p/sveltekev/accordion'
		}
	];

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
					slug: 'Title',
					href: '#title'
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
					slug: 'Content',
					href: '#content'
				}
			]
		},
		{
			slug: 'Playground',
			href: '#playground'
		},
		{
			slug: 'API',
			href: '#api'
		}
	];

	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	let sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

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

	type Radius = 'none' | 'sm' | 'md' | 'lg';
	let radius: Radius[] = ['none', 'sm', 'md', 'lg'];

	type Shadow = 0 | 1 | 2 | 3;
	let shadows: Shadow[] = [0, 1, 2, 3];

	let api = [
		{
			Attribute: 'headTitle',
			Type: 'string',
			Default: "'Accordion'"
		},
		{
			Attribute: 'size',
			Type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			Default: 'md'
		},
		{
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg'",
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
		}
	];
</script>

<svelte:head>
	<title>Accordion | SvelteKev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Accordion</Title>
	<Text color="gray">A component that can expand/collapse to reveal more information.</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Accordion.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock
		lang="ts"
		radius="lg"
		size="sm"
		code={"import { Accordion } from 'sveltekev';"}
	/>
	<Divider />
	<Title color="white" id="title">Title</Title>
	<CodeBlock radius="lg" size="sm" code="<Accordion headTitle='this is the title...'></Acc..." />
	<Divider />
	<Title color="white" id="size">Size</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 items-start border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Accordion headTitle={`accordion ${size}`} radius="none" {size}>
					<Title color="white">Content</Title>
				</Accordion>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Accordion size='xs' headTitle='accordion xs'>Content</Accordion>
<Accordion size='sm' headTitle='accordion sm'>Content</Accordion>
<Accordion size='md' headTitle='accordion md'>Content</Accordion>
<Accordion size='lg' headTitle='accordion lg'>Content</Accordion>
<Accordion size='xl' headTitle='accordion xl'>Content</Accordion>`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 items-start border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Accordion headTitle={`radius ${r}`} radius={r}>
					<Title color="white">Content</Title>
				</Accordion>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Accordion radius='none' headTitle='radius none'>Content</Accordion>
<Accordion radius='sm' headTitle='radius sm'>Content</Accordion>
<Accordion radius='md' headTitle='radius md'>Content</Accordion>
<Accordion radius='lg' headTitle='radius lg'>Content</Accordion>`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 items-start border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Accordion headTitle={`color ${color}`} radius="none" {color}>
					<Title color="white">Content</Title>
				</Accordion>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Accordion color='black' headTitle='color black'>Content</Accordion>
<Accordion color='white' headTitle='color white'>Content</Accordion>
<Accordion color='gray' headTitle='color gray'>Content</Accordion>
<Accordion color='none' headTitle='color none'>Content</Accordion>
<Accordion color='default' headTitle='color default'>Content</Accordion>
<Accordion color='primary' headTitle='color primary'>Content</Accordion>
<Accordion color='secondary' headTitle='color secondary'>Content</Accordion>
<Accordion color='success' headTitle='color success'>Content</Accordion>
<Accordion color='warning' headTitle='color warning'>Content</Accordion>
<Accordion color='danger' headTitle='color danger'>Content</Accordion>`}
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 items-start border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Accordion headTitle={`shadow ${shadow}`} radius="none" color="default" {shadow}>
					<Title color="white">Content</Title>
				</Accordion>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Accordion shadow={0} headTitle='shadow 0'>Content</Accordion>
<Accordion shadow={1} headTitle='shadow 1'>Content</Accordion>
<Accordion shadow={2} headTitle='shadow 2'>Content</Accordion>
<Accordion shadow={3} headTitle='shadow 3'>Content</Accordion>`}
		/>
	</Tabs>
	<Title color="white" id="content">Content</Title>
	<Text color="gray">Just wrap your content</Text>
	<CodeBlock
		size="sm"
		radius="lg"
		lang="ts"
		code="<Accordion headtitle='Title'>
    // content here
</Accordion>"
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
		prevHref="/p/sveltekev/install"
		nextHref="/p/sveltekev/bottom-pagination"
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
