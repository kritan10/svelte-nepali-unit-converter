<script>
	import UnitInput from '../UnitInput.svelte';
	import MathFunctions from '../MathFunctions.js';
	import Converter from './Converter.svelte';

	let unit = {
		ropani: 0,
		anna: 0,
		paisa: 0,
		dam: 0,
		mtr: 0,
		sqrft: 0
	};

	function onChangeHandler(event) {
		let userInput = event.target.value;
		if (isNaN(userInput)) {
			event.target.value = unit[event.target.id];
			return;
		}
		unit[event.target.id] = +event.target.value;

		if (
			event.target.id === 'ropani' ||
			event.target.id === 'anna' ||
			event.target.id === 'paisa' ||
			event.target.id === 'dam'
		) {
			unit.mtr = (unit.ropani * 256 + unit.anna * 16 + unit.paisa * 4 + unit.dam * 1) * 1.99;
			unit.sqrft = (unit.ropani * 256 + unit.anna * 16 + unit.paisa * 4 + unit.dam * 1) * 21.4;

			return;
		}

		if (event.target.id === 'mtr') {
			unit.sqrft = unit.mtr * 10.764;

			const tempDam = (unit.mtr / 1.99).toFixed(0);
			const result = MathFunctions.convertToRopani(tempDam);

			unit.dam = result[3];
			unit.paisa = result[2];
			unit.anna = result[1];
			unit.ropani = result[0];

			return;
		}

		if (event.target.id === 'sqrft') {
			unit.mtr = unit.sqrft / 10.764;

			const tempDam = (unit.sqrft / 21.4).toFixed(0);
			const result = MathFunctions.convertToRopani(tempDam);

			unit.dam = result[3];
			unit.paisa = result[2];
			unit.anna = result[1];
			unit.ropani = result[0];

			return;
		}
	}
</script>

<Converter>
	<span slot="header">Area/Land Converter</span>
	<span slot="nep-met">
		<UnitInput id="ropani" value={unit.ropani} {onChangeHandler} />
		<UnitInput id="anna" value={unit.anna} {onChangeHandler} />
		<UnitInput id="paisa" value={unit.paisa} {onChangeHandler} />
		<UnitInput id="dam" value={unit.dam} {onChangeHandler} />
	</span>
	<span slot="int-met">
		<UnitInput id="mtr" value={unit.mtr} label="Meter Sq." unit="m<sup>2</sup>" {onChangeHandler} />
		<UnitInput
			id="sqrft"
			value={unit.sqrft}
			label="Sq. Ft."
			unit="ft<sup>2</sup>"
			{onChangeHandler}
		/>
	</span>
</Converter>
