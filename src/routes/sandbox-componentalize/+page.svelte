<!-- App.svelte -->
<script lang="ts">
    import Modal from "@/components/CreateTaskModal.svelte";
    import Navbar from "@/components/Navbar.svelte";
    import Sidebar from "@/components/Sidebar.svelte";
    import TaskForm from "@/components/TaskForm.svelte";
  
    let showModal = false;
  
    function handleToggleModal() {
      showModal = !showModal;
    }
  
    function handleSubmit(data) {
      console.log("Form submitted:", data);
    }
  </script>
  
  <main>
    <div class="main">
      <Navbar />
      <Sidebar on:toggleModal="{handleToggleModal}" />
    </div>
  
    <Modal bind:showModal="{showModal}">
      <div slot="header">
        <div class="modal-header">
          <div class="TTCommons-DemiBold-34">Create a task</div>
          <div class="TTCommons-Regular-20">
            An organized task schedule is key to success!
          </div>
          <hr />
        </div>
      </div>
  
      <TaskForm on:submit="{handleSubmit}" />
    </Modal>
  </main>

  <style>
    .TTCommons-Regular-20 {
      font-family: Arial;
      font-size: 20px;
      color: black;
      letter-spacing: -.04em;
    }

    .TTCommons-DemiBold-34 {
      font-family: Arial;
      font-weight: bold;
      font-size: 34px;
      color: black;
      letter-spacing: -.04em;
    }
  </style>
  