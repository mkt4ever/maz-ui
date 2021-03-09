(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{659:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["primary","secondary","third","success","danger","warning","grey","info","light","dark","default","white","black","transparent"]},755:function(e,t,n){"use strict";n.r(t);var r=n(659),o={name:"MazStepperDoc",data:function(){return{colors:r.a,activeStep:3}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"maz-stepper-doc"},[n("div",{staticClass:"maz-flex maz-flex-wrap"},[n("div",{staticClass:"maz-flex-1 maz-mr-4"},[n("ComponentContainer",{attrs:{code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="5"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        activeStep: 3\n      }\n    }\n  }\n<\/script>'}},[n("h4",[e._v("\n            Basic\n          ")]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),n("MazStepper",{attrs:{steps:5},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1),e._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="5"\n    :size="20"\n    show-step-number\n    shadow\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        activeStep: 3\n      }\n    }\n  }\n<\/script>'}},[n("h4",[e._v("\n            Multiple options\n          ")]),e._v(" "),n("h5",{staticClass:"maz-text-muted"},[e._v('\n            size="20" - show-step-number - shadow - variant="square"\n          ')]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),n("MazStepper",{attrs:{steps:5,size:20,variant:"square","show-step-number":"",shadow:""},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1),e._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="5"\n    disabled\n    space="between"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        activeStep: 3\n      }\n    }\n  }\n<\/script>'}},[n("h4",[e._v('\n            Disabled click on steps buttons - space="between"\n          ')]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),n("MazStepper",{attrs:{steps:5,disabled:"",space:"between"},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1),e._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="5"\n    :size="20"\n    color="secondary"\n    show-step-number\n    disabled-next-steps\n    space="between"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        activeStep: 3\n      }\n    }\n  }\n<\/script>'}},[n("h4",[e._v("\n            Disabled next steps from active step\n          ")]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),n("MazStepper",{attrs:{steps:5,size:20,color:"secondary","show-step-number":"","disabled-next-steps":"",space:"between"},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1),e._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="5"\n    :size="20"\n    color="secondary"\n    show-step-number\n    disabled-previous-steps\n    space="between"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        activeStep: 3\n      }\n    }\n  }\n<\/script>'}},[n("h4",[e._v("\n            Disabled previous steps from active step\n          ")]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),n("MazStepper",{attrs:{steps:5,size:20,color:"secondary","show-step-number":"","disabled-previous-steps":"",space:"between"},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1),e._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="5"\n    :size="20"\n    color="secondary"\n    show-step-number\n    :disabled-steps="[2, 4]"\n    space="between"\n  />\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        activeStep: 3\n      }\n    }\n  }\n<\/script>'}},[n("h4",[e._v("\n            Disabled specifique steps ([2, 4])\n          ")]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),n("MazStepper",{attrs:{steps:5,size:20,color:"secondary","show-step-number":"","disabled-steps":[2,4],space:"between"},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1)],1),e._v(" "),n("div",{staticClass:"maz-flex-1"},[n("ComponentContainer",[n("h4",[e._v("\n            Colors\n          ")]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mt-3 maz-mb-5"}),e._v(" "),e._l(e.colors,(function(t){return n("div",{key:"stepper-"+t},[n("p",{staticClass:"maz-mb-3"},[e._v('\n              color="'+e._s(t)+'"\n            ')]),e._v(" "),n("MazStepper",{staticClass:"maz-mb-3",attrs:{steps:5,color:t},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}})],1)}))],2)],1)]),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),e._v(" "),n("h3",[e._v("\n      How to use it ?\n    ")]),e._v(" "),n("CodeContainer",{attrs:{language:"html",code:'<template>\n  <MazStepper\n    v-model="activeStep"\n    :steps="4"\n  />\n</template>\n\n<script>\n  import { MazStepper } from \'maz-ui\'\n  export default {\n    components: { MazStepper },\n    data () {\n      return {\n        activeStep: 2\n      }\n    }\n  }\n<\/script>'}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);