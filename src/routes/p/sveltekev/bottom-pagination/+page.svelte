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
					slug: 'Buttons Color',
					href: '#buttonsColor'
				},
				{
					slug: 'Buttons Radius',
					href: '#buttonsRadius'
				},
				{
					slug: 'Buttons Shadow',
					href: '#buttonsShadow'
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
			slug: 'Bottom Pagination',
			href: '/p/sveltekev/bottom-pagination'
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
			Attribute: 'buttonColor',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: 'default'
		},
		{
			Attribute: 'buttonRadius',
			Type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			Default: 'none'
		},
		{
			Attribute: 'buttonShadow',
			Type: '0 | 1 | 2 | 3',
			Default: '0'
		},
		{
			Attribute: 'prevHref',
			Type: 'string',
			Default: null
		},
		{
			Attribute: 'nextHref',
			Type: 'string',
			Default: null
		}
	];
</script>

<svelte:head>
	<title>Bottom Pagination | SvelteKev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">BottomPagination</Title>
	<Text color="gray">
		The BottomPagination component allows you navigate between multiple pages.
	</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/BottomPagination.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock
		lang="ts"
		radius="lg"
		size="sm"
		code={"import { BottomPagination } from 'sveltekev';"}
	/>
	<Divider />
	<Title color="white" id="size">Size</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Text color="gray">{size}</Text>
				<BottomPagination {size} prevHref="/" nextHref="/" />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" size='xs' />
<BottomPagination prevHref="/" nextHref="/" size='sm' />
<BottomPagination prevHref="/" nextHref="/" size='md' />
<BottomPagination prevHref="/" nextHref="/" size='lg' />
<BottomPagination prevHref="/" nextHref="/" size='xl' />`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Text color="gray">{r}</Text>
				<BottomPagination radius={r} prevHref="/" nextHref="/" />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" radius='none' />
<BottomPagination prevHref="/" nextHref="/" radius='sm' />
<BottomPagination prevHref="/" nextHref="/" radius='md' />
<BottomPagination prevHref="/" nextHref="/" radius='lg' />
<BottomPagination prevHref="/" nextHref="/" radius='full' />`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Text color="gray">{color}</Text>
				<BottomPagination {color} prevHref="/" nextHref="/" />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" color='black' />
<BottomPagination prevHref="/" nextHref="/" color='white' />
<BottomPagination prevHref="/" nextHref="/" color='gray' />
<BottomPagination prevHref="/" nextHref="/" color='none' />
<BottomPagination prevHref="/" nextHref="/" color='default' />
<BottomPagination prevHref="/" nextHref="/" color='primary' />
<BottomPagination prevHref="/" nextHref="/" color='secondary' />
<BottomPagination prevHref="/" nextHref="/" color='success' />
<BottomPagination prevHref="/" nextHref="/" color='warning' />
<BottomPagination prevHref="/" nextHref="/" color='danger' />`}
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Text color="gray">{shadow}</Text>
				<BottomPagination color="gray" {shadow} prevHref="/" nextHref="/" />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" color='gray' shadow={0} />
<BottomPagination prevHref="/" nextHref="/" color='gray' shadow={1} />
<BottomPagination prevHref="/" nextHref="/" color='gray' shadow={2} />
<BottomPagination prevHref="/" nextHref="/" color='gray' shadow={3} />`}
		/>
	</Tabs>
	<Title color="white" id="buttonsColor">Buttons color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<BottomPagination buttonsColor="primary" prevHref="/" nextHref="/" />
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" buttonColor="primary" />`}
		/>
	</Tabs>
	<Title color="white" id="buttonsRadius">Buttons radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<BottomPagination buttonsColor="warning" buttonsRadius="lg" prevHref="/" nextHref="/" />
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" buttonColor="warning" buttonRadius='lg' />`}
		/>
	</Tabs>
	<Title color="white" id="buttonsShadow">Buttons shadow</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<BottomPagination
				buttonsColor="danger"
				buttonShadow={1}
				buttonsRadius="none"
				prevHref="/"
				nextHref="/"
			/>
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<BottomPagination prevHref="/" nextHref="/" buttonColor="danger" buttonShadow={1} />`}
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
		prevHref="/p/sveltekev/accordion"
		nextHref="/p/sveltekev/breadcrumbs"
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
