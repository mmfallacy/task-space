<script>
    import { MainFilter } from '@/task-list-exports.js';
    import { TypeFilter } from '@/task-list-exports.js';
    import { QuizFilter } from '@/task-list-exports.js';
    import { ProjectFilter } from '@/task-list-exports.js';
    import { ProblemSetFilter } from '@/task-list-exports.js';
    import { CategoriesFilter } from '@/task-list-exports.js';
    import { CS32Filter } from '@/task-list-exports.js';
    import { CS21Filter } from '@/task-list-exports.js';
    import { CS140Filter } from '@/task-list-exports.js';
    import { CS191Filter } from '@/task-list-exports.js';
</script>

<main>
    <div class="left">
        <h1 class="TTCommons-Regular-20">Back to Dashboard</h1>

        <button class="line" style="width: 250px;" />

        <div class="checkbox-list">
            <MainFilter />

            <TypeFilter />

            <div class="horizontal" />

            <QuizFilter />

            <ProjectFilter />

            <ProblemSetFilter />

            <CategoriesFilter />

            <div class="horizontal" />

            <CS140Filter />

            <CS32Filter />

            <CS191Filter />

            <CS21Filter />
        </div>
    </div>
</main>

<style>
    .left {
        width: 250px;
        height: calc(100vh - 68px);
        background: #fff;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        padding: 24px 16px;
        margin: 10px 10px 10px 55px;
        display: flex;
        flex-direction: column;
    }

    .line {
        cursor: pointer;

        background: E2E8F0;
        border-radius: 8px;
        border: none;
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

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }

    .horizontal {
        margin-top: -20px;
        height: 1px;
        width: 100%;
        background: #e2e8f0;
    }
</style>
