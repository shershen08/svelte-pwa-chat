<script>	 
	import Intro from '../components/Intro.svelte'
	import {user} from '../store/user.js'

</script>
<label>Settings</label>

<div>
	<label>Username:</label>
	<code>
		{$user.userName}
	</code>
</div>
<Intro></Intro>