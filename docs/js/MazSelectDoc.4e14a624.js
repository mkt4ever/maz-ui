(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MazSelectDoc"],{"700f":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"maz-input-doc"},[t("h3",[e._v(" Informations ")]),t("p",[e._v(" This component uses "),t("router-link",{attrs:{to:{name:"MazInputDoc"}}},[e._v(" MazInput ")]),e._v(" and therefore inherits all these options ")],1),t("ComponentContainer",{attrs:{code:"<template>\n  <MazSelect\n    v-model=\"selectValueExample\"\n    placeholder=\"Custom label/placeholder text\"\n    :options=\"options\"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        selectValueExample: '',\n        options: [\n          { label: 'None', value: null },\n          { label: 'First option', value: 'first' },\n          { label: 'Second option', value: 'second' },\n          { label: 'Third option', value: 'third' }\n        ]\n      }\n    }\n  }\n<\/script>"}},[t("p",{staticClass:"maz-mb-3"},[t("strong",[e._v("v-model:")]),e._v(" "+e._s(e.selectValueExample)+" ")]),t("MazSelect",{attrs:{placeholder:"Custom label & placeholder text",options:e.options,clearable:""},model:{value:e.selectValueExample,callback:function(l){e.selectValueExample=l},expression:"selectValueExample"}})],1),t("ComponentContainer",{attrs:{code:'<template>\n  <MazSelect\n    v-model="selectValue"\n    :options="options"\n    search\n    search-placeholder="Search in options"\n  >\n    <template\n      v-slot="{ option }"\n    >\n      <div\n        v-if="option.value"\n        class="maz-flex maz-flex-start"\n        :class="{\n          \'maz-text-white\': option.isSelected\n        }"\n      >\n        <div class="maz-label maz-label-secondary">\n          {\\{ option.label }\\}\n        </div>\n        <span class="maz-ml-2">\n          is selected: {\\{ option.isSelected }\\}\n        </span>\n      </div>\n    </template>\n  </MazSelect>\n</template>'}},[t("h4",[e._v(' Search - custom options list - position="top right" ')]),t("p",{staticClass:"maz-mb-3 maz-text-muted"},[e._v(" Select input with search textfield ")]),t("MazSelect",{attrs:{options:e.options,search:"",position:"top right","search-placeholder":"Search in options"},scopedSlots:e._u([{key:"default",fn:function(l){var a=l.option;return[a.value?t("div",{staticClass:"maz-flex maz-flex-start",class:{"maz-text-white":a.isSelected}},[t("div",{staticClass:"maz-label maz-label-secondary"},[e._v(" "+e._s(a.label)+" ")]),t("span",{staticClass:"maz-ml-2"},[e._v(" is selected: "+e._s(a.isSelected)+" ")])]):e._e()]}}]),model:{value:e.selectValue,callback:function(l){e.selectValue=l},expression:"selectValue"}})],1),t("ComponentContainer",{attrs:{code:'<template>\n  <MazSelect\n    v-model="multipleValues"\n    :options="optionsMultiple"\n    multiple\n    clearable\n    search\n    search-placeholder="Search in options"\n    size="lg"\n    color="info"\n  >\n    <i\n      slot="icon-left"\n      class="material-icons"\n    >\n      add_circle_outline\n    </i>\n  </MazSelect>\n</template>'}},[t("h4",[e._v(" Multiple - custom left icon ")]),t("p",{staticClass:"maz-mb-3 maz-text-muted"},[e._v(" You can choose multiple values ")]),t("p",{staticClass:"maz-mb-3"},[t("strong",[e._v("v-model:")]),e._v(" "+e._s(e.multipleValues)+" ")]),t("MazSelect",{attrs:{options:e.optionsMultiple,multiple:"",clearable:"",search:"","search-placeholder":"Search in options",size:"lg",color:"info"},model:{value:e.multipleValues,callback:function(l){e.multipleValues=l},expression:"multipleValues"}},[t("i",{staticClass:"material-icons",attrs:{slot:"icon-left"},slot:"icon-left"},[e._v(" add_circle_outline ")])])],1),t("ComponentContainer",[t("h4",{staticClass:"maz-mb-3"},[e._v(" Basic ")]),t("MazSelect",{attrs:{options:e.options},model:{value:e.selectValue,callback:function(l){e.selectValue=l},expression:"selectValue"}})],1),t("ComponentContainer",[t("h4",{staticClass:"maz-mb-3"},[e._v(" Colors ")]),t("div",{staticClass:"maz-flex maz-flex-wrap"},e._l(e.inputColors,(function(l){return t("MazSelect",{key:l,staticClass:"maz-mb-2 maz-mr-2",attrs:{options:e.options,placeholder:l,color:l},model:{value:e.selectValue,callback:function(l){e.selectValue=l},expression:"selectValue"}})})),1),t("p",[t("strong",[e._v("Colors list:")]),e._v(" "+e._s(e.inputColors)+" ")])]),t("ComponentContainer",[t("h4",{staticClass:"maz-mb-3"},[e._v(" Error ")]),t("MazSelect",{attrs:{options:e.options,error:""},model:{value:e.selectValue,callback:function(l){e.selectValue=l},expression:"selectValue"}})],1),t("ComponentContainer",[t("h4",{staticClass:"maz-mb-3"},[e._v(" Success ")]),t("MazSelect",{attrs:{options:e.options,success:""},model:{value:e.selectValue,callback:function(l){e.selectValue=l},expression:"selectValue"}})],1),t("ComponentContainer",[t("h4",{staticClass:"maz-mb-3"},[e._v(" Warning ")]),t("MazSelect",{attrs:{options:e.options,warning:""},model:{value:e.selectValue,callback:function(l){e.selectValue=l},expression:"selectValue"}})],1),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),t("h3",[e._v(" How to use it ? ")]),t("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazSelect\n    v-model=\"value\"\n    :options=\"options\"\n  />\n</template>\n\n<script>\n  import { MazSelect } from 'maz-ui'\n  export default {\n    components: { MazSelect }\n    data () {\n      return {\n        value: null,\n        options: [\n          { label: 'None', value: null },\n          { label: 'First option', value: 'first' },\n          { label: 'Second option', value: 'second' },\n          { label: 'Third option', value: 'third' }\n        ]\n      }\n    }\n  }\n<\/script>"}})],1)},n=[],o=t("e888"),s={name:"MazInputDoc",data:function(){return{selectValue:null,selectValueExample:null,options:[{label:"None",value:null},{label:"First option",value:"first"},{label:"Second option",value:"second"},{label:"Third option",value:"third"}],multipleValues:["first","fourth"],optionsMultiple:[{label:"None",value:null},{label:"First",value:"first"},{label:"Second",value:"second"},{label:"Third",value:"third"},{label:"Fourth",value:"fourth"},{label:"Fifth",value:"fifth"}],inputColors:o["a"]}}},i=s,c=t("2877"),r=Object(c["a"])(i,a,n,!1,null,null,null);l["default"]=r.exports},e888:function(e,l,t){"use strict";t.d(l,"a",(function(){return a}));var a=["primary","secondary","third","success","danger","warning","grey","info","light","dark","default","white","black"]}}]);
//# sourceMappingURL=MazSelectDoc.4e14a624.js.map