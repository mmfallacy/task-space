<script lang="ts">
    import Modal from '@/components/CreateTaskModal.svelte';
    import { currentUser } from '@/stores/currentUser';
    import Resources from '@/components/Resources.svelte';
    import Layout from '../layout.svelte';

    const resources = [
        {
            title: '10-minute meditation for anxiety',
            items: [
                'This easy 10-minute meditation is the perfect way to start your day off right. Written and Narrated by John Davisi. John is a mindfulness life coach and speaker. Check out his other mindfulness and meditation sessions at https://www.youtube.com/c/johndavisi',
            ],
            tags: ['Meditation'],
        },
        {
            title: '10-minute meditation for anxiety',
            items: [
                'This easy 10-minute meditation is the perfect way to start your day off right. Written and Narrated by John Davisi. John is a mindfulness life coach and speaker. Check out his other mindfulness and meditation sessions at https://www.youtube.com/c/johndavisi',
            ],
            tags: ['Meditation'],
        },
    ];
</script>

<Layout>
    <div class="right-left-wrapper">
        <div class="left">
            <h1 class="TTCommons-Regular-20">Back to Dashboard</h1>

            <button class="line" style="width: 250px;" />
        </div>
        <div class="right">
            <div class="resources-header">
                <h1 style="font-family: arial;">Resources</h1>
            </div>

            <div class="spacer" />

            <div class="resources-wrapper">
                <div class="resources-row-mental">
                    <div class="resources-row-contents">
                        <div class="resources-row-contents-container">
                            <div class="mental-hotline" />

                            <div class="resource-information">
                                <div class="resource-information-container">
                                    <p class="TTCommons-Bold-16">
                                        Need help? Here are mental health
                                        hotlines!
                                    </p>
                                    <p class="para-spacer" />
                                    <p class="TTCommons-Regular-16">
                                        09XXXXXXXXX — Philippine Mental Health
                                        Association
                                    </p>
                                    <p class="TTCommons-Regular-16">
                                        09XXXXXXXXX — 24/7 Mental Health Hotline
                                    </p>
                                    <p class="TTCommons-Regular-16">
                                        email@gmail.com — Better Health
                                    </p>
                                    <p class="TTCommons-Regular-16">
                                        email@gmail.com — PsychServe
                                    </p>
                                </div>
                            </div>

                            <div class="pin" />
                        </div>
                    </div>
                </div>

                <Resources {resources} />
            </div>
        </div>
    </div>
</Layout>

<style>
    .tags {
        column-gap: 8px;
    }

    .skill {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        line-height: 20px;
        color: #1e293b;
    }

    .tag {
        padding: 6px 14px;
        margin: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100px;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e2e8f0;
        border-radius: 26px;
        min-height: 18px;

        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .pin {
        background-image: url('icons/Pin.png');

        background-repeat: no-repeat;
        background-position: top;
        background-size: 24px;
        margin: 20px;
        padding: 20px;

        border: none;
    }

    .para-spacer {
        height: 5px;
    }

    .resources-row-contents-container {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .resource-information-container {
        padding: 16px;
        gap: 16px;
    }

    .resource-information {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .mental-hotline {
        background-image: url('images/MentalHealthHotline.png');
        background-repeat: no-repeat;
        background-position: left;
        background-size: 350px;

        padding: 0px 0px 200px 250px;

        border-radius: 8px;
        border: none;
    }

    .resources-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        height: 56px;
        background-color: #fff;

        padding: 12px 32px;
    }

    .spacer {
        height: 25px;
    }

    .resources-row-contents {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 150px;
        padding: 0px;
        flex-wrap: wrap;
        position: relative;
    }

    .resources-row-mental {
        width: calc(100% - 10px);
        background: #ecfdf5;
        box-shadow: 0px 25px 25px -12px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .resources-row {
        width: calc(100% - 10px);
        background: #fff;
        box-shadow: 0px 25px 25px -12px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .resources-wrapper {
        display: flex;
        flex-direction: column;
        grid-row-gap: 16px;
        row-gap: 16px;
        padding: 1px;
        overflow: hidden;
    }

    .right-left-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .right {
        background-color: #f1f5f9;
        overflow: hidden auto;

        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        padding: 24px;
    }

    .horizontal {
        margin-top: -20px;
        height: 1px;
        width: 100%;
        background: #e2e8f0;
    }

    .checkbox-child-title {
        font-family: Arial;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #94a3b8;

        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 8px;
    }

    .flex-fill {
        flex: 1 1 auto !important;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 3px;
        margin-bottom: 0px;
    }

    input[type='checkbox'] {
        box-sizing: border-box;
        padding: 0;
    }

    input {
        color: #000;

        overflow: visible;

        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    .checkbox-list {
        border: 1px solid #e2e8f0;
        margin: 8px 0 0 0px;
        padding: 14px;
        border-radius: 5px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .checkbox-main {
        background: #000;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        height: 42px;
        padding: 0 8px;
        display: flex;
        align-items: center;
    }

    .checkbox-main-white {
        background: white;
        border-radius: 5px;
        padding: 0 8px;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
    }

    .left {
        width: 250px;
        background: #fff;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        padding: 24px 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .line {
        cursor: pointer;

        background: E2E8F0;
        border-radius: 8px;
        border: none;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Bold-16 {
        font-family: Arial;
        font-weight: bold;
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
</style>
