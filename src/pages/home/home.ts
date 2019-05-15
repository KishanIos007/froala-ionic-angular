import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var $: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public froalaOptions: Object = {
    toolbarBottom: false,
    toolbarSticky: false,
    charCounterCount: false,
    toolbarButtons: ['formatUL', 'powerword', 'bookapp', 'fontSize'],
    toolbarButtonsXS: ['formatUL', 'powerword', 'bookapp', 'fontSize'],
    toolbarButtonsSM: ['formatUL', 'powerword', 'bookapp', 'fontSize'],
    toolbarButtonsMD: ['formatUL', 'powerword', 'bookapp', 'fontSize'],
};
  constructor(public navCtrl: NavController) {
    this.froalaOptions = {
      spellcheck: true,
      toolbarBottom: false,
      toolbarSticky: false,
      scaytAutoload: true,
      multiLine: true,
      charCounterCount: true,
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      toolbarButtonsXS: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      toolbarButtonsSM: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      toolbarButtonsMD: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      events: {
          'froalaEditor.initialized': (e, editor) => {
          },
          'froalaEditor.focus': (e, editor) => {
              jQuery('.highline').click(function(el){
                  jQuery(el).removeClass('highline');
                  jQuery(this).removeClass('highline');
              });

              jQuery('.highline-replace').click(function(el){
                  jQuery(el).removeClass('highline-replace');
                  jQuery(this).removeClass('highline-replace');
              });
          },
          'froalaEditor.contentChanged': (e, editor) => {
          }
      }
  };
  }

}
