<template>
    <div v-html="compiledMarkdown"></div>
</template>
 
 
<script>
    let marked = require('marked');
    let hljs = require('highlight.js');
    import 'highlight.js/styles/default.css';
 
 
    marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang) {
          if (lang && hljs.getLanguage(lang)) {    
            return hljs.highlight(lang, code, true).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
      }
  });
 
 
   export default{
     name: 'test', 
    computed: {
        compiledMarkdown() {
        let detail = '\n\n';
        return marked(detail || '', {
          sanitize: true
        });
      }
    }
   }
</script>