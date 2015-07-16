/*!CK:1301186790!*//*1435555393,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["lxedL"]); }

__d("ScrollHighlight",["DOMScroll","highlight"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={actOn:function(j,k,l){g.scrollTo(j,true,false,false,l);h(j,null,k);}};e.exports=i;},null);
__d("ProfileApprovalController",["AsyncRequest","DOM","Event","HTML","$","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n){"use strict";this.queueType=n;var o=l('profileApprovalSeeMoreLink');if(o)i.listen(o,'click',this.clickedSeeMore.bind(this));}m.prototype.getNewStories=function(){"use strict";var n=this.getStoryData(),o={filter:this.FILTER_NEWER,filter_timestamp:n.newest_time,filter_fbid:n.newest_fbid};new g().setURI('/ajax/profile/approval/get_more.php').setData(o).setHandler(this.handleContent).send();};m.prototype.clickedSeeMore=function(){"use strict";var n=this.getStoryData(),o={queue_type:this.queueType,filter:this.FILTER_OLDER,filter_timestamp:n.oldest_time,filter_fbid:n.oldest_fbid};new g().setURI('/ajax/profile/approval/get_more.php').setData(o).setHandler(this.handleContent).send();};m.prototype.handleContent=function(n){"use strict";var o=n.payload;if(o.pager_error){h.replace(k('profileApprovalSeeMoreContainer'),j(o.pager_markup));return;}if(o.hide_more_pager)h.remove(k('profileApprovalSeeMoreContainer'));if(!o.items_markup)return;if(o.insert_before)h.prependContent(h.find(k('profileApprovalContentContainer'),'.profileApprovalList'),j(o.items_markup));if(o.insert_after)h.appendContent(h.find(k('profileApprovalContentContainer'),'.profileApprovalList'),j(o.items_markup));};m.prototype.getStoryData=function(){"use strict";var n=h.scry(k('profileApprovalContentContainer'),'.profileApprovalStoryContainer');if(!n)return;var o=n[0],p=n[n.length-1];return {newest_time:o.getAttribute('data-timestamp'),newest_fbid:o.getAttribute('data-fbid'),oldest_time:p.getAttribute('data-timestamp'),oldest_fbid:p.getAttribute('data-fbid')};};m.NO_MORE_CONTENT='no_more_content';Object.assign(m.prototype,{FILTER_NONE:0,FILTER_OLDER:1,FILTER_NEWER:2});e.exports=m;},null);
__d("legacy:profile-approval-controller",["ProfileApprovalController"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.ProfileApprovalController=b('ProfileApprovalController');},3);
__d("ConfirmFamilyPendingPostsQueue",["Event","Button","DOM"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={listen:function(k){g.listen(k,'change',function(event){var l=event.target,m=!!parseInt(l.value,10),n=l.form;n.approve_button.disabled=!m;var o=i.find(n,'.submitButton');h.setEnabled(o,m);});}};e.exports=j;},null);
__d("ApprovalQueueCountUpdater",["ge","Arbiter","DOM"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={updateCounts:function(k,l){var m=k.friends+k.others,n=g('tag_count_friends'),o=g('tag_count_other');h.inform('NavigationMessage/navigationCount',{key:'review',count:m,hide:true});i.setContent(n,k.friends<=l?k.friends:l+"+");i.setContent(o,k.others<=l?k.others:l+"+");}};e.exports=j;},null);
__d("TimelineReviewTour",["AsyncRequest"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={showTour:function(i){new g().setURI('/ajax/timeline/all_activity/review/tour.php').setData({step:i}).send();}};e.exports=h;},null);