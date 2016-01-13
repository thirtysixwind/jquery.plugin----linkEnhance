;

(function($){

	$.fn.linkEnhance = function(options){
		var defaultOpt = {
			className : 'linkEnhance',
			color : '#0095dd',
			hoverColor : '#fff',
			bgColor : '#fff',
			hoverBgColor : '#FF9800'
		};
		var settings = $.extend({},defaultOpt,options);
		var style = document.createElement('style');
		var cssText;

		style.type = 'text/css';
		cssText = '.' + settings.className + '{' + '\n' +
			'transition : color ease .4s, background-color ease .4s;' + '\n' +
			'border-radius : .3em;' + '\n' +
			'color : ' + settings.color + ';' + '\n' +
			'background-color : ' + settings.bgColor + ';' + '\n' +
			'}' + '\n' +
			'.' + settings.className + ':hover' + '{' + '\n' +
			'color : ' + settings.hoverColor + ';' + '\n' +
			'background-color : ' + settings.hoverBgColor + ';' + '\n' +
			'}'

		var cssTextNode = document.createTextNode(cssText);
		style.appendChild(cssTextNode);
		document.head.appendChild(style);

		this.addClass(settings.className);
	};
	
})(jQuery);
