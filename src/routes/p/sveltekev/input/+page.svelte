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
					slug: 'Type',
					href: '#type'
				},
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
			Attribute: 'type',
			Type: "'text' | 'passowrd'",
			Default: '"text"'
		},
        {
			Attribute: 'required',
			Type: "boolean",
			Default: false
		},
        {
			Attribute: 'placeholder',
			Type: "string",
			Default: '"Placeholder"'
		},
        {
			Attribute: 'label',
			Type: "string | null",
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
	<title>Input | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Input</Title>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Input.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock size="sm" lang="ts" radius="lg" code={"import { Input } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="type">Type</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<div class="flex flex-col gap-2">
				<Text color="white">Type text</Text>
				<Input type="text" />
			</div>
			<div class="flex flex-col gap-2">
				<Text color="white">Type password</Text>
				<Input type="password" />
			</div>
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input bind:value={yourVariable} type='text' />
<Input bind:value={yourVariable} type='password' />`}
		/>
	</Tabs>
	<Title color="white" id="required">Required</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<div class="flex flex-col gap-2">
				<Text color="white">Required</Text>
				<Input required />
			</div>
			<div class="flex flex-col gap-2">
				<Text color="white">With label</Text>
				<Input required label="Label" />
			</div>
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input bind:value={yourVariable} required />
<Input bind:value={yourVariable} label='Label' required />`}
		/>
	</Tabs>
	<Title color="white" id="placeholder">Placeholder</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Input placeholder="Email..." />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input placeholder='Email...' />`}
		/>
	</Tabs>
	<Title color="white" id="label">Label</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Input label="Your label" placeholder="placeholder" />
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input label='Your label' placeholder='placeholder' />`}
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Input label="Your label" {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input label='Your label' size='xs' />
<Input label='Your label' size='sm' />
<Input label='Your label' size='md' />
<Input label='Your label' size='lg' />
<Input label='Your label' size='xl' />`}
		/>
	</Tabs>
    <Title color="white" id="radius">Radius</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-col gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Input label="Your label" radius={r} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input label='Your label' radius='none' />
<Input label='Your label' radius='sm' />
<Input label='Your label' radius='md' />
<Input label='Your label' radius='lg' />
<Input label='Your label' radius='full' />`}
		/>
	</Tabs>
    <Title color="white" id="color">Color</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Input label="Your label" {color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input label='Your label' color='black' />
<Input label='Your label' color='white' />
<Input label='Your label' color='gray' />
<Input label='Your label' color='none' />
<Input label='Your label' color='default' />
<Input label='Your label' color='primary' />
<Input label='Your label' color='secondary' />
<Input label='Your label' color='success' />
<Input label='Your label' color='warning' />
<Input label='Your label' color='danger' />`}
		/>
	</Tabs>
    <Title color="white" id="shadow">Shadow</Title>
	<Tabs radius="lg" size="sm" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Input label="Your label" color='primary' {shadow} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			lang="ts"
			size="sm"
			radius="lg"
			code={`<Input label='Your label' color='primary' shadow={0} />
<Input label='Your label' color='primary' shadow={1} />
<Input label='Your label' color='primary' shadow={2} />
<Input label='Your label' color='primary' shadow={3} />`}
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
		prevHref="/p/sveltekev/image"
		nextHref="/p/sveltekev/link"
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