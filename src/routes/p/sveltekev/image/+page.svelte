<script lang="ts">
	import {
		Table,
		Image,
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
					slug: 'Src',
					href: '#src'
				},
                {
					slug: 'Width and Height',
					href: '#widthheight'
				},
                {
					slug: 'Radius',
					href: '#radius'
				},
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
			slug: 'Image',
			href: '/p/sveltekev/image'
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
			Attribute: 'src',
			Type: "string",
			Default: null
		},
        {
			Attribute: 'width',
			Type: "string",
			Default: '100%'
		},
        {
			Attribute: 'height',
			Type: "string | null",
			Default: null
		},
		{
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			Default: 'none'
		},
        {
			Attribute: 'alt',
			Type: "string",
			Default: null
		},
	];
</script>

<svelte:head>
	<title>Image | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Image</Title>
	<Text color="gray">The Image component is used to display images.</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/ui/Image.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock lang="ts" radius="lg" size="sm" code={"import { Image } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="src">SRC</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Image
				width={'20%'}
				src="https://i.pinimg.com/736x/f1/5b/f4/f15bf43898cd87591d8215ae8d15760d.jpg"
			/>
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Image src='https://i.pinimg.com/736x/f1/5b/f4/f15bf43898cd87591d8215ae8d15760d.jpg' />`}
		/>
	</Tabs>
	<Title color="white" id="widthheight">Width and Height</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Image
				width={'30%'}
				height="auto"
				src="https://i.pinimg.com/736x/ed/99/8f/ed998f343d2fed313b99869d5b5dd107.jpg"
			/>
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Image 
    width='30%'
    height='auto'
    src='https://i.pinimg.com/736x/ed/99/8f/ed998f343d2fed313b99869d5b5dd107.jpg' 
/>`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-5 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Image
				radius="none"
				height="100%"
				src="https://i.pinimg.com/736x/6d/d0/50/6dd050be3ec9756649b197153e84c59c.jpg"
			/>
			<Image
				radius="sm"
				height="100%"
				src="https://i.pinimg.com/736x/5d/35/4d/5d354db03d79dba85b3068fa3eb9595d.jpg"
			/>
			<Image
				radius="md"
				height="100%"
				src="https://i.pinimg.com/736x/00/24/d8/0024d85c7c194c058b80096830b7a9f1.jpg"
			/>
			<Image
				radius="lg"
				height="100%"
				src="https://i.pinimg.com/736x/5b/fb/93/5bfb93b5449c131238ab0ddfb2532727.jpg"
			/>
			<Image
				radius="full"
				height="100%"
				src="https://i.pinimg.com/736x/77/37/a7/7737a7ff7247aaefa4d4e64c67affb49.jpg"
			/>
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Image
    radius="none"
	height="100%"
	src="https://i.pinimg.com/736x/6d/d0/50/6dd050be3ec9756649b197153e84c59c.jpg"
/>
<Image
	radius="sm"
	height="100%"
	src="https://i.pinimg.com/736x/5d/35/4d/5d354db03d79dba85b3068fa3eb9595d.jpg"
/>
<Image
	radius="md"
	height="100%"
	src="https://i.pinimg.com/736x/00/24/d8/0024d85c7c194c058b80096830b7a9f1.jpg"
/>
<Image
	radius="lg"
	height="100%"
	src="https://i.pinimg.com/736x/5b/fb/93/5bfb93b5449c131238ab0ddfb2532727.jpg"
/>
<Image
	radius="full"
	height="100%"
	src="https://i.pinimg.com/736x/77/37/a7/7737a7ff7247aaefa4d4e64c67affb49.jpg"
/>`}
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
		prevHref="/p/sveltekev/chip"
		nextHref="/p/sveltekev/input"
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
