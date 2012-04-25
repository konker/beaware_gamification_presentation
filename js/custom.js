/**
  custom.js
  extra functionality from impress.js
  Author: Konrad Markus <konker@gmail.com>
*/

var custom = (function($) {
    return {
        init: function() {
            $('#controls').bind('mouseover', custom.controls.mouseover);
            $('#controls').bind('click', function(e) {
                alert(e);
            });
            console.log($('#controls'));
        },
        controls: {
            mouseover: function(e) {
                alert(e);
            }
        }
    }
})(jQuery);
$(custom.init);
