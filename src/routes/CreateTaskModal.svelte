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
	<div class="main">
		<div class="navbar">
			
		</div>

		<div class="sidebar">
			<div class="sidebar-header">
				<button class = "plus" on:click={() => (showModal = true)}>
						<div class = "plusbutton">
						</div>
				</button>
			</div>
		</div>
	</div>
	
	<Modal bind:showModal>
			<div slot="header">
				<div class="modal-header">
					<div class="TTCommons-DemiBold-34">Create a task</div>
					<div class="TTCommons-Regular-20">An organized task schedule is key to success!</div>
					<hr />
				</div>
			</div>

			<form on:submit|preventDefault={onSubmit}>

				<div style="margin: 0px 0px 8px 0px;"> 
					<label class="TTCommons-Regular-16" for="name">Task Title</label>
				</div>
				<div>
					<input class="form"
					type="text"
					id="tasktitle"
					name="tasktitle"
					placeholder="Input subject title"
					/>
				</div>
				<br />

				<div class="date-time-wrapper">
					<div class="date">
						<div style="margin: 0px 0px 8px 0px;">
							<label class="TTCommons-Regular-16" for="name">Date</label>
						</div>
						<div>
							<input class="form"
							style="width:fit-content"
							type=date
							id="date"
							name="date"
							/>
						</div>
					</div>
					
					<div class="time">
						<div style="margin: 0px 0px 8px 0px;">
							<label class="TTCommons-Regular-16" for="name">Timeslot</label>
						</div>
						<div>
							<input class="form"
							style="width:fit-content"
							type=time
							name="startTime"
							/>
						<nobr>-</nobr>
							<input class="form"
							style="width:fit-content"
							type=time
							name="endTime"
							/>
						</div>
					</div>
				</div>
				<br />

				<div style="margin: 0px 0px 8px 0px;">
					<label class="TTCommons-Regular-16" for="name">Category</label>
				</div>
				<div>
					<select required class="form" value={selected} on:change="{() => ans = ''}">
						{#each cat as c}
							<option value={c}>
							{c.text}
							</option>
						{/each}
					</select>

				</div>
				<br />

				<div style="margin: 0px 0px 8px 0px;">
					<label class="TTCommons-Regular-16" for="name">Notes</label>
				</div>
				<div>
					<input class="form"
					type="text"
					name="notes"
					/>
				</div>
				<br />

				
				<div class="modal-footer">
				<div>
				</div>
				<button class="primary-button" type="submit">Continue</button>
				</div>
	</Modal>
</main>

<style>

.modal-footer{
	background-position: right;
	border-top: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items: right;
    justify-content: space-between;
}

.primary-button{
	background-color: #0A5BD0;

	cursor: pointer;

	font-family: Arial;
    font-weight: 600;
    border-radius: 5px;
    box-shadow: none;
    color: #F8FAFC;
    line-height: 20px;
    height: 44px;

	border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 14px;
	text-align: center;
    vertical-align: middle;
	display: inline-block;
}

.date-time-wrapper {
	display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 8px;
}

.form{
	width: 100%;
	background-color: #E2E8F0;
	border-radius: 4px;
    font-family: Arial;
    padding: 12px 16px;
    border: 1px solid #E2E8F0;
    box-sizing: border-box;
    transition: .5s;
    outline: none;
}

.modal-header{
	border-bottom: none;
	width: 100%!important;
	align-items: center!important;
	line-height: 250%;
}

.navbar{
	background: #156EF0;
    z-index: 1000!important;
    padding: 15px!important;
	margin: -10px!important;
}

.plus{
	cursor: pointer;

	background: #156EF0;
	border-radius: 8px;
	border: none;
}

.plusbutton{
	background-image: url(PlusButton.png);

    background-repeat: no-repeat;
    background-position: center;
	background-size: 24px;
    margin: 10px;
	padding: 10px;

	border: none;
}

.sidebar{
	position: absolute;
	background: white;
	height: calc(100vh - 68px);
	width: 64px!important;
    min-width: 64px!important;
	box-shadow: 0px 25px 50px -12px rgba(0,0,0,.1);

	margin: 20px -8px;
	padding: 0px;
}

.sidebar-header{
    padding: 0px 0px 0px 5px;
    border-bottom: none;
}

.main{
	background: #E2E8F0;
	padding: 0!important;
	margin: 0!important;
}

.TTCommons-Regular-16 {
	font-family: Arial;
	font-size: 16px;
	color: black;
	letter-spacing: -.04em;
}

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

.TTCommons-SemiBold-72 {
	font-family: Arial;
	font-size: 72px;
	color: #04285C;
	letter-spacing: -.04em;
}
</style>
