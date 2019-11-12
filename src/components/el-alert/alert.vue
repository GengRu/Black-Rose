<template>
	<div id="Alert" v-if="type">
		<section class="elt-tip_text_container">
			<div class="elt-tip_icon"><span></span> <span></span></div>
			<p class="elt-tip_text">
				{{msg}}
			</p>
			<div class="confrim" @click="btn">确认</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				type: true,
				cb: null
			}
		},
		methods: {
			btn() {
				this.type = false
				setTimeout(() => {
					this.cb()
				}, 200)
			}
		}
	}
</script>

<style>
	#Alert {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
	}

	.elt-tip_text_container {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -4.32rem;
		margin-left: -4.32rem;
		width: 8.64rem;
		background-color: #fff;
		padding-top: 0.43rem;
		border: 1px;
		border-radius: 0.18rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		display: flex;
		animation: tipMove 0.4s;
	}

	.elt-tip_text_container .elt-tip_icon {
		width: 2.16rem;
		height: 2.16rem;
		border: 0.11rem solid #f8cb86;
		border-radius: 50%;
		display: flex;
		-ms-flex-pack: center;
		justify-content: center;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: column;
		flex-direction: column;
	}

	.elt-tip_text_container .elt-tip_icon span:first-of-type {
		width: 0.09rem;
		height: 1.08rem;
		background-color: #f8cb86;
	}

	.elt-tip_text_container .elt-tip_icon span:nth-of-type(2) {
		width: 0.14rem;
		height: 0.14rem;
		border: 1px;
		border-radius: 50%;
		margin-top: 0.14rem;
		background-color: #f8cb86;
	}

	.elt-tip_text_container .elt-tip_text {
		font-size: 0.5rem;
		color: #333;
		line-height: 0.65rem;
		height: 0.65rem;
		text-align: center;
		margin-top: 0.58rem;
		padding: 0 0.29rem;
	}

	.elt-tip_text_container .elt-tip_text span {
		font-size: 0.5rem;
	}

	.elt-tip_text_container .confrim {
		font-size: 0.58rem;
		color: #fff;
		font-weight: 700;
		margin-top: 0.58rem;
		background-color: #4cd964;
		width: 100%;
		text-align: center;
		line-height: 1.3rem;
		border: 1px;
		border-bottom-left-radius: 0.18rem;
		border-bottom-right-radius: 0.18rem;
	}

	@-webkit-keyframes tipMove {
		0% {
			transform: scale(1);
		}

		35% {
			transform: scale(0.8);
		}

		70% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
