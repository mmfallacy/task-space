<script>
	import Modal from './CreateTaskModal.svelte';
	let showModal = false;

	function onSubmit(e) {
		// smth here
  }
</script>

<main>
	<button on:click={() => (showModal = true)}>
		+
	</button>
	
	<Modal bind:showModal>
		<h2 slot="header">
			<b>Create a task</b>
			<p>An organized task schedule is key to success!</p>
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
				  type=date
				  name="date"
				/>
			</div>
			<br />
			<div>
				<label for="name">Timeslot</label>
				<input
				  type=time
				  name="startTime"
				/>
			<nobr>-</nobr>
				<input
				  type=time
				  name="endTime"
				/>
			</div>
			<br />
			<div>
				<label for="name">Category</label>
				<input
				  type=select
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

