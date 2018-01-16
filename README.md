<b>Disclaimer</b> This is a "tweaked" version of the original [translate.js](https://github.com/tinoni/translate.js) which changes images based on the selected language and adds translation support for additional html attributes (placeholder, title, alt, value) coded by @jorgejeferson consider submiting your enhancements as a pull request. Thanks.

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

## Optional
Mark translatable elements with `data-trn-key` to use a custom key instead of whole innerHTML.

## License
You may use translate.js under the terms of the MIT License. [More information](http://en.wikipedia.org/wiki/MIT_License).
