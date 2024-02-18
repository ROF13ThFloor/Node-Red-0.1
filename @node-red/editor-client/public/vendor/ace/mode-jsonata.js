ace.define("ace/mode/jsonata",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/worker/worker_client","ace/mode/text"],function(e,t,n){"use strict";function r(){var e=this.createKeywordMapper({"keyword.operator":"and|or|in","constant.language":"null|Infinity|NaN|undefined","constant.language.boolean":"true|false","storage.type":"function"},"identifier");this.$rules={no_regex:[{token:"comment.doc",regex:"\\/\\*",next:"comments"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:"keyword",regex:/λ/},{token:"keyword",regex:s},{token:e,regex:"[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"keyword.operator",regex:/\|\||<=|>=|\.\.|\*\*|!=|:=|[=<>`!$%&*+\-~\/^]/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/}],qqstring:[{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}],regex:[{token:"string.regexp",regex:"/[sxngimy]*",next:"start"},{defaultToken:"string.regexp"}],start:[{token:"comment.doc",regex:"\\/\\*",next:"comments"},{token:"string.regexp",regex:"\\/",next:"regex"},{token:"empty",regex:"",next:"no_regex"}],comments:[{token:"comment.doc",regex:"\\*\\/",next:"start"},{defaultToken:"comment.doc"}]}}function o(){this.HighlightRules=r}var a=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,g=e("../worker/worker_client").WorkerClient,s=Object.keys(jsonata.functions),i=(s.sort(function(e,t){return t.length-e.length}),s="("+s.join("|").replace(/\$/g,"\\$")+")(\\b)",a.inherits(r,i),e("./text").Mode);a.inherits(o,i),function(){this.createWorker=function(t){var e=new g(["ace"],"ace/mode/jsonata_worker","JSONataWorker");return e.attachToDocument(t.getDocument()),e.on("annotate",function(e){t.setAnnotations(e.data)}),e.on("terminate",function(){t.clearAnnotations()}),e},this.$id="ace/mode/jsonata"}.call(o.prototype),t.Mode=o});