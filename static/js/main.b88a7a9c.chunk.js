(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={divB:"FeedbackOptions_divB__1FcAU",btn:"FeedbackOptions_btn__1rp9P",neutraBtn:"FeedbackOptions_neutraBtn__L7ZPG FeedbackOptions_btn__1rp9P",badBtn:"FeedbackOptions_badBtn__XnPu2 FeedbackOptions_btn__1rp9P"}},10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=a(4),u=a(5),i=a(6),d=a(8),s=a(7),b=a(9),p=function(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),a)},m=a(1),v=a.n(m),k=function(e){var t=e.onLeaveFeedback,a=e.options;return r.a.createElement("div",{className:v.a.divB},r.a.createElement("button",{className:v.a.btn,type:"button",onClick:t,name:a.GOOD},"Good"),r.a.createElement("button",{className:v.a.neutraBtn,type:"button",onClick:t,name:a.NEUTRAL},"Neutral"),r.a.createElement("button",{className:v.a.badBtn,type:"button",onClick:t,name:a.BAD},"Bad"))},E=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.positivePercentage;return r.a.createElement("div",null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedback: ",o,"%"))},f=function(e){var t=e.message;return r.a.createElement("div",null,r.a.createElement("p",null,t))},g=Object.freeze({GOOD:"good",NEUTRAL:"neutral",BAD:"bad"}),h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.countTotalFeedback=function(){var e=a.state;return e.good+e.neutral+e.bad},a.countPositiveFeedbackPercentage=function(){var e=a.state,t=e.good;return(t/(t+e.neutral+e.bad)*100).toFixed()},a.handleFeedbackChanger=function(e){var t=a.props.step,n=e.target.name;a.setState((function(e){return Object(l.a)({},n,e[n]+t)}))},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.bad,n=e.neutral;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Please live feedback"},r.a.createElement(k,{onLeaveFeedback:this.handleFeedbackChanger,options:g})),r.a.createElement(p,{title:"Statistics"},(t||a||n)&&r.a.createElement(E,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})||r.a.createElement(f,{message:"No feedback given"})))}}]),t}(n.Component);h.defaultProps={step:1},o.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b88a7a9c.chunk.js.map