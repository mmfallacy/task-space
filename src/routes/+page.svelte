<script>
	import Modal from './task.svelte';

	let showModal = false;

	function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
  }
</script>

<main>
	<button on:click={() => (showModal = true)}>
		+
	</button>
	
	<Modal bind:showModal>
		<h2 slot="header">
			<b>Create a task</b>
			<hr />
		</h2>
	
		<form on:submit|preventDefault={onSubmit}>
			<div>
				<label for="name">Task Title</label>
				<input
				  type="text"
				  name="tasktitle"
				/>
			</div>
			<br />
			<div>
				<label for="name">Date</label>
				<input
				  type="text"
				  name="date"
				/>
			</div>
			<br />
			<div>
				<label for="name">Timeslot</label>
				<input
				  type="text"
				  name="timeslot"
				/>
			</div>
			<br />
			<div>
				<label for="name">Category</label>
				<input
				  type="text"
				  name="category"
				/>
			</div>
			<br />
			<div>
				<label for="name">Notes</label>
				<input
				  type="text"
				  name="notes"
				/>
			</div>
			<br />
			<button type="submit">Continue</button>
	</Modal>
</main>

