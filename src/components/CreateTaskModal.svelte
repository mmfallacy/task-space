<script lang="ts">

	import type { Task } from '../types.js';

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

	let showModal = false;

	// example categories muna yung cat:
	let cat = [
		{ id: 1, text: "CS 180" },
		{ id: 2, text: "CS 192" }
	];

	let selected;
	let ans = '';

	var tasky = [];

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

		const newTask: Task = {
			uid: '',
    		name: '',
			category: '',
			deadline: new Date(),
			timescale: 1
		}

		const data: any = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
			

			if (key == 'tasktitle') {
				newTask.name = value.toString();
			}

			else if (key == 'date') {
				newTask.deadline = new Date(value.toString());
			}

			else if (key == 'category') {
				newTask.category = value.toString();
			}
			
		}

		var tasktitle = document.getElementById('tasktitle').value;
		var date = document.getElementById('date').value;
		var startTime = document.getElementById('startTime').value;
		var endTime = document.getElementById('endTime').value;
		var category = document.getElementById('category').value;
		// var category = category.options;
		var notes = document.getElementById('notes').value;
		
		tasky.push(tasktitle);
		tasky.push(date);
		tasky.push(startTime);
		tasky.push(endTime);
		tasky.push(category);
		tasky.push(notes);

		window.localStorage.setItem("UID", JSON.stringify(tasky));

		
		//just prints the data in the fields if required fields are filled up (otherwise, says invalid)
		if(isFormValid(data)){
			console.log(data)
			console.log(newTask)
			dialog.close();

			
		} 
		else {
		console.log("Invalid Form")
		}


		
  	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
	<button on:click={() => (showModal = true)}>
		+
	</button>

	<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>


	<h2>
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
			  id="startTime"
			/>
		<nobr>-</nobr>
			<input
			  type=time
			  name="endTime"
			  id="endTime"
			/>
		</div>
		<br />

		<div>
			<label for="name">Category</label>
			<select name="category" id="category" value={selected} on:change="{() => ans = ''}">
				{#each cat as c}
					<option value={c.text}>
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
			  id="notes"
			/>
		</div>
		<br />
		
	<div on:click|stopPropagation>
		<slot name="header" />
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<button type="submit">Continue</button>
	</div>
	
</dialog>
</main>



<style>

</style>