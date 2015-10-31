<b>Disclaimer</b> This is a "tweaked" version of the original [translate.js](https://github.com/tinoni/translate.js) which adds translation support for common HTML attributes such as `placeholder`, `value`, and `title`, a limitation I found when using the plugin. Bare in mind I'm not a dev and this copy is distributed as is, if you fork it consider submiting your enhancements as a pull request. Thanks.

translate.js
============

A jQuery plugin to translate text in the client side.

## Home and demo
View a live [demo](http://www.openxrest.com/translatejs/index.html).

## Usage
Step 1: include JQuery and translate.js in your page

    <script src="jquery.js"/>
    <script src="jquery.translate.js"/>

Step 2: every text you want translated include the trn class

    <span class="trn">text to translate</span>

Step 3: create your dictionary

    var dict = {
      "Home": {
        pt: "Início"
      },
      "Download plugin": {
         pt: "Descarregar plugin",
         en: "Download plugin"
      }
    }

Step 4: initialize the plugin and translate the entire page body

    var translator = $('body').translate({lang: "en", t: dict}); //use English

Step 5: change to another language

    translator.lang("pt"); //change to Portuguese

## License
You may use translate.js under the terms of the MIT License. [More information](http://en.wikipedia.org/wiki/MIT_License).



## Specific instructions related to this "tweaked" fork

It's mandatory to include the `trn` class in all cases as described by the plugin's instructions.

In order to translate `placeholder`, `value`,  and `title` html attributes, you'll need to change the `data-` attribute for each element if you use this tweak. As for now this is how I've set it all up:

<b>`data-trn-value`</b> - for <b>`value=""`</b> 
<b>`data-trn-holder`</b> - for <b>`placeholder=""`</b> 
<b>`data-trn-title`</b> - for <b>`title=""`</b> 

### Getting the HTML ready
A real example translating the value="" text of a submit button:

    <input type="submit" class="btn btn-green trn" data-trn-value="emailsubmit" value="Send">

For that we use  <b>data-trn-value=""</b> and define a value for the attribute to be included in our translation dictionary function later, in this case the attribute value is <b>emailsubmit</b>.

Let's set up the html for the correct translation of a placeholder and a title text

    <input type="text" class="signup-email-field trn" data-trn-holder="signupfield" placeholder="Your email">

    <a title="About us" data-trn-title="titleabout" class="menu-link trn"></a>

### The translation dictionary set up

After arranging your HTML code to accommodate the new <b>data- attributes</b> naming convention, simply include the attributes value in your dictionary as bellow:

e.g:

    // Translation dictionary function
    $(document).ready(function() {

    var t = {  	
    emailsubmit: {  // translates the value="" text
      en: "Send",
      it: "Invia",
      pt: "Enviar"
    },
    emailfield: {  // translates the placeholder="" text
      en: "Your email",
      it: "Indirizzo email",
      pt: "Seu email"
    },
    titleabout: {  // translates the title="" text
      en: "About us",
      it: "Chi Siamo",
      pt: "Sobre"
    },

    };
    var _t = $('body').translate({lang: "en", t: t});
    var str = _t.g("translate");
    console.log(str);
  
    $(".language").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);
    console.log(lang);
    ev.preventDefault();
    });

