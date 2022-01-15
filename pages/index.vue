<template>
	<div class="app">
		<app-loader />
		<index-offer />
		<div class="screen fd-c ai-c" id="main">
			<index-about />
			<index-services />
			<index-strategy />
			<index-faq />
			<index-contact />
		</div>
	</div>
</template>

<script>
export default {
	layout: "default",
};
</script>

<style lang="scss">
.app {
	.screen {
		position: static;
		top: 0;
		left: 0;
		right: 0;
		z-index: 5;
		background: #ffffff;
	}
}

.isLoading {
	opacity: 0;
	transform: scale(0.5) scaleZ(2);
}

.isLoaded {
	animation: bg 1.5s ease forwards;
}

.fadeIn-enter-active, .fadeIn-leave-active { transition: opacity .5s; }
  .fadeIn-enter, .fadeIn-leave-active { opacity: 0; }

@keyframes bg {
	0% {
		opacity: 0;
		transform: scale(0.5);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
