(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{663:function(t,e,n){var content=n(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("53521ac4",content,!0,{sourceMap:!1})},683:function(t,e,n){"use strict";n(663)},684:function(t,e,n){var r=n(33)(!1);r.push([t.i,".demo[data-v-3180085e]{margin:20px;min-width:265px}",""]),t.exports=r},723:function(t,e,n){"use strict";n.r(e);var r={name:"MazAvatarDoc",methods:{editPicture:function(){console.log("edit picture")}}},c=(n(683),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"maz-avatar-doc"},[n("h4",[t._v("\n      Examples\n    ")]),t._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazAvatar\n    src="http://www.placecage.com/80/80"\n  />\n\n  <MazAvatar\n    src="http://www.placecage.com/120/120"\n    :size="120"\n    editable\n    bordered\n    @edit="editPicture"\n  />\n\n  <MazAvatar\n    src="http://www.placecage.com/160/160"\n    url="http://www.placecage.com/160/160"\n    target="_blank"\n    no-elevation\n    square\n    :size="160"\n  />\n</template>\n\n<script>\n  export default {\n    methods: {\n      editPicture () {\n        console.log(\'edit picture\')\n      }\n    }\n  }\n<\/script>',language:"html"}},[n("div",{staticClass:"maz-flex maz-flex-wrap"},[n("div",{staticClass:"demo maz-flex-1 maz-flex maz-direction-column maz-align-center"},[n("MazAvatar",{attrs:{src:"http://www.placecage.com/80/80"}}),t._v(" "),n("h5",{staticClass:"maz-my-3 maz-text-center"},[t._v("\n            Default\n          ")]),t._v(" "),n("h6",{staticClass:"maz-mb-3 maz-text-center"},[t._v("\n            Just the src image path provide\n          ")]),t._v(" "),n("p",[n("strong",[t._v("Options:")]),t._v(" none\n          ")])],1),t._v(" "),n("div",{staticClass:"demo maz-flex-1 maz-flex maz-direction-column maz-align-center"},[n("MazAvatar",{attrs:{src:"http://www.placecage.com/120/120",editable:"",bordered:"",size:120},on:{edit:t.editPicture}}),t._v(" "),n("h5",{staticClass:"maz-my-3 maz-text-center"},[t._v("\n            Editable\n          ")]),t._v(" "),n("h6",{staticClass:"maz-mb-3 maz-text-center"},[t._v('\n            On hover: Add an "edit" layer & on click return '),n("strong",[t._v("@edit")]),t._v(" event on click\n          ")]),t._v(" "),n("p",[n("strong",[t._v("Options:")]),t._v(' editable - bordered - src="PATH" - size="120"\n          ')])],1),t._v(" "),n("div",{staticClass:"demo maz-flex-1 maz-flex maz-direction-column maz-align-center"},[n("MazAvatar",{attrs:{src:"http://www.placecage.com/160/160",url:"http://www.placecage.com/160/160",target:"_blank","no-elevation":"",square:"",size:160}}),t._v(" "),n("h5",{staticClass:"maz-my-3 maz-text-center"},[t._v("\n            Square & link avatar\n          ")]),t._v(" "),n("h6",{staticClass:"maz-mb-3 maz-text-center"},[t._v("\n            The avatar becomes a link to the url you gave\n          ")]),t._v(" "),n("p",[n("strong",[t._v("Options:")]),t._v(' square - src="PATH" - url="URL" - size="160" - target="_blank" - no-elevation\n          ')])],1)])]),t._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),t._v(" "),n("h4",[t._v("\n      How to use it ?\n    ")]),t._v(" "),n("CodeContainer",{staticClass:"maz-mb-0",attrs:{language:"html",code:"<template>\n  <MazAvatar />\n</template>\n\n<script>\n  import { MazAvatar } from 'maz-ui'\n  export default {\n    components: { MazAvatar }\n  }\n<\/script>"}})],1)}),[],!1,null,"3180085e",null);e.default=component.exports}}]);