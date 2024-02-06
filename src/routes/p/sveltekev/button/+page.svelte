<script lang="ts">
	import {
		Table,
		Button,
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
					slug: 'onClick',
					href: '#onclick'
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
			slug: 'Button',
			href: '/p/sveltekev/button'
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
			Attribute: 'onClick',
			Type: '() => void',
			Default: null
		}
	];
</script>

<svelte:head>
	<title>Button | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Button</Title>
	<Text color="gray">Buttons allow users to perform actions and choose with a single tap.</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/ui/Button.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock lang="ts" radius="lg" size="sm" code={"import { Button } from 'sveltekev';"} />
	<Title color="white" id="size">Size</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex gap-2 items-start flex-wrap border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Button {size}>size {size}</Button>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={"<Button size='xs'>size xs</Button> \n<Button size='sm'>size sm</Button> \n<Button size='md'>size md</Button>\n<Button size='lg'>size lg</Button>\n<Button size='xl'>size xl</Button>"}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex gap-2 items-start flex-wrap border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Button radius={r}>radius {r}</Button>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={"<Button radius='none'>radius none</Button> \n<Button radius='sm'>radius sm</Button> \n<Button radius='md'>radius md</Button>\n<Button radius='lg'>radius lg</Button>\n<Button radius='full'>radius full</Button>"}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex gap-2 items-start flex-wrap border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Button {color}>{color}</Button>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={"<Button color='black'>black</Button>\n<Button color='white'>white</Button>\n<Button color='gray'>gray</Button>\n<Button color='none'>none</Button>\n<Button color='default'>default</Button>\n<Button color='primary'>primary</Button>\n<Button color='secondary'>secondary</Button>\n<Button color='success'>success</Button>\n<Button color='warning'>warning</Button>\n<Button color='danger'>danger</Button>\n"}
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Button color="secondary" {shadow}>shadow {shadow}</Button>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={"<Button color='secondary' shadow={0}>shadow 0</Button>\n<Button color='secondary' shadow={1}>shadow 1</Button>\n<Button color='secondary' shadow={2}>shadow 2</Button>\n<Button color='secondary' shadow={3}>shadow 3</Button>\n"}
		/>
	</Tabs>
	<Title color="white" id="onclick">onClick</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Button onClick={() => alert('hello world')}>Alert</Button>
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={"<Button onClick={() => alert('hello world')}>Alert</Button>"}
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
		prevHref="/p/sveltekev/breadcrumbs"
		nextHref="/p/sveltekev/card"
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
