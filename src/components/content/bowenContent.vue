<template>
	<div class="content">
		<div class="content_nav">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/bowen">博文</BreadcrumbItem>
				<BreadcrumbItem>文章</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="article-box">
			<div class="article-title">
				<h1>{{article_title}}</h1>
			</div>
			<div class="acticle-content">
				<p class="acticle-info">
					<span>发布时间：{{createTime}}</span>
					<span>浏览量:{{looktimes}}</span>

				</p>
				<p v-html="article"></p>
			</div>
			<div class="actcle-bottom">
				<span>点赞</span>
				<span>收藏</span>
				<span>转发</span>
			</div>
		</div>



		<liuyan></liuyan>
	</div>
</template>

<script>
	import liuyan from '../nav/Liuyan.vue' //导入留言模块
	import article from '../../bowen/1.md'
	export default {
		data() {
			return {
				article_title: '为什么编程是独一无二的职业',
				looktimes: 10,
				createTime: '2019.10.4',
				article: this.md2html(article)
			}
		},
		components: {
			liuyan
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin: 22px;
		margin-top: 44px;
		padding: 0px;
	}

	.content_nav {
		line-height: 30px;
		background: #fff;

	}

	.article-box {
		margin: 0 auto;
		background: #fff;
		padding: 10px;
		margin-top: 10px;
		border-radius: 5px;

		.article-title {

			text-align: center;

			h1 {
				font-size: 20px;
				font-family: "微软雅黑"；
			}
		}


		.acticle-info {
			color: darkgray;
			display: flex;
			justify-content: space-between;
			margin-bottom: 15px;
		}

		.acticle-content {
			margin: 15px;
		}
		.actcle-bottom{
			font-size: 20px;
			font-family: "仿体";
			margin-left: 30px;
			margin-right: 30px;
			display: flex;
			justify-content: space-between;
			
			span{
				background: darkgray;
				border-radius: 50%;
				padding: 10px;
			}
		}
	}
</style>
