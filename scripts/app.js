import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import JsSkill from '../blocks/js-skill/js-skill'


$(() => {
	svg4everybody();
	const jsskill = new JsSkill();
	jsskill.init();
});
