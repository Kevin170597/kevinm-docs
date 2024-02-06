<script lang="ts">
	import { Card, Text, Link, Image } from 'sveltekev';
</script>

<div class="flex justify-center">
	<div class="w-1/2 grid grid-cols-3 grid-rows-9 gap-3">
		<Card radius="lg" shadow={1}>
			<div class="p-3 pb-1 px-4">
				<Text color="white">Instagrapy</Text>
			</div>
			<div class="p-4 flex flex-col gap-4 items-center">
				<Image radius="lg" width="100%" src="/instagrapy-cover.png" />
				<Text color="gray">A tool to plan and schedule posts on Instagram.</Text>
			</div>
			<div class="pb-3 px-4">
				<Link href="/p/instagrapy" color="secondary" underline="always">Read docs.</Link>
			</div>
		</Card>
		<Card radius="lg" shadow={1}>
			<div class="p-3 pb-1 px-4">
				<Text color="white">SvelteKev</Text>
			</div>
			<div class="p-4 flex flex-col gap-4 items-center">
				<Image radius="lg" width="100%" src="/sveltekev-cover.png" />
				<Text color="gray">
					UI library for Svelte that helps you build beautiful and accessible user interfaces.
				</Text>
			</div>
			<div class="pb-3 px-4">
				<Link href="/p/sveltekev" color="secondary" underline="always">Read docs.</Link>
			</div>
		</Card>
	</div>
</div>
