<script lang="ts">
	import {
		Table,
		Title,
		Accordion,
		Text,
		Divider,
		Chip,
		Link,
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
			slug: 'Install',
			href: '/p/sveltekev/install'
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
	<title>Install | SvelteKev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Install</Title>
	<CodeBlock lang="bash" radius="lg" size="sm" code={'npm i sveltekev'} />
	<Divider />
	<Title color="white" size="xl">Tailwind</Title>
	<Text color="danger">Tailwind is required!</Text>
	<Text color="white">Install Tailwind</Text>
	<Link color="secondary" underline="always" href="https://tailwindcss.com/docs/guides/sveltekit">
		Tailwind CSS
	</Link>
    <Divider />
    <Text color="white">After install add following lines to tailwind.config.js</Text>
    <CodeBlock lang="ts" radius="lg" size="sm" code={`content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/sveltekev/**/*.{html,js,svelte,ts}'
],`} />
    <Divider />
    <BottomPagination
		color="default"
		radius="lg"
		size="sm"
		shadow={1}
		buttonsColor="secondary"
		buttonShadow={1}
		buttonsRadius="lg"
		prevHref="/p/sveltekev"
		nextHref="/p/sveltekev/accordion"
	/>
</div>
