<script lang="ts">
	import {
		Image,
		Container,
		Text,
		Title,
		Breadcrumbs,
		BottomPagination,
		Card,
		Chip,
		SideBar,
		Divider,
		OnThisPage
	} from 'sveltekev';
	import { infoCards, paths, onThisPageLinks } from './pageData';

	let linksArray = [
		{
			label: 'Quick start',
			href: '/p/instagrapy',
			activePath: '/p/instagrapy'
		},
		{
			label: 'Install',
			href: '/p/instagrapy/install',
			activePath: '/p/instagrapy/install'
		},
		{
			label: 'API',
			href: '/p/instagrapy/api',
			activePath: '/p/instagrapy/api'
		}
	];
</script>

<svelte:head>
	<title>Quick start | Instagrapy</title>
</svelte:head>

<div class="w-3/5 px-4 pb-8 flex flex-col gap-4">
	<Breadcrumbs {paths} color="secondary" shadow={1} radius="lg" size="sm" />
	<Title color="white" size="xl">Introduction</Title>
	<div class="flex items-start gap-2">
		<Chip
			icon="github"
			size="sm"
			radius="full"
			content="Source Client"
			link="https://github.com/Kevin170597/instagrapy"
		/>
		<Chip
			icon="github"
			size="sm"
			radius="full"
			content="Source Server"
			link="https://github.com/Kevin170597/instagrapy-server"
		/>
	</div>
	<Text color="gray">Welcome to SvelteKev documentation!</Text>
	<Image radius="lg" src="/instagrapy-cover.png" />
	<Title color="white" size="xl">What is Instagrapy?</Title>
	<div class="flex gap-4">
		<Image src="/phone-instagrapy.png" alt="preview" width="30%" radius="lg" />
		<Text size="md" color="gray">
			Instagram is an intuitive application designed to simplify and optimize the management of
			posts on Instagram.
			<br />
			With this tool, users can plan and schedule their publications on the platform efficiently, saving
			time and ensuring a constant presence on social networks.
		</Text><!-- 
		<div class="grid grid-cols-3 gap-4">
			{#each infoCards as info}
				<Card color="default" radius="lg" shadow={1} title={info.title}>
					<div class="px-3 py-2">
						<Text color="gray">{info.content}</Text>
					</div>
				</Card>
			{/each}
		</div> -->
	</div>
	<BottomPagination
		size="sm"
		buttonsRadius="lg"
		buttonShadow={1}
		buttonsColor="secondary"
		radius="lg"
		color="default"
		shadow={1}
		nextHref="/p/instagrapy/install"
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
