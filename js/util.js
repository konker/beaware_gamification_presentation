/**
*/

var util = (function() {
    return {
        init: function() {
            $('#controls').bind('mouseover', util.controls.mouseover);
            $('#controls').bind('click', function(e) {
                alert(e);
            });
            //console.log($('#controls'));
        },
        controls: {
            mouseover: function(e) {
                alert(e);
            }
        },
        print: {
            CSS1: {
                'position': 'static',
                'clear': 'both',
                'width': '27.7cm',
                'height': '18.5cm',
                'padding': '1.0cm',
                'margin-bottom': '0.5cm',
                'overflow': 'hidden',
                '-webkit-transform': 'none',
                'page-break-after': 'always',
                'background': '#fff',
                'opacity': 1,
            },
            CSS2: {
                'position': 'relative',
                'width': '29.7cm',
                'top': '27px',
                'left': '27px',
                '-webkit-transform': 'none',
                'opacity': 1
            },
            CSS3: {
                'position': 'relative',
                'width': '29.7cm',
                'top': '0',
                'left': '0',
                '-webkit-transform': 'none',
                'opacity': 1
            },
            CSS4: {
                'overflow': 'scroll'
            },
            printify: function() {
                $('body')
                    .addClass('print-view')
                    .css(util.print.CSS4);
                $('#impress').css(util.print.CSS3);
                $('.canvas').css(util.print.CSS2);
                $('.step').css(util.print.CSS1);
            }
        }
    }
})();
$(util.init);

