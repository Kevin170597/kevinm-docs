<script lang="ts">
    import { SideBar } from "sveltekev";

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
		},
	];
</script>

<div class="w-1/5">
	<SideBar links={linksArray} color="default" tailwindClass="fixed h-[86vh] !w-1/5 bg-inherit" />
</div>
<slot />