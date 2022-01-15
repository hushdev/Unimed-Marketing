<template>
	<div class="contact red bg-anim-sm" id="contact">
		<transition name="fadeIn">
			<index-contact-modal v-if="showContactModal" @close="showContactModal = false"/>
		</transition>
		<div class="container">
			<app-h2 :text="$t('contact.title')" />
		</div>
		<div class="container fd-r ai-b jc-b">
			<div class="card">
				<ul class="info">
					<div class="list">
						<li>
							<a class="p-XL t-white t-b" href="https://yandex.ru/maps/-/CCUuvQr4tD">
								<img src="@/assets/images/contact/geo.svg" alt="Адрес" />
								{{$t('contact.adress')}}
							</a>
						</li>
						<li>
							<a class="p-XL t-white t-b" href="mailto:info@unimedtrade.uz">
								<img src="@/assets/images/contact/mail.svg" alt="Адрес" />
								info@unimedtrade.uz
							</a>
						</li>
						<li>
							<a class="p-XL t-white t-b" href="tel:+998712004404">
								<img src="@/assets/images/contact/phone.svg" alt="Адрес" />
								{{$t('contact.phone')}}
							</a>
						</li>
					</div>
					<div class="socials fd-r ai-c">
						<BtnPrimary text="Заказать звонок" class="mr-3" @click.native="showContactModal = !showContactModal"/>
						<a href="https://www.instagram.com/unimed_trade/" target="_blank">
							<img src="@/assets/images/instagram.svg" alt="Instagram" />
						</a>
						<a href="https://t.me/Unmdbot" target="_blank">
							<img src="@/assets/images/telegram.svg" alt="Telegram" />
						</a>
					</div>
				</ul>
			</div>
			<div class="map">
				<iframe
					v-lazy-load
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A12d7b74f622bf778838e54df31a9fe3829e6da5b592a29d1590bcf4505e53e66&amp;source=constructor"
					width="100%"
					height="400"
					frameborder="0"
				></iframe>
			</div>
		</div>
		<div class="container credentials fd-r jc-b p-L t-white t-sb">
			<a class="p-S" href="https://www.upwork.com/freelancers/~01aa7aa6602c9494dc">
				{{$t('contact.developer')}}
				<span>an.ildar</span>
			</a>
			<span class="copyright p-S">© {{ year }} UnimedTrade. {{$t('contact.copyright')}}</span>
			<a class="p-S" href="https://www.behance.net/zednight/moodboards">
				{{$t('contact.designer')}}
				<span>Zednight</span>
			</a>
		</div>
	</div>
</template>

<script>
import indexContactModal from './index-contact-modal.vue';
export default {
	components: { indexContactModal },
	data: () => ({
		year: new Date().getFullYear(),
		showContactModal: false
	}),
};
</script>

<style lang="scss" scoped>
.contact {
	width: 100%;
	background: url("@/assets/images/contact/bg.svg") no-repeat right 20px
		#ea544a;
	margin-top: 230px;
	position: relative;
	padding-top: 30px;
	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 213px;
		background: url("@/assets/images/contact/after.svg") repeat-x center;
		position: absolute;
		top: -205px;
		left: 0;
	}
	.container {
		h2 {
			color: #ffffff;
		}
		p {
			max-width: 519px;
			width: 100%;
		}
		.card {
			.info {
				list-style-type: none;
				margin-top: 90px;
				li {
					margin-top: 48px;
					max-width: 433px;
					width: 100%;
					&:first-child {
						margin-top: 0;
					}
					a {
						text-decoration: none;
						display: flex;
						align-items: center;
						img {
							width: 60px;
							height: 60px;
							margin-right: 30px;
						}
					}
				}
				.socials {
					margin-top: 100px;
					a img {
						width: 25px;
						height: 25px;
						margin-right: 20px;
					}
				}
			}
		}
		.map {
			width: 50%;
			height: 500px;
			iframe {
				height: 100% !important;
				width: 100% !important;
				border-radius: 15px;
				overflow: hidden;
				box-shadow: 0 4px 19px rgba(188, 188, 188, 0.28);
			}
		}
	}
	.credentials {
		padding: 150px 0 20px 0;
		a,
		.copyright {
			margin: 0 10px;
		}
		a {
			text-decoration: none;
			color: #ffffff;
			span {
				text-decoration: underline;
			}
		}
	}
}
@media (max-width: 1500px) {
	.contact {
		padding-bottom: 60px;
	}
}
@media (max-width: 834px) {
	.contact {
		.container {
			flex-direction: column;
			align-items: flex-start;
			.card {
				.info {
					margin-top: 60px;
					li {
						margin-top: 40px;
						max-width: 238px;
						a {
							img {
								width: 35px;
								height: 35px;
								margin-right: 23px;
							}
						}
					}
					.socials {
						margin-top: 50px;
					}
				}
			}
			.map {
				margin-top: 50px !important;
				width: 100%;
			}
		}
		.credentials {
			padding: 50px 0 60px 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			.copyright {
				margin: 15px 0 !important;
				max-width: 200px;
				width: 100%;
				text-align: center;
			}
			.copyright,
			a {
				font-size: 14px;
			}
		}
	}
}
@media (max-width: 700px) {
	.contact {
		margin-top: 80px;
		&::before {
			height: 76px;
			top: -75px;
			background-size: cover;
		}
		.container {
			.map {
				height: 350px;
			}
		}
	}
}
</style>