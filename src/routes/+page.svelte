<script>
	// import './styles.css';
</script>

<div class="app">
	<main>
		<div class="body">
		<div class="body-left">
		<div class="loginLeftContainer">
			<div class="title">
				<p class="TTCommons-SemiBold-72">Task Space</p>
				<p class="TTCommons-Regular-20">A safe space to help students plan and perform academic tasks with ease</p>
			</div>
			<div>
				<div class="bannerImage">
				</div>
			</div>
		</div>
		</div>
		<div class="loginRightContainer">
			<p>space for the login</p>
		</div>
		</div>
	</main>
</div>

<style>

.body {
	min-height: 100vh;
    position: relative;
    background-color: #fff;
	overflow: hidden;
    display: flex;
}

.title {
	margin: 50px;
	text-align: center;
}

.body-left {
	flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 480px;
}

.loginLeftContainer{
	height: 100%;
    background: #F8FAFC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bannerImage {
	display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    background-image: url(03.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    margin: 50px 24px;
	padding: 180px 24px;
}

.loginRightContainer{
	width: 100%;
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
}

.TTCommons-Regular-20 {
	font-family: Arial;
	font-size: 20px;
	color: black;
	letter-spacing: -.04em;
}

.TTCommons-SemiBold-72 {
	font-family: Arial;
	font-size: 72px;
	color: #04285C;
	letter-spacing: -.04em;
}
</style>
