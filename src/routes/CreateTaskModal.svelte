<script lang="ts">
	import Modal from './Modal.svelte';
	
	let showModal = false;

	// example categories muna yung cat:
	let cat = [
		{ id: 1, text: "CS 180" },
		{ id: 2, text: "CS 192" }
	];

	let selected;
	let ans = '';

	// sets task title and date as required fields (idk if needed pa to but i just put it)
	function isFormValid(data: {[fieldName: string]: any}): boolean {
    if(!isRequiredFieldValid(data.tasktitle)){
      return false
    }

    if(!isRequiredFieldValid(data.date)){
      return false
    }
    return true
    }

    function isRequiredFieldValid(value){
    return value != null && value !== ""
    }

	function onSubmit(e) {
		// smth here
		
		const formData = new FormData(e.target);

		const data: any = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		//just prints the data in the fields if required fields are filled up (otherwise, says invalid)
		if(isFormValid(data)){
			console.log(data)

		} else {
		console.log("Invalid Form")
		}
		
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
				  id="tasktitle"
				  name="tasktitle"
				/>
			</div>
			<br />

			<div>
				<label for="name">Date</label>
				<input
				  type=date
				  id="date"
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
				<select value={selected} on:change="{() => ans = ''}">
					{#each cat as c}
						<option value={c}>
						{c.text}
						</option>
					{/each}
				</select>

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

<style>

</style>
