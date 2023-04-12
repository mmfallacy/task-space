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
                        <p class="TTCommons-Regular-20">
                            A safe space to help students plan and perform
                            academic tasks with ease
                        </p>
                    </div>
                    <div>
                        <div class="bannerImage" />
                    </div>
                </div>
            </div>
            <div class="loginRightContainer">
                <div class="RightContainerInner">
                    <h1 class="TTCommons-Regular-34">Sign Up</h1>

                    <p class="TTCommons-Regular-18">
                        Already have an account? <a class="hyperlink" href="#"
                            >Login here.</a
                        >
                    </p>

                    <div class="name-wrapper">
                        <div class="firstname">
                            <div class="name" style="margin: 0px 0px 8px 0px;">
                                <label class="TTCommons-Regular-16" for="name"
                                    >First Name</label
                                >
                            </div>
                            <div>
                                <input
                                    class="form"
                                    style="width:100%"
                                    type="text"
                                    name="email"
                                />
                            </div>
                        </div>

                        <div class="lastname">
                            <div class="name" style="margin: 0px 0px 8px 0px;">
                                <label class="TTCommons-Regular-16" for="name"
                                    >Last Name</label
                                >
                            </div>
                            <div>
                                <input
                                    class="form"
                                    style="width:100%"
                                    type="text"
                                    name="email"
                                />
                            </div>
                        </div>
                    </div>
                    <br />

                    <div style="margin: 0px 0px 8px 0px;">
                        <label class="TTCommons-Regular-16" for="name"
                            >Email</label
                        >
                    </div>
                    <div>
                        <input class="form" type="text" name="email" />
                    </div>
                    <br />

                    <div style="margin: 0px 0px 8px 0px;">
                        <label class="TTCommons-Regular-16" for="name"
                            >Password</label
                        >
                    </div>
                    <div>
                        <input class="form" type="text" name="password" />
                    </div>
                    <br />

                    <button class="primary-button" type="submit">Log In</button>
                </div>
            </div>
        </div>
    </main>
</div>

<style>
    .hyperlink {
        color: #0a5bd0;
    }

    .TTCommons-Regular-34 {
        font-family: Arial;
        font-size: 34px;
        color: black;
        letter-spacing: -0.04em;
    }

    .RightContainerInner {
        align-items: left;
        width: 40%;
    }

    .body {
        min-height: 100vh;
        position: relative;
        background-color: #fff;
        overflow: hidden;
        display: flex;
    }

    .title {
        margin: 25px;
        text-align: center;
    }

    .body-left {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 480px;
    }

    .loginLeftContainer {
        height: 100%;
        background: #f8fafc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bannerImage {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: flex-end;
        background-image: url("/images/03.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom;
        margin: 24px 24px;
        padding: 150px 24px;
    }

    .loginRightContainer {
        width: 100%;
        overflow: hidden auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-18 {
        font-family: Arial;
        font-size: 18px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-SemiBold-72 {
        font-family: Arial;
        font-size: 72px;
        color: #04285c;
        letter-spacing: -0.04em;
    }

    .primary-button {
        background-color: #0a5bd0;

        cursor: pointer;

        font-family: Arial;
        font-weight: 600;
        border-radius: 5px;
        box-shadow: none;
        color: #f8fafc;
        line-height: 20px;
        height: 44px;

        border: 1px solid transparent;
        width: 100%;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
    }

    .form {
        width: 100%;
        background-color: #e2e8f0;
        border-radius: 4px;
        font-family: Arial;
        padding: 12px 16px;
        border: 1px solid #e2e8f0;
        box-sizing: border-box;
        transition: 0.5s;
        outline: none;
    }

    .name-wrapper {
        align-items: center;
        display: flex;
    }

    .firstname {
        flex: 0 0 50%;
        max-width: 50%;
        margin-right: 2%;
    }

    .lastname {
        flex: 0 0 50%;
        max-width: 48%;
    }

    .name {
        display: flex;
        flex-direction: column;
    }
</style>

