<script lang="ts">
    import type { ResourceType } from '@/types';
    export let resource: ResourceType;
</script>

<div class="resources-row">
    <a href={resource.link} target="_blank">
        <img src="/images/MentalHealthHotline.png" />
    </a>
    <div class="resources-row-contents">
        <p class="TTCommons-Bold-16">{resource.title}</p>
        <pre class="TTCommons-Regular-16">{resource.content}</pre>
    </div>
</div>

<style>
    pre {
        width: 100%;
        margin-top: 8px;
        display: block;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    .resources-row-contents {
        width: 80%;
    }

    a {
        width: 20%;
    }

    img {
        width: 100%;
    }
    .resources-row {
        width: 100%;
        background: #fff;
        box-shadow: 0px 25px 25px -12px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        padding: 16px;
        margin-bottom: 8px;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: currentColor;
    }
</style>
