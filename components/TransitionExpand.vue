<template>
    <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <slot></slot>
    </transition>
</template>

<script>
export default {
	data: () => ({
		timeout: null,
	}),
	methods: {
		enter(el) {
			el.style.height = "auto";
			const height = getComputedStyle(el).height;
			el.style.height = 0;
			getComputedStyle(el);
			setTimeout(() => {
				el.style.height = height;
			});
		},
		afterEnter(el) {
			el.style.height = "auto";
		},
		leave(el) {
			el.style.height = getComputedStyle(el).height;
			el.style.opacity = 0;
			getComputedStyle(el);
			this.timeout = setTimeout(() => {
				el.style.height = 0;
				el.style.paddingTop = 0;
				el.style.paddingBottom = 0;
				el.style.marginTop = 0;
				el.style.marginBottom = 0;
				clearTimeout(this.timeout);
			}, 100);
		},
	},
};
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
	transition: all 0.5s ease-in;
	overflow: hidden;
	opacity: 1;
}

.expand-enter,
.expand-leave-to {
	opacity: 0;
}
</style>