webpackJsonp([3],{790:function(e,t,n){function a(e){n(811)}var o=n(82)(n(802),n(823),a,"data-v-5b9c37b7",null);e.exports=o.exports},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},methods:{getReadme:function(){var e=this;this.$gitHubApi.getReadme(this).then(function(t){t.data&&(e.renderedMarkdown=e.$marked(t.data))})}},mounted:function(){var e=this;this.$nextTick(function(){e.getReadme()})}}},807:function(e,t,n){t=e.exports=n(788)(!1),t.push([e.i,".about-me[data-v-5b9c37b7]{width:calc(100% - 260px);-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:30px;overflow-y:auto}",""])},811:function(e,t,n){var a=n(807);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(789)("7a682aee",a,!0)},823:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me bga-back-top"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}}});