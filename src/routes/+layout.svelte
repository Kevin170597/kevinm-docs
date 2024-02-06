<script>
	import '../app.css';
	import { Text, Link } from 'sveltekev';
</script>

<svelte:head>
	<title>Kevin Mendoza</title>
</svelte:head>

<header class="h-[8vh] fixed w-full bg-[#0f0f0f] flex items-center px-8">
	<Link href="/" color="white">Kevin Mendoza</Link>
</header>

<slot />
