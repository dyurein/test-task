import $ from 'jquery'

class JsSkill {

	init() {
		$(".range-labels__elem").click(function(e) {
			e.preventDefault();
			$(".range-labels__elem").removeClass('range-labels__elem_active');
			$(this).addClass('range-labels__elem_active');
		})
	}
}

export default JsSkill
