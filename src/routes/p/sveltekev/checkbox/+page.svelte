<script lang="ts">
	import {
		Table,
		Title,
		Text,
		CodeBlock,
		Checkbox,
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
					slug: 'Label',
					href: '#label'
				},
                {
					slug: 'Label size',
					href: '#labelSize'
				},
                {
					slug: 'Label color',
					href: '#labelColor'
				},
                {
					slug: 'Radius',
					href: '#radius'
				},
                {
					slug: 'Color',
					href: '#color'
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
			slug: 'Checkbox',
			href: '/p/sveltekev/checkbox'
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
			Attribute: 'label',
			Type: "string",
			Default: '"Checkbox"'
		},
        {
			Attribute: 'labelColor',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: 'white'
		},
		{
			Attribute: 'size (label size)',
			Type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			Default: 'md'
		},
		{
			Attribute: 'radius',
			Type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			Default: 'lg'
		},
		{
			Attribute: 'color',
			Type: "'black' | 'white' | 'gray' | 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning'| 'danger'",
			Default: 'primary'
		},
	];

	let checkboxValue: boolean = true;
</script>

<svelte:head>
	<title>Checkbox | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Checkbox</Title>
	<Text color="gray">
		Checkboxes allow users to select multiple items from a list of individual items, or to mark one
		individual item as selected.
	</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Checkbox.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock
		lang="ts"
		radius="lg"
		size="sm"
		code={"import { Checkbox } from 'sveltekev';"}
	/>
	<Divider />
	<Title color="white" id="label">Label</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Checkbox bind:checked={checkboxValue} label="Your label" />
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="ts"
			radius="lg"
			code={`<Checkbox bind:checked={checkboxValue} label='Your label' />`}
		/>
	</Tabs>
	<Title color="white" id="labelSize">Label Size</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Checkbox bind:checked={checkboxValue} label={'label ' + size} {size} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="ts"
			radius="lg"
			code={`<Checkbox bind:checked={value} label='label xs' size='xs' />
<Checkbox bind:checked={value} label='label sm' size='sm' />
<Checkbox bind:checked={value} label='label md' size='md' />
<Checkbox bind:checked={value} label='label lg' size='lg' />
<Checkbox bind:checked={value} label='label xl' size='xl' />`}
		/>
	</Tabs>
    <Title color="white" id="labelColor">Label color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Checkbox bind:checked={checkboxValue} label={'label ' + color} labelColor={color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Checkbox bind:checked={checkboxValue} label={'label ' + black} labelColor='black' />
<Checkbox bind:checked={checkboxValue} label={'label ' + white} labelColor='white' />
<Checkbox bind:checked={checkboxValue} label={'label ' + gray} labelColor='gray' />
<Checkbox bind:checked={checkboxValue} label={'label ' + none} labelColor='none' />
<Checkbox bind:checked={checkboxValue} label={'label ' + default} labelColor='default' />
<Checkbox bind:checked={checkboxValue} label={'label ' + primary} labelColor='primary' />
<Checkbox bind:checked={checkboxValue} label={'label ' + secondary} labelColor='secondary' />
<Checkbox bind:checked={checkboxValue} label={'label ' + success} labelColor='success' />
<Checkbox bind:checked={checkboxValue} label={'label ' + warning} labelColor='warning' />
<Checkbox bind:checked={checkboxValue} label={'label ' + danger} labelColor='danger' />`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				<Checkbox bind:checked={checkboxValue} label={'radius ' + r} radius={r} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="ts"
			radius="lg"
			code={`<Checkbox bind:checked={value} label='radius none' radius='none' />
<Checkbox bind:checked={value} label='radius sm' radius='sm' />
<Checkbox bind:checked={value} label='radius md' radius='md' />
<Checkbox bind:checked={value} label='radius lg' radius='lg' />
<Checkbox bind:checked={value} label='radius full' radius='full' />`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Checkbox bind:checked={checkboxValue} label={'color ' + color} {color} />
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Checkbox bind:checked={checkboxValue} label={'color ' + black} color='black' />
<Checkbox bind:checked={checkboxValue} label={'color ' + white} color='white' />
<Checkbox bind:checked={checkboxValue} label={'color ' + gray} color='gray' />
<Checkbox bind:checked={checkboxValue} label={'color ' + none} color='none' />
<Checkbox bind:checked={checkboxValue} label={'color ' + default} color='default' />
<Checkbox bind:checked={checkboxValue} label={'color ' + primary} color='primary' />
<Checkbox bind:checked={checkboxValue} label={'color ' + secondary} color='secondary' />
<Checkbox bind:checked={checkboxValue} label={'color ' + success} color='success' />
<Checkbox bind:checked={checkboxValue} label={'color ' + warning} color='warning' />
<Checkbox bind:checked={checkboxValue} label={'color ' + danger} color='danger' />`}
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
		prevHref="/p/sveltekev/card"
		nextHref="/p/sveltekev/chip"
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
