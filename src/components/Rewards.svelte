<script>
    import { format } from 'date-fns';

    export let reward = {};
</script>

<div class="notification-container">
    <div class="notification-reward-image" />
    <div class="notification-reward-content">
        <p class="TTCommons-Regular-16">
            <b>{reward.title}</b> — {reward.description}
        </p>
        <p class="notification-reward-content-date">
            {format(reward.dateAcquired, 'MMMM dd yyyy')}
        </p>
    </div>
</div>

<style>
    .notification-reward-content-date {
        font-family: Arial;
        font-size: 16px;
        letter-spacing: -0.04em;

        color: #94a3b8;
    }

    .notification-reward-content {
        flex: 1 1 auto !important;
    }

    .notification-reward-image {
        background-image: url('images/Avatar.png');

        background-repeat: no-repeat;
        background-position: top;
        background-size: 50px;
        margin: 20px;
        padding: 25px;

        border: none;
    }

    .notification-container {
        display: flex;
        align-items: center;
        padding: 16px;
        border-top: 1px solid #e2e8f0;
        gap: 32px;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }
</style>
