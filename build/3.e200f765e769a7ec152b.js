webpackJsonp([3,11],{1167:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(1197),s=t(1235),o=t(1234),i=t(1236),c=t(65),m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p=function(e){var a=void 0;switch(e.activeView){default:case c.b:a=n.a.createElement(s.a,m({},e.positions,{settings:e.settings}));break;case c.c:a=n.a.createElement(o.a,e.markets);break;case c.d:a=n.a.createElement(i.a,m({},e.reports,{branch:e.branch}))}return n.a.createElement("section",{id:"portfolio_view"},n.a.createElement("header",{className:"page-header portfolio-header"},!!e.navItems&&!!e.navItems.length&&n.a.createElement(l.a,{activeView:e.activeView,navItems:e.navItems})),n.a.createElement("div",{className:"page-content"},n.a.createElement("section",{className:"portfolio-content"},a)))};p.propTypes={navItems:r.PropTypes.array.isRequired,totals:r.PropTypes.object.isRequired,positions:r.PropTypes.object.isRequired,markets:r.PropTypes.object.isRequired,reports:r.PropTypes.object.isRequired,settings:r.PropTypes.object.isRequired},a.default=p},1171:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(113),s=t.n(l),o=function(e){return n.a.createElement("span",{className:s()("value-date",e.className)},e.formatted)};o.propTypes={className:r.PropTypes.string,value:r.PropTypes.object,formatted:r.PropTypes.string},a.a=o},1186:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=function(e){return n.a.createElement("span",{className:e.className},!!e.isUnethical&&n.a.createElement("span",{className:"fa report-unethical","data-tip":"You reported that this market is unethical"},""))};l.propTypes={className:n.a.PropTypes.string,isUnethical:n.a.PropTypes.bool},a.a=l},1197:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(327),s=t.n(l),o=t(113),i=t.n(o),c=t(593),m=t(594),p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(e){return n.a.createElement("div",{className:"tab-navigator"},!!e.navItems&&e.navItems.map(function(a,t){return"string"==typeof a.page&&(a.page=[a.page]),n.a.createElement(c.a,{key:""+t,className:i()("nav-item",{active:a.page.indexOf(e.activeView)>-1}),href:a.link.href,onClick:a.link.onClick},n.a.createElement("span",{className:"nav-label"},a.label),(!!a.leadingValue||!!a.trailingValue)&&n.a.createElement("section",{className:"nav-values"},a.leadingValue&&n.a.createElement(m.a,p({"data-tip":!0,"data-for":"tab-"+t+"-leading-tooltip"},a.leadingValue||{})),a.trailingValue&&n.a.createElement(m.a,p({"data-tip":!0,"data-for":"tab-"+t+"-trailing-tooltip",className:"colorize"},a.trailingValue||{})),n.a.createElement(s.a,{id:"tab-"+t+"-leading-tooltip",type:"light",effect:"solid",place:"top"},n.a.createElement("span",{className:"tooltip-text"},a.leadingTitle?a.leadingTitle+": "+a.leadingValue.full:"")),n.a.createElement(s.a,{id:"tab-"+t+"-trailing-tooltip",type:"light",effect:"solid",place:"top"},n.a.createElement("span",{className:"tooltip-text"},a.trailingTitle?a.trailingTitle+": "+a.trailingValue.full:""))))}))};a.a=u},1222:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(594),s=t(1171),o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=function(e){return n.a.createElement("div",{className:"portfolio-row"},n.a.createElement("div",{className:"portfolio-group portfolio-main-group"},n.a.createElement("span",{className:"market-main-group-title"},"ends: "),n.a.createElement(s.a,e.endDate)),n.a.createElement("div",{className:"portfolio-group"},n.a.createElement("div",{className:"portfolio-pair total-value"},n.a.createElement("span",{className:"title"},"fees collected"),n.a.createElement(l.a,o({className:"colorize"},e.fees))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"open volume"),n.a.createElement(l.a,e.openVolume)),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"volume"),n.a.createElement(l.a,e.volume)),n.a.createElement("div",{className:"portfolio-pair total-cost"},n.a.createElement("span",{className:"title"},"# of trades"),n.a.createElement(l.a,e.numberOfTrades)),n.a.createElement("div",{className:"portfolio-pair total-value"},n.a.createElement("span",{className:"title"},"avg trade size"),n.a.createElement(l.a,e.averageTradeSize))))};i.propTypes={endDate:r.PropTypes.object.isRequired,openVolume:r.PropTypes.object.isRequired,volume:r.PropTypes.object.isRequired,numberOfTrades:r.PropTypes.object.isRequired,averageTradeSize:r.PropTypes.object.isRequired,fees:r.PropTypes.object.isRequired},a.a=i},1223:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(594),s=t(29),o=function(e){return n.a.createElement("div",{className:"position"},n.a.createElement("div",{className:"position-group main-group"},e.type===s.b?n.a.createElement("span",{className:"position-name"},e.lastPricePercent.rounded):n.a.createElement("span",{className:"position-name"},e.name),n.a.createElement(l.a,e.qtyShares)),n.a.createElement("div",{className:"position-group"},n.a.createElement("div",{className:"position-pair purchase-price"},n.a.createElement("span",{className:"title"},"average price of open position"),n.a.createElement(l.a,e.purchasePrice)),n.a.createElement("div",{className:"position-pair last-price"},n.a.createElement("span",{className:"title"},"last trade price"),n.a.createElement(l.a,e.lastPrice))),n.a.createElement("div",{className:"position-group"},n.a.createElement("div",{className:"position-pair realized-net"},n.a.createElement("span",{className:"title"},"realized P/L"),n.a.createElement(l.a,e.realizedNet)),n.a.createElement("div",{className:"position-pair unrealized-net"},n.a.createElement("span",{className:"title"},"unrealized P/L"),n.a.createElement(l.a,e.unrealizedNet)),n.a.createElement("div",{className:"position-pair total-net"},n.a.createElement("span",{className:"title"},"total P/L"),n.a.createElement(l.a,e.totalNet))))};o.propTypes={name:n.a.PropTypes.string,type:n.a.PropTypes.string,qtyShares:n.a.PropTypes.object,gainPercent:n.a.PropTypes.object,lastPrice:n.a.PropTypes.object,lastPricePercent:n.a.PropTypes.object,purchasePrice:n.a.PropTypes.object,realizedNet:n.a.PropTypes.object,unrealizedNet:n.a.PropTypes.object,totalNet:n.a.PropTypes.object},a.a=o},1224:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(594),s=function(e){return n.a.createElement("article",{className:"positions-market-overview"},n.a.createElement("div",{className:"position"},n.a.createElement("span",{className:"description"},e.description),n.a.createElement("div",{className:"position-group"},n.a.createElement("div",{className:"position-pair realized-net"},n.a.createElement("span",{className:"title"},"total realized P/L"),n.a.createElement(l.a,e.realizedNet)),n.a.createElement("div",{className:"position-pair unrealized-net"},n.a.createElement("span",{className:"title"},"total unrealized P/L"),n.a.createElement(l.a,e.unrealizedNet)),n.a.createElement("div",{className:"position-pair total-net"},n.a.createElement("span",{className:"title"},"total P/L"),n.a.createElement(l.a,e.totalNet)))))};s.propTypes={description:n.a.PropTypes.string.isRequired,unrealizedNet:n.a.PropTypes.object.isRequired,realizedNet:n.a.PropTypes.object.isRequired},a.a=s},1225:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(327),s=t.n(l),o=t(1223),i=t(593),c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m=function(e){return n.a.createElement("article",{className:"positions-list"},e.marketLink&&n.a.createElement(i.a,{key:e.market.id,href:e.marketLink.href,onClick:e.marketLink.onClick},(e.market.myPositionOutcomes||[]).map(function(a){return n.a.createElement(o.a,c({key:e.market.id+"-"+a.id,type:e.market.type},a,a.position))})),!e.marketLink&&(e.market.myPositionOutcomes||[]).map(function(a){return n.a.createElement(o.a,c({key:a.id,type:e.market.type},a,a.position))}),!e.settings.autoSellCompleteSets&&e.market.hasCompleteSet&&n.a.createElement("div",{className:"complete-sets"},n.a.createElement("div",{className:"close-position-button"},n.a.createElement("button",{"data-tip":e.market.smallestPosition.full,className:"button",onClick:function(a){a.stopPropagation(),e.market.onSubmitClosePosition()}},"Redeem ",e.market.smallestPosition.formatted," Complete Sets"))),n.a.createElement(s.a,{type:"light",effect:"solid",place:"top",globalEventOff:"click"}))};a.a=m},1226:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(327),s=t.n(l),o=t(594),i=t(1171),c=t(598),m=t(1186),p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(e){return n.a.createElement("div",{className:"portfolio-row"},n.a.createElement("div",{className:"portfolio-group portfolio-main-group"},n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"report-main-group-title"},"outcome: "),n.a.createElement("span",{className:"report-main-group-title-outcome"},e.outcome&&e.outcomePercentage&&e.outcomePercentage.value&&n.a.createElement("span",null,e.outcome,"  (",n.a.createElement(o.a,e.outcomePercentage),")"),e.outcome&&!e.outcomePercentage&&n.a.createElement("span",null,e.outcome),!e.outcome&&n.a.createElement(c.a,null))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"report-main-group-title"},"reported: "),n.a.createElement("span",{className:"report-main-group-title-outcome"},!!e.isCommitted&&!e.isRevealed&&n.a.createElement("span",{className:"report-committed","data-tip":"You have successfully committed to this report. Remember to login to reveal the report!"},e.reported||n.a.createElement(c.a,null)),!!e.isRevealed&&n.a.createElement("span",{className:"report-revealed"},e.reported||n.a.createElement(c.a,null)),!e.isRevealed&&!e.isCommitted&&n.a.createElement("span",null,e.reported||n.a.createElement(c.a,null)),!!e.outcome&&e.isReportEqual&&n.a.createElement("span",{className:"fa report-equal","data-tip":"Your report matches the consensus outcome"},""),!!e.outcome&&!e.isReportEqual&&n.a.createElement("span",{className:"fa report-unequal","data-tip":"Your report does not match the consensus outcome"},""),n.a.createElement(m.a,{isUnethical:e.isUnethical}))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"report-main-group-title"},"cycle: "),n.a.createElement("span",{className:"report-main-group-title-outcome"},e.period?n.a.createElement("span",{"data-tip":e.branch.currentPeriod-e.period+" reporting cycles ago"},e.period):n.a.createElement(c.a,null)))),n.a.createElement("div",{className:"portfolio-group"},n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"rep gain/loss"),n.a.createElement(o.a,p({className:"colorize"},e.repEarned))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"ended"),e.endDate?n.a.createElement(i.a,e.endDate):n.a.createElement(c.a,null))),n.a.createElement(s.a,{type:"light",effect:"solid",place:"top"}))};a.a=u},1234:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(1222),s=t(593),o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=function(e){return n.a.createElement("div",null,!!e.markets&&!!e.markets.length&&e.markets.map(function(e){return n.a.createElement(s.a,o({key:e.id},e.marketLink),n.a.createElement("div",{className:""},n.a.createElement("span",{className:"description"},e.description),!!e&&n.a.createElement("article",{className:"portfolio-list"},n.a.createElement(l.a,e))))}))};a.a=i},1235:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(1225),s=t(1224),o=t(593),i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=function(e){return n.a.createElement("div",{className:"positions-content"},!!e.markets&&!!e.markets.length&&e.markets.map(function(a){return n.a.createElement("div",{key:a.id,className:"positions-container"},n.a.createElement(o.a,{href:a.marketLink.href,onClick:a.marketLink.onClick},n.a.createElement(s.a,i({description:a.description},a.myPositionsSummary))),!!a.myPositionOutcomes&&!!a.myPositionOutcomes.length&&n.a.createElement(l.a,{className:"page-content positions-content",market:a,marketLink:a.marketLink,settings:e.settings}))}))};a.a=c},1236:function(e,a,t){"use strict";var r=t(13),n=t.n(r),l=t(327),s=t.n(l),o=t(1226),i=t(593),c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m=function(e){return n.a.createElement("div",null,!!e.reports&&!!e.reports.length&&e.reports.map(function(a){return n.a.createElement(i.a,c({key:""+a.marketId},a.marketLink),n.a.createElement("div",{key:a.marketId},n.a.createElement("span",{className:"description"},a.description,a.isChallenged&&n.a.createElement("span",{className:"fa outcome-challenged","data-tip":"This outcome is currently being challenged"},""),!a.isChallenged&&a.isChallengeable&&n.a.createElement("span",{className:"fa outcome-challengeable","data-tip":"This outcome is eligible to be challenged"},"")),!!a&&n.a.createElement("article",{className:"portfolio-list"},n.a.createElement(o.a,c({},a,{branch:e.branch})))))}),n.a.createElement(s.a,{type:"light",effect:"solid",place:"top"}))};a.a=m}});