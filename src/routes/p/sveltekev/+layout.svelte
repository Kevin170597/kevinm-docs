<script lang="ts">
	import { SideBar } from 'sveltekev';

	let linksArray = [
		{
			label: 'Introduction',
			href: '/p/sveltekev',
			activePath: '/p/sveltekev'
		},
		{
			label: 'Install',
			href: '/p/sveltekev/install',
			activePath: '/p/sveltekev/install'
		},
		{
			label: 'Accordion',
			href: '/p/sveltekev/accordion',
			activePath: '/p/sveltekev/accordion'
		},
		{
			label: 'Bottom Pagination',
			href: '/p/sveltekev/bottom-pagination',
			activePath: '/p/sveltekev/bottom-pagination'
		},
		{
			label: 'Breadcrumbs',
			href: '/p/sveltekev/breadcrumbs',
			activePath: '/p/sveltekev/breadcrumbs'
		},
		{
			label: 'Button',
			href: '/p/sveltekev/button',
			activePath: '/p/sveltekev/button'
		},
		{
			label: 'Card',
			href: '/p/sveltekev/card',
			activePath: '/p/sveltekev/card'
		},
		{
			label: 'Checkbox',
			href: '/p/sveltekev/checkbox',
			activePath: '/p/sveltekev/checkbox'
		},
		{
			label: 'Chip',
			href: '/p/sveltekev/chip',
			activePath: '/p/sveltekev/chip'
		},
		{
			label: 'Image',
			href: '/p/sveltekev/image',
			activePath: '/p/sveltekev/image'
		},
		{
			label: 'Input',
			href: '/p/sveltekev/input',
			activePath: '/p/sveltekev/input'
		},
		{
			label: 'Link',
			href: '/p/sveltekev/link',
			activePath: '/p/sveltekev/link'
		},
		{
			label: 'Select',
			href: '/p/sveltekev/select',
			activePath: '/p/sveltekev/select'
		},
		{
			label: 'Switch',
			href: '/p/sveltekev/switch',
			activePath: '/p/sveltekev/switch'
		},
		{
			label: 'Table',
			href: '/p/sveltekev/table',
			activePath: '/p/sveltekev/table'
		},
		{
			label: 'Tabs',
			href: '/p/sveltekev/tabs',
			activePath: '/p/sveltekev/tabs'
		},
		{
			label: 'Text',
			href: '/p/sveltekev/text',
			activePath: '/p/sveltekev/text'
		},
		{
			label: 'Textarea',
			href: '/p/sveltekev/textarea',
			activePath: '/p/sveltekev/textarea'
		},
		{
			label: 'Title',
			href: '/p/sveltekev/title',
			activePath: '/p/sveltekev/title'
		}
	];
</script>

<div class="w-1/5">
	<SideBar
		links={linksArray}
		color="default"
		tailwindClass="fixed h-[86vh] overflow-y-hidden !w-1/5 bg-inherit hover:overflow-y-auto"
	/>
</div>

<slot />
