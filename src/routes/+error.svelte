<script>
	export let error;
	export let status;
	const pageTitle = 'Error Page';
	const pageSubtitle = 'Oops! Something went wrong.';
	const fallbackMessage = 'Something went wrong. This page could not be found.';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageSubtitle} />
</svelte:head>

<div
	class="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white font-geist px-4"
>
	<div class="flex flex-col items-center gap-4">
		<span
			class="text-7xl md:text-9xl font-bold animate-pulse bg-red-400 bg-clip-text text-transparent select-none"
		>
			{status ?? 404}
		</span>
		<h1 class="text-3xl md:text-5xl font-bold text-center">
			{error?.message ?? fallbackMessage}
		</h1>
		<p class="text-lg text-gray-400 text-center max-w-xl">
			{error?.stack ? error.stack.split('\n')[0] : ''}
		</p>
		<a
			href="/"
			class="mt-6 px-6 py-3 rounded-xl bg-red-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
			>Go Home</a
		>
	</div>
</div>
