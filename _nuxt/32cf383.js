(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{414:function(t,e,n){"use strict";n(21),n(27),n(32),n(36);var o=n(6),r=(n(93),n(25),n(34),n(63),n(253),n(16),n(33),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(37),n(44),n(15),n(68),n(268),n(0)),l=n(169),c=n(18);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],v=y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=y.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),m=y.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),P={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(m)};function S(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=w.get(c);return f||function(){var t,e;for(e in f=[],P)P[e].forEach((function(t){var o=n[t],r=S(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},491:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0c7ff953",content,!0,{sourceMap:!1})},587:function(t,e,n){"use strict";n(491)},588:function(t,e,n){var o=n(30)(!1);o.push([t.i,".StayingPopulation[data-v-7e7487ed]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:3px;min-height:5em;display:flex;align-items:center}.StayingPopulation .StayingPopulation-title[data-v-7e7487ed]{padding:2px 15px;text-align:left;font-size:1.9rem;color:#4d4d4d;font-weight:600}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-7e7487ed],.StayingPopulation .StayingPopulation-title .StayingPopulation-link[data-v-7e7487ed]{font-size:1.2rem;font-weight:600}.StayingPopulation .StayingPopulation-place[data-v-7e7487ed]{padding:5px;margin:2px 5px 2px 10px;background-color:#008830;color:#fff;vertical-align:middle;text-align:center;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-state[data-v-7e7487ed]{flex:1;padding:2px;margin:2px 5px;border:2px solid #008830;text-align:center;vertical-align:middle;min-width:15em;font-size:1.1rem}",""]),t.exports=o},625:function(t,e,n){"use strict";n.r(e);n(44),n(28),n(19);var o=n(50),r=n(0),l=n(85),c=r.default.extend({components:{AppLink:l.default},data:function(){return{mdiChevronRight:o.e}},computed:{date:function(){return this.$d(new Date(this.stayingPopulationData.date),"date")},enddate:function(){var t=new Date(this.stayingPopulationData.date);return t.setDate(t.getDate()+6),this.$d(t,"dateWithoutYear")},placeName:function(){var t=this.stayingPopulationData.place.display;return["ja","ja-basic"].includes(this.$i18n.locale)?t.ja:t.en},formattedData:function(){var t=this;return this.stayingPopulationDatasets.map((function(e){var n=e.referenceDate,o=e.increaseRate,r=t.$d(n,"dateWithoutDay"),l="0";0!==o&&(l="".concat(o>0?"↑":"↓").concat(Math.abs(o)," %"));return{formattedMonth:r,increaseRateWithArrow:l}}))},stayingPopulationDatasets:function(){return this.stayingPopulationData.data},stayingPopulationData:function(){return this.stayingPopulation.data},stayingPopulation:function(){return this.$store.state.stayingPopulation}}}),d=(n(587),n(9)),f=n(62),y=n.n(f),v=n(414),h=n(365),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"StayingPopulation"},[n("div",{staticClass:"StayingPopulation-title"},[n("h3",{staticClass:"StayingPopulation-heading"},[t._v("\n        "+t._s(t.$t("都内の滞在人口の増減状況"))+"\n      ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-link"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#top"}},[t._v(t._s(t.$t("詳細はこちら"))+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"StayingPopulation-place"},[t._v("\n      "+t._s(t.placeName)+"\n    ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-state"},[t._v("\n      [ "+t._s(t.$t("{date}時点",{date:t.date}))+" ]"),n("br"),t._v(" "),t._l(t.formattedData,(function(e,o){return n("span",{key:o},[t._v("\n        "+t._s(t.$t("{month}比 {rateWithArrow}",{month:e.formattedMonth,rateWithArrow:e.increaseRateWithArrow}))),n("br")])}))],2)])])}),[],!1,null,"7e7487ed",null);e.default=component.exports;y()(component,{VCol:v.a,VIcon:h.a})}}]);