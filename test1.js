// HELP: normalize height
$.fn.nomalizeHeight = function (count) {
	count = count || this.length;
	if (this.length > 0) {
		var max = 0;
		var $group = this.slice(0, count);
		$group.removeAttr('style');
		$group.each(function () {
			var $this = $(this),
				height = $this.height();
			max = height > max ? height : max;
		})
		$group.height(max);
		this.not($group).nomalizeHeight(count);
	}
	return this;
}