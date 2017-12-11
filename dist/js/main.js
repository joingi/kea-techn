$(".js-carousel").each(function(){var e=$(this),t=e.find(".js-carousel-container"),r=e.find(".js-carousel-list"),o=e.find(".js-carousel-item"),a=e.find(".js-carousel-button"),n=function(){r.removeAttr("style");var e=$(o[0]).outerWidth()*o.length;r.css("width",e)};$(window).resize(function(){n()}),n(),a.on("click",function(){var e=$(this).data("dir"),o=parseInt(r.css("left"))||0,a=0,n=t.outerWidth(),l=r.outerWidth()+(o-n);a="next"==e?l<n?o-l:o-n:o+n>=0?0:o+n,r.animate({left:a})})}),Chart.defaults.doughnutLabels=Chart.helpers.clone(Chart.defaults.doughnut);var helpers=Chart.helpers,defaults=Chart.defaults;Chart.controllers.doughnutLabels=Chart.controllers.doughnut.extend({updateElement:function(e,t,r){var o=this.chart,a=o.chartArea,n=o.options,l=n.animation,i=n.elements.arc,d=(a.left+a.right)/2,s=(a.top+a.bottom)/2,c=n.rotation,h=n.rotation,u=this.getDataset(),b=r&&l.animateRotate?0:e.hidden?0:this.calculateCircumference(u.data[t])*(n.circumference/(2*Math.PI)),g=r&&l.animateScale?0:this.innerRadius,m=r&&l.animateScale?0:this.outerRadius,f=e.custom||{},C=helpers.getValueAtIndexOrDefault;helpers.extend(e,{_datasetIndex:this.index,_index:t,_model:{x:d+o.offsetX,y:s+o.offsetY,startAngle:c,endAngle:h,circumference:b,outerRadius:m,innerRadius:g,label:C(u.label,t,o.data.labels[t])},draw:function(){var e=this._chart.ctx,t=this._view,r=t.startAngle,o=t.endAngle,a=this._chart.config.options,n=this.tooltipPosition(),l=t.circumference/a.circumference*100;e.beginPath(),e.arc(t.x,t.y,t.outerRadius,r,o),e.arc(t.x,t.y,t.innerRadius,o,r,!0),e.closePath(),e.strokeStyle=t.borderColor,e.lineWidth=t.borderWidth,e.fillStyle=t.backgroundColor,e.fill(),e.lineJoin="bevel",t.borderWidth&&e.stroke(),t.circumference>.0015&&(e.beginPath(),e.font=helpers.fontString(a.defaultFontSize,a.defaultFontStyle,a.defaultFontFamily),e.fillStyle="#fff",e.textBaseline="top",e.textAlign="center",e.fillText(l.toFixed(2)+"%",n.x,n.y))}});var p=e._model;p.backgroundColor=f.backgroundColor?f.backgroundColor:C(u.backgroundColor,t,i.backgroundColor),p.hoverBackgroundColor=f.hoverBackgroundColor?f.hoverBackgroundColor:C(u.hoverBackgroundColor,t,i.hoverBackgroundColor),p.borderWidth=f.borderWidth?f.borderWidth:C(u.borderWidth,t,i.borderWidth),p.borderColor=f.borderColor?f.borderColor:C(u.borderColor,t,i.borderColor),r&&l.animateRotate||(p.startAngle=0===t?n.rotation:this.getMeta().data[t-1]._model.endAngle,p.endAngle=p.startAngle+p.circumference),e.pivot()}});var config={type:"doughnutLabels",data:{datasets:[{data:[53,53],backgroundColor:["#3080FF","#3AEBA9"],label:"Tickets"}],labels:["Tickets sold = 53","Tickets remaining = 53"]},options:{circumference:Math.PI,rotation:1*Math.PI,responsive:!0,legend:{position:"top"},title:{display:!1,text:"Graphics"},animation:{animateScale:!0,animateRotate:!0}}},ctx=document.getElementById("myChart").getContext("2d");new Chart(ctx,config);ctx=document.getElementById("ticketsSold");var myChart=new Chart(ctx,{type:"line",data:{labels:["1:00 pm","4:00 pm","7:00 pm","10:00 pm","1:00 Am","4:00 Am","7:00 Am","10:00 Am"],datasets:[{label:"Tickets Sold",data:[0,2,4,2,5,2,1,1,1],backgroundColor:["rgba(35, 132, 222, 1)","rgba(72, 206, 189, 1)"],borderColor:["rgba(35, 132, 222, 1)","rgba(72, 206, 189, 1)"],borderWidth:1},{label:"Income",data:[0,3,5,3,6,3,2,2,2],backgroundColor:["rgba(72, 206, 189, 1)","rgba(72, 206, 189, 1)"],borderColor:["rgba(72, 206, 189, 1)","rgba(72, 206, 189, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}}}});ctx=document.getElementById("sharesChart");(myChart=new Chart(ctx,{type:"line",data:{labels:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,],datasets:[{label:"Tickets Sold",data:[12,0,24,0,18,0,22,0,17,0,5,0,14,0,9,0,23,0,12,0,24,0,18,0,22,0,17,0,5,0,14,0,9,0,23,0],backgroundColor:["rgba(35, 132, 222, 1)","rgba(72, 206, 189, 1)"],borderColor:["rgba(35, 132, 222, 1)","rgba(72, 206, 189, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}}}})).ctx.canvas.removeEventListener("wheel",myChart._wheelHandler);