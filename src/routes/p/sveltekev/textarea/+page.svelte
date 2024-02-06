<script lang="ts">
	import {
		Table,
		Title,
		Text,
		Breadcrumbs,
		Divider,
		Chip,
		CodeBlock,
		TextArea,
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
			slug: 'Textarea',
			href: '/p/sveltekev/textarea'
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
					slug: 'Required',
					href: '#required'
				},
				{
					slug: 'Placeholder',
					href: '#placeholder'
				},
				{
					slug: 'Label',
					href: '#label'
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
			Attribute: 'required',
			Type: 'boolean',
			Default: false
		},
		{
			Attribute: 'placeholder',
			Type: 'string',
			Default: '"Placeholder"'
		},
		{
			Attribute: 'label',
			Type: 'string | null',
			Default: null
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
	<title>Textarea | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Textarea</Title>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/TextArea.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock
		size="sm"
		lang="ts"
		radius="lg"
		code={"import { Textarea } from 'sveltekev';"}
	/>
	<Divider />
	<Title color="white" id="required">Required</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<div class="flex flex-col gap-2">
				<Text color="white">Required</Text>
				<TextArea required />
			</div>
			<div class="flex flex-col gap-2">
				<Text color="white">With label</Text>
				<TextArea required label="Label" />
			</div>
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea bind:value={yourVariable} required />
<TextArea bind:value={yourVariable} label='Label' required />`}
		/>
	</Tabs>
	<Title color="white" id="placeholder">Placeholder</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<TextArea placeholder="Description..." />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea placeholder='Description...' />`}
		/>
	</Tabs>
	<Title color="white" id="label">Label</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<TextArea label="Your label" placeholder="Description..." />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea label='Your label' placeholder='Description...' />`}
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<TextArea label="Your label" {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea label='Your label' size='xs' />
<TextArea label='Your label' size='sm' />
<TextArea label='Your label' size='md' />
<TextArea label='Your label' size='lg' />
<TextArea label='Your label' size='xl' />`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				{#if r != 'full'}
					<TextArea label="Your label" radius={r} />
				{/if}
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea label='Your label' radius='none' />
<TextArea label='Your label' radius='sm' />
<TextArea label='Your label' radius='md' />
<TextArea label='Your label' radius='lg' />
<TextArea label='Your label' radius='full' />`}
		/>
	</Tabs>
    <Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<TextArea label="Your label" {color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea label='Your label' color='black' />
<TextArea label='Your label' color='white' />
<TextArea label='Your label' color='gray' />
<TextArea label='Your label' color='none' />
<TextArea label='Your label' color='default' />
<TextArea label='Your label' color='primary' />
<TextArea label='Your label' color='secondary' />
<TextArea label='Your label' color='success' />
<TextArea label='Your label' color='warning' />
<TextArea label='Your label' color='danger' />`}
		/>
	</Tabs>
    <Title color="white" id="shadow">Shadow</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<TextArea label="Your label" color='primary' {shadow} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<TextArea label='Your label' color='primary' shadow={0} />
<TextArea label='Your label' color='primary' shadow={1} />
<TextArea label='Your label' color='primary' shadow={2} />
<TextArea label='Your label' color='primary' shadow={3} />`}
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
		prevHref="/p/sveltekev/text"
		nextHref="/p/sveltekev/title"
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
