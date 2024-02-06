<script>
	import {
		Breadcrumbs,
		Divider,
		OnThisPage,
		CodeBlock,
		Chip,
		BottomPagination,
		Accordion,
		Table,
		Text,
		Container,
		Title
	} from 'sveltekev';
	import { endpoints } from './endpoints';
	import { onThisPageLinks, paths } from './pageData';
</script>

<svelte:head>
	<title>API | Instagrapy</title>
</svelte:head>

<div class="w-[60%] pl-8 pr-16 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="secondary" shadow={1} radius="lg" size="sm" />
	<Title size="sm" color="white" id="base-url">Base URL</Title>
	<Container tailwindClass="py-2 px-4 flex" radius="lg">
		<Text size="sm" color="gray">https://instagrapy.onrender.com/</Text>
	</Container>
	<Divider />
	<Title color="white" id="scheduled-posts" size="sm">Scheduled posts.</Title>
	{#each endpoints as endpoint}
		<div class="flex gap-3 items-center">
			<Chip content={endpoint.method} size="xs" radius="lg" color={endpoint.methodColor} />
			<Text color="white" id={endpoint.title.toLowerCase().split(' ').join('-').slice(0, -1)}>
				{endpoint.title}
			</Text>
		</div>
		<Container tailwindClass="py-2 px-4 flex" radius="lg">
			<Text size="sm" color="gray">https://instagrapy.onrender.com/</Text>
			{#each endpoint.path as p}
				<Text size="sm" color={p.color}>{p.slug}</Text>
			{/each}
		</Container>
		<Container variant="solid" tailwindClass="w-full" radius="lg">
			{#if endpoint.params}
				<Accordion headTitle="Params">
					<Table data={endpoint.params} size="xs" color="default" radius="lg" />
				</Accordion>
			{/if}
			{#if endpoint.body}
				<Accordion headTitle="Body">
					<CodeBlock lang="bash" size="sm" radius="lg" code={endpoint.body} />
				</Accordion>
			{/if}
			<Accordion headTitle="Response">
				<CodeBlock lang="bash" size="sm" radius="lg" code={endpoint.response} />
			</Accordion>
		</Container>
		<Divider />
	{/each}
	<BottomPagination
		size="sm"
		buttonsRadius="lg"
		buttonShadow={1}
		buttonsColor="secondary"
		radius="lg"
		color="default"
		shadow={1}
		prevHref="/p/instagrapy/install"
	/>
</div>
<div class="w-[20%]">
	<OnThisPage links={onThisPageLinks} tailwindClass="fixed" />
</div>
