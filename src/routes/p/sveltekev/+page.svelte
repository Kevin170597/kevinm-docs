<script lang="ts">
	import { Breadcrumbs, Title, Text, Link, BottomPagination, Image, Chip } from 'sveltekev';

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
		}
	];
</script>

<svelte:head>
	<title>SvelteKev</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="default" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Introduction</Title>
    <div class="flex items-start gap-2">
        <Chip icon="github" size="sm" radius="full" content="Source" link="https://github.com/Kevin170597/sveltekev" />
        <Chip icon="npm" size="xs" color="default" radius="full" content="NPM" link="https://www.npmjs.com/package/sveltekev" />
    </div>
	<Text color="gray">Welcome to SvelteKev documentation!</Text>
    <Image radius="lg" src="/sveltekev-cover.png" />
	<Title color="white" size="xl">What is SvelteKev?</Title>
	<Text color="gray">
		SvelteKev is a UI library for Svelte that helps you build beautiful and accessible user interfaces.
		Powered by <Link color="secondary" target="_blank" href="https://tailwindcss.com/">Tailwind CSS</Link>.
	</Text>
    <BottomPagination
		color="default"
		radius="lg"
		size="sm"
		shadow={1}
		buttonsColor="secondary"
		buttonShadow={1}
		buttonsRadius="lg"
		nextHref="/p/sveltekev/install"
	/>
</div>
