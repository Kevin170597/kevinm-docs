<script lang="ts">
	import {
		Text,
		Title,
		Breadcrumbs,
		CodeBlock,
		BottomPagination,
		OnThisPage,
		Divider,
		Table
	} from 'sveltekev';
	import { onThisPageLinks, serverRequeriments, clientRequeriments, paths } from './pageData';
</script>

<svelte:head>
	<title>Install | Instagrapy</title>
</svelte:head>

<div class="w-[60%] pl-8 pr-16 pb-6 flex flex-col gap-4">
	<Breadcrumbs {paths} color="secondary" shadow={1} radius="lg" size="sm" />
	<Title color="white" id="server-setup">Server Setup</Title>
	<Text id="server-requirements" size="sm" color="gray">Server requirements.</Text>
	<Table radius="lg" color="default" size="sm" data={serverRequeriments} />
	<Text id="clone-server-repository" size="sm" color="gray">Clone server repository.</Text>
	<CodeBlock
		radius="lg"
		code="git clone https://github.com/Kevin170597/instagrapy-server.git"
		lang="bash"
		size="sm"
	/>
	<Text id="install-server-dependencies" size="sm" color="gray">Install dependencies.</Text>
	<CodeBlock radius="lg" code="cd instagrapy-server" lang="bash" size="sm" />
	<CodeBlock radius="lg" code="pip -r requirements.txt" lang="bash" size="sm" />
	<Text id="run-server-app" size="sm" color="gray">Run app</Text>
	<CodeBlock radius="lg" code="python app.py" lang="bash" size="sm" />
	<Divider />
	<Title color="white" id="client-setup">Client Setup</Title>
	<Text id="client-requirements" size="sm" color="gray">Client requirements.</Text>
	<Table radius="lg" color="default" size="sm" data={clientRequeriments} />
	<Text id="clone-client-repository" size="sm" color="gray">Clone client repository.</Text>
	<CodeBlock
		radius="lg"
		code="git clone https://github.com/Kevin170597/instagrapy.git"
		lang="bash"
		size="sm"
	/>
	<Text id="install-client-dependencies" size="sm" color="gray">Install dependencies</Text>
	<CodeBlock radius="lg" code="cd instagrapy" lang="bash" size="sm" />
	<CodeBlock radius="lg" code="npm i" lang="bash" size="sm" />
	<Text id="run-client-app" size="sm" color="gray">Run app</Text>
	<CodeBlock radius="lg" code="npm run dev" lang="bash" size="sm" />
	<BottomPagination
		size="sm"
		buttonsRadius="lg"
		buttonShadow={1}
		buttonsColor="secondary"
		radius="lg"
		color="default"
		shadow={1}
		prevHref="/p/instagrapy"
		nextHref="/p/instagrapy/api"
	/>
</div>
<div class="w-[20%]">
	<OnThisPage links={onThisPageLinks} tailwindClass="fixed" />
</div>
