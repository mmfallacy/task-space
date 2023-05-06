<script lang="ts">
    import { CredentialsSchema } from '@/types';
    import { hashSHA256 } from '@/utils';
    import { credentials } from '@/stores/credentials';
    import { assert } from '@/asserts';
    import { z } from 'zod';
    import { goto } from '$app/navigation';
    import { currentUser } from '@/stores/currentUser';
    import { notifications } from '@/stores/notifications';
    import Toasts from '@/components/Toasts.svelte';

    async function onSubmit(this: HTMLFormElement) {
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        const LoginSchema = z.object({
            email: CredentialsSchema.shape.email,
            password: z.string(),
        });

        const parsed = LoginSchema.parse(data);

        const passwordHash = await hashSHA256(parsed.password);

        const target = CredentialsSchema.omit({ uid: true }).parse({
            email: parsed.email,
            passwordHash,
        });

        const match = $credentials.filter(
            (credential) =>
                credential.email === target.email &&
                credential.passwordHash === target.passwordHash
        );

        // Only 1 matching registered user
        if (match.length != 1)
            return notifications.send('Invalid Credentials!', 'email', 3000);

        currentUser.update(() => match[0].uid);

        goto('/task-list');
    }

    if ($currentUser != null) goto('/task-list');
</script>

{#if $currentUser == null}
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
                    <form class="RightContainerInner" on:submit={onSubmit}>
                        <h1 class="TTCommons-Regular-34">Login</h1>

                        <p class="TTCommons-Regular-18">
                            Don’t have an account? <a
                                class="hyperlink"
                                href="/signup">Create an account here.</a
                            >
                        </p>

                        <div style="margin: 0px 0px 8px 0px;">
                            <label class="TTCommons-Regular-16" for="name"
                                >Email</label
                            >
                        </div>
                        <div>
                            <input
                                class="form"
                                type="text"
                                name="email"
                                required
                            />
                        </div>
                        <br />

                        <div style="margin: 0px 0px 8px 0px;">
                            <label class="TTCommons-Regular-16" for="name"
                                >Password</label
                            >
                        </div>
                        <div>
                            <input
                                class="form"
                                type="text"
                                name="password"
                                required
                            />
                        </div>
                        <br />

                        <button class="primary-button" type="submit"
                            >Log In</button
                        >
                    </form>
                </div>
            </div>
        </main>
        <Toasts />
    </div>
{/if}

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
        background-image: url('/images/03.png');
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
</style>
