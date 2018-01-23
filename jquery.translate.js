/**
    * @file jquery.translate.js
    * @brief jQuery plugin to translate text in the client side.
    * @author Manuel Fernandes
    * @contribution Jorge Jeferson
    * @contribution Adriano Monecchi
    * @site http://www.openxrest.com/translatejs/
    * @version 0.9
    * @license MIT license <http://www.opensource.org/licenses/MIT>
    *
    * translate.js is a jQuery plugin to translate text in the client side.
    *
*/

(function($){
    $.fn.translate = function(options) {

        var that = this; //a reference to ourselves

        var settings = {
            css: ".trn", // selector
            attrs: ["alt", "placeholder", "title"], // atributos a traducir
            //checkImage: false, // Checking images
            lang: "pt",
            langDefault: "pt",
            /*
            t: {
               "translate": {
                   pt: "tradução",
                   br: "tradução",
               },
            }*/
        };
        settings = $.extend(settings, options || {});

        var t = settings.t;

        //public methods
        this.lang = function(l) {
            if (l) {
                settings.lang = l;
                this.translate(settings);  //translate everything
            }

            return settings.lang;
        };

        this.get = function(index) {
            var res = index;

            try {
                res = t[index][settings.lang];
            } catch (err) { //not found, return index
                return index;
            }

            if (res) {
                return res;
            } else {
                return index;
            }
        };

        this.g = this.get;

        //main
        this.find(settings.css).each(function(i) {
            var $this = $(this);

            var trn_key = $this.attr("data-trn");
            if (!trn_key) {
                // si no tiene key, usar el innerHTML
                trn_key = $this.html();
                $this.attr("data-trn", trn_key);
            }

            // Filtering attr
            $.each(this.attributes, function() {
                if ($.inArray(this.name, settings.attrs) !== -1) {
                    // es un atributo traducible
                    var trn_attr_key = $this.attr("data-trn-attr");
                    if (!trn_attr_key) {
                        // si no tiene key que sea el name
                        trn_attr_key = $this.attr(this.name);
                        $this.attr("data-trn-attr", trn_attr_key);
                    }
                    // si tiene más de un atributo traducible quedan todos con el mismo texto
                    $this.attr(this.name, that.get(trn_attr_key));
                }
            });

            // images
            /*
            if(settings.checkImage){
                if($this.is('img')){
                    var trn_img_key = $this.attr("data-trn-img");

                    if (!trn_img_key) {
                        trn_img_key = $this.attr('src');
                        $this.attr("data-trn-img", trn_img_key);
                    }
                    if(settings.lang !== settings.langDefault){
                        // esto está muuy raro
                        var new_src = trn_img_key.split(".");
                        trn_img_key = new_src[0] + "-" + settings.lang + "." + new_src[1];
                    }
                    $this.attr('src', trn_img_key);
                }
            }
            */

            $this.html(that.get(trn_key));
        });

        return this;

    };
})(jQuery);
