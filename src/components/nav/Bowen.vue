<template>
	<div class="bowen_body">
		<biaoqian></biaoqian>
		<div class="bowenlist">
			<Card v-for="blog in blogs" :key="blog.id">
				<router-link to="/bowenContent">
				
					
						<img src="../../assets/imgaes/1.png">
					<div class="bowenlistContent">
						
						
						<h4>{{blog.title}}</h4>
						<p class="bowenlistInfo">
							<span>发布时间：2019-11-27</span>
							<span>作者：{{}}</span>
						</p>
						<p class="bowenlistTag">
							<Tag color="green">感悟</Tag>
							<Tag color="black">生活</Tag>
						</p>
					</div>
				
				</router-link>
			</Card>
			
		</div>
	</div>
</template>

<script>
	import biaoqian from '../biaoqian.vue'
	export default {
		data() {
			return {
				imagesrc: require('../../assets/imgaes/2ecd3b0452aa197097d5131afacab7b8.png'),
				blogs:[],
				author:''
			}

		},
		components: {
			biaoqian,
		},

		methods(){
			
		},
		created(){
			this.$http.get('../../../static/json/blog.json')
					.then(function(data){
						this.blogs=data.body.slice(0,10)
					})
				
		}
		
	}
</script>

<style lang="scss" scoped>
	.bowen_body {
		margin: 22px;
		margin-top: 44px;

	}

	.bowenlist {
		margin: 10px;

		h4 {
			color: #000;
			line-height: 30px;
		}

		div {
			margin: 5px;

			img {
				width: 100%;
				height: 100%;
				margin: 0px;
				padding: 0px;
				
			}

			.img {
				text-align: center;
				margin-bottom: 5px;
				box-shadow: 1px 1px 5px #BBBBBB;
			}
		}

		.bowenlistInfo {
			margin-top: 10px;
			display: flex;
			justify-content: space-between;
		}

		.bowenlistTag {
			margin-top: 5px;
			padding: 5px;
			display: flex;
			text-align: center;
		}

	}
</style>
