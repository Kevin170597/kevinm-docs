<script lang="ts">
	import {
		Table,
		Title,
		Text,
        Image,
		Card,
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
			Attribute: 'title',
			Type: "string",
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
		}
	];
</script>

<svelte:head>
	<title>Card | sveltekev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Card</Title>
	<Text color="gray">Card is a container for text, photos, and actions.</Text>
	<Chip
		icon="github"
		content="Source"
		radius="full"
		color="default"
		link="https://github.com/Kevin170597/sveltekev/blob/master/src/lib/components/widgets/Card.svelte"
	/>
	<Divider />
	<Title color="white" id="import">Import</Title>
	<CodeBlock lang="ts" radius="lg" size="sm" code={"import { Card } from 'sveltekev';"} />
	<Divider />
	<Title color="white" id="title">Title</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="flex flex-wrap gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Card title="Title" tailwindClass="w-[50%]">
				<div class="py-2 px-3 flex flex-col gap-2">
					<Text color="gray"
						>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus dignissimos
						aspernatur iusto, ad hic maiores saepe.
					</Text>
				</div>
			</Card>
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Card title="Title" tailwindClass="w-[50%]">
	<div class="py-2 px-3 flex flex-col gap-2">
		<Title color="white">Example</Title>
		<Text color="gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus dignissimos
			aspernatur iusto, ad hic maiores saepe.
        </Text>
	</div>
</Card>`}
		/>
	</Tabs>
	<Title color="white" id="size">Size</Title>
	<Text color="gray">Title size</Text>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each sizes as size}
				<Card title="Title {size}" {size} tailwindClass="w-[100%]">
					<div class="py-2 px-3 flex flex-col gap-2">
						<Text color="gray"
							>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
							dignissimos aspernatur iusto, ad hic maiores saepe.
						</Text>
					</div>
				</Card>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Card title="Title md" size="md" tailwindClass="w-[100%]">
    <div class="py-2 px-3 flex flex-col gap-2">
        <Title color="white">Example</Title>
        <Text color="gray"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
            dignissimos aspernatur iusto, ad hic maiores saepe.
        </Text>
    </div>
</Card>`}
		/>
	</Tabs>
	<Title color="white" id="radius">Radius</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each radius as r}
				{#if r != 'full'}
					<Card title="Radius {r}" radius={r} tailwindClass="w-[100%]">
						<div class="py-2 px-3 flex flex-col gap-2">
							<Text color="gray"
								>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
								dignissimos aspernatur iusto, ad hic maiores saepe.
							</Text>
						</div>
					</Card>
				{/if}
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Card title="Radius lg" radius="lg" tailwindClass="w-[100%]">
    <div class="py-2 px-3 flex flex-col gap-2">
        <Title color="white">Example</Title>
        <Text color="gray"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
            dignissimos aspernatur iusto, ad hic maiores saepe.
        </Text>
    </div>
</Card>`}
		/>
	</Tabs>
	<Title color="white" id="color">Color</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each colors as color}
				<Card title="Color {color}" {color} tailwindClass="w-[100%]">
					<div class="py-2 px-3 flex flex-col gap-2">
						<Text color="gray"
							>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
							dignissimos aspernatur iusto, ad hic maiores saepe.
						</Text>
					</div>
				</Card>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Card title="color secondary" color="secondary" tailwindClass="w-[100%]">
<div class="py-2 px-3 flex flex-col gap-2">
        <Text color="gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
            dignissimos aspernatur iusto, ad hic maiores saepe.
        </Text>
    </div>
</Card>`}
		/>
	</Tabs>
	<Title color="white" id="shadow">Shadow</Title>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			{#each shadows as shadow}
				<Card title="Shadow {shadow}" {shadow} color="secondary" tailwindClass="w-[100%]">
					<div class="py-2 px-3 flex flex-col gap-2">
						<Text color="white"
							>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
							dignissimos aspernatur iusto, ad hic maiores saepe.
						</Text>
					</div>
				</Card>
			{/each}
		</div>
		<CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Card title="Shadow 1" color="secondary" shadow={1} tailwindClass="w-[100%]">
<div class="py-2 px-3 flex flex-col gap-2">
        <Text color="gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus
            dignissimos aspernatur iusto, ad hic maiores saepe.
        </Text>
    </div>
</Card>`}
		/>
	</Tabs>
	<Title color="white" id="content">Content</Title>
	<Text color="gray">Just wrap your content.</Text>
	<Tabs size="sm" radius="lg" tabs={['Preview', 'Code']}>
		<div
			slot="tab1"
			class="grid grid-cols-2 gap-2 border border-solid border-[#1c1c1c] rounded-lg p-6"
		>
			<Card radius="lg" title="Dragonite" color="warning" tailwindClass="w-[100%]">
				<div class="py-2 px-3 flex flex-col gap-2">
                    <Chip color="danger" content="Dragon/Flaying" radius="full" />
					<Image radius="lg" src="https://i.pinimg.com/736x/07/5f/82/075f82e342cc56475fb6d91493632967.jpg" />
				</div>
			</Card>
		</div>
        <CodeBlock
			slot="tab2"
			size="sm"
			lang="js"
			radius="lg"
			code={`<Card radius="lg" title="Dragonite" color="warning" tailwindClass="w-[100%]">
  <div class="py-2 px-3 flex flex-col gap-2">
        <Chip color="danger" content="Dragón/Volador" radius="full" />
		<Image radius="lg" src="https://i.pinimg.com/736x/07/5f/82/075f82e342cc56475fb6d91493632967.jpg" />
	</div>
</Card>`}
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
		prevHref="/p/sveltekev/button"
		nextHref="/p/sveltekev/checkbox"
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
