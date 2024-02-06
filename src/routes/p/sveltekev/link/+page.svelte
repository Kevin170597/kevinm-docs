<script lang="ts">
	import {
		Table,
		Title,
		Text,
		Link,
		Chip,
		CodeBlock,
		Divider,
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
			slug: 'Link',
			href: '/p/sveltekev/link'
		}
	];

	let onThisPageLinks = [
		{
			slug: 'Usage',
			href: '#size',
			sublinks: [
				{
					slug: 'Size',
					href: '#size'
				},
				{
					slug: 'Color',
					href: '#color'
				},
				{
					slug: 'Underline',
					href: '#underline'
				},
				{
					slug: 'Href',
					href: '#href'
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

	type Underline = 'none' | 'hover' | 'always';
	let underline: Underline[] = ['none', 'hover', 'always'];

	let api = [
		{
			Attribute: 'size',
			Type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			Default: 'md'
		},
		{
			Attribute: 'color',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: 'default'
		},
		{
			Attribute: 'udnerline',
			Type: "'none' | 'hover' | 'always'",
			Default: 'none'
		}
	];

	let playgroundSize: Size = 'xs';
	let playgroundColor: Color = 'default';
</script>

<svelte:head>
	<title>Link | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Link</Title>
	<Text color="gray">Links allow users to click their way from page to page.</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/ui/Link.svelte"
	/>
	<Divider />
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Link href="/" color="white" {size}>link {size}</Link>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Link href="/" size='xs' color='white'>link xs</Link>
<Link href="/" size='sm' color='white'>link sm</Link>
<Link href="/" size='md' color='white'>link md</Link>
<Link href="/" size='lg' color='white'>link lg</Link>
<Link href="/" size='xl' color='white'>link xl</Link>`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Link href="/" {color}>link {color}</Link>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Link href="/" color='black'>link black</Link>
<Link href="/" color='white'>link white</Link>
<Link href="/" color='gray'>link gray</Link>
<Link href="/" color='none'>link none</Link>
<Link href="/" color='default'>link default</Link>
<Link href="/" color='primary'>link primary</Link>
<Link href="/" color='secondary'>link secondary</Link>
<Link href="/" color='success'>link success</Link>
<Link href="/" color='warning'>link warning</Link>
<Link href="/" color='danger'>link danger</Link>`}
		/>
	</Tabs>
	<Title color="white" id="underline">Underline</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each underline as u}
				<Link href="/" color="white" underline={u}>hover {u}</Link>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Link href="/" color='white' underline='none'>underline none</Link>
<Link href="/" color='white' underline='hover'>underline hover</Link>
<Link href="/" color='white' underline='always'>underline always</Link>`}
		/>
	</Tabs>
	<Title color="white" id="href">Href</Title>
	<CodeBlock size="sm" radius="lg" code="<Link href='/'>Home</Link>" />
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
		prevHref="/p/sveltekev/input"
		nextHref="/p/sveltekev/select"
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
