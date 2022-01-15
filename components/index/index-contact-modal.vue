<template>
	<div class="index-contact-modal red">
		<div @click="$emit('close')" class="index-contact-modal-close">
			<img src="@/assets/images/close.svg" alt="Закрыть" />
		</div>
		<div class="index-contact-modal-wrap shadow">
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSd3tpNDhF_VpfRh-8sh9aTFbgxdzoEUzizKmDeSvTBjXefbRg/viewform?embedded=true"
				width="640"
				height="844"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>Загрузка…</iframe>
		</div>
	</div>
</template>

<script>
export default {
	created() {
        window.addEventListener('keydown', (e) =>{
            if (e.key === "Escape") {
                this.$emit('close')
            }
        })
	},
};
</script>

<style lang="scss" scoped>
.index-contact-modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 10px 10px 10px;
	&-close {
		width: 40px;
		height: 40px;
		cursor: pointer;
		position: fixed;
		top: 30px;
		right: 30px;
		img {
			width: 100%;
			height: auto;
		}
	}
	&-wrap {
		overflow: hidden;
		background: #ffffff;
		padding: 30px 20px;
		border-radius: 20px;
		iframe {
			width: 700px;
			height: 600px;
		}
	}
}

@media (max-width: 850px) {
	.index-contact-modal {
		overflow-x: hidden !important;

		&-close {
			width: 20px;
			height: 20px;
			top: 13px;
			right: 15px;
		}
		&-wrap {
			padding: 20px 10px;
			width: 100%;
			overflow-x: hidden !important;

			iframe {
				width: 100%;
				overflow-x: hidden !important;
				height: calc(100vh - 100px);
			}
		}
	}
}
</style>