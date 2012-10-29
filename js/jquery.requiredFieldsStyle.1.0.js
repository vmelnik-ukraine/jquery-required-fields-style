/**
 * jQuery Required Fields Style Plugin v1.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2012, Melnik Victor melnikvictorl@gmail.com
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($){
    $.fn.requiredFieldsStyle = function(settings) {
        var _area = this;
        var _params = {
            styleClass: 'jquery-rfs',
            requiredSelectors: [
            'input[type=text][required=required]',
            'input[type=email][required=required]',
            'input[type=password][required=required]',
            'textarea[required=required]'
            ],
            enableAndRun: true
        };
        
        // Public API ----------------------------------------------------------
        /**
         * Bind spying events
         */ 
        this.enable = function() {
            $(_area).on("keyup", _toRightSelector(_params.requiredSelectors), _runFor);
        }
    
        /**
         * Unbind spying events
         */ 
        this.disable = function() {
            $(_area).off("keyup", _toRightSelector(_params.requiredSelectors));
        }
        
        /**
         * Run spying in DOM area
         */ 
        this.run = function(){
            var area = $(_area);
            $(_toRightSelector(_params.requiredSelectors), area).each(function(n){
                _runFor.call(this);
            });
        };
        
        // Private methods -----------------------------------------------------
        /**
         * Convert selectors to correct strings
         */
        var _toRightSelector = function(data) {
            if(data instanceof Array) {
                data = data.join(', ');
            }
        
            return data;
        }
        
        /**
         * Run spying for one DOM element
         */
        var _runFor = function(){
            $(this).val() ? $(this).removeClass(_params.styleClass) : $(this).addClass(_params.styleClass);
        }
        
        // Params processing and initialization
        if(typeof settings == 'object') {
            _params.enableAndRun = true;
            _params = $.extend(_params, settings);
        } else if(typeof this[settings] != 'undefined') {
            this[settings]();
            _params.enableAndRun = false;
        }
        if(_params.enableAndRun) {
            this.run();
            this.enable();
        }
    }
})(jQuery);