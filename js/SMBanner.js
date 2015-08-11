
          // SM Banner //

          SMBanner = function(w,h) {

            //this.canvas  = document.getElementById("sm-canvas");
            //this.ctx = this.canvas.getContext("2d");
            this.bwidth =w+"px";
            this.bheight =h+"px";
            this.rect = {x:0, y:0, width:10, height:10};


            // the playback que of slides
            this.kolejka = [];
            this.currentSlide = 0;
           
       
          } 

          SMBanner.prototype.init = function () {

            
            _self = this;
       
          //  TweenLite.to(this.rect, 2, {x:100, y:100, width:100, height:100,  onUpdate:function() {_self.draw.call(_self)}});
            this.addWhiteEdge();
           
            this.backgroundPosLoop();
          }


 


          SMBanner.prototype.addWhiteEdge = function() {

              var el = document.getElementById("white-mask");

              var el_paper = Raphael(el,300,250);
              var white_edge = el_paper.path("M 300,250 0,250 0,240 290,240 290,10 0,10 0,0 300,0 z")
              white_edge.attr({fill: '#FFFFFF','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_a'); 
             // console.log(el_paper);

             

          }

    

          SMBanner.prototype.backgroundPosLoop = function () {
                
                _self = this;
                TweenLite.ticker.fps(60);
             

                TweenLite.to('#sm-add-bg', 9 , {  y:"40px",    z: 0.1,  rotationZ: 0.01, ease:Linear.easeNone, force3D:true
                  , onUpdate:function() {
                    //console.log('lo', this)
                    }, onComplete:function () {

                         
                    }
                });
       
          }

          SMBanner.prototype.renderCTA = function () {

              var el = document.getElementById("cta");
              
              var rsr = Raphael(el, '134', '30');



              var rect_b = rsr.rect(0, 0, 134, 30);
                  rect_b.attr({x: '0',y: '0',fill: '#0090BF',stroke: '#0090BF',"stroke-miterlimit": '10','stroke-width': '1','stroke-opacity': '1'}).data('id', 'rect_b');
              var group_a = rsr.set();

              var path_c = rsr.path("M31.546,9.259h1.961v8.236h3.796v1.541h-5.757V9.259z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_c');
              var path_d = rsr.path("M44.163,18.63c-0.687,0.378-1.471,0.574-2.479,0.574c-2.382,0-3.769-1.373-3.769-3.74   c0-2.087,1.107-3.81,3.349-3.81c2.675,0,3.432,1.835,3.432,4.356h-4.987c0.084,1.163,0.896,1.821,2.06,1.821   c0.91,0,1.694-0.336,2.396-0.729V18.63z M42.902,14.722c-0.057-0.91-0.477-1.695-1.527-1.695c-1.05,0-1.583,0.729-1.667,1.695   H42.902z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_d');
              var path_e = rsr.path("M46.484,12.201c0.728-0.336,1.709-0.546,2.507-0.546c2.199,0,3.109,0.91,3.109,3.04v0.924   c0,0.729,0.015,1.275,0.028,1.807c0.015,0.546,0.042,1.05,0.084,1.611h-1.652c-0.07-0.378-0.07-0.854-0.084-1.079h-0.028   c-0.435,0.798-1.373,1.247-2.228,1.247c-1.274,0-2.521-0.771-2.521-2.143c0-1.079,0.519-1.709,1.233-2.059   c0.714-0.35,1.639-0.42,2.423-0.42h1.037c0-1.163-0.519-1.555-1.625-1.555c-0.799,0-1.598,0.308-2.228,0.785L46.484,12.201z    M48.684,17.832c0.574,0,1.022-0.252,1.316-0.645c0.308-0.406,0.393-0.924,0.393-1.485H49.58c-0.841,0-2.088,0.14-2.088,1.247   C47.492,17.566,48.011,17.832,48.684,17.832z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_e');
              var path_f = rsr.path("M53.988,11.823h1.667v1.639h0.027c0.084-0.672,0.854-1.807,1.976-1.807c0.182,0,0.378,0,0.574,0.056v1.891   c-0.168-0.098-0.504-0.154-0.841-0.154c-1.526,0-1.526,1.905-1.526,2.941v2.647h-1.877V11.823z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_f');
              var path_g = rsr.path("M59.642,11.823h1.778v0.98h0.028c0.588-0.826,1.387-1.148,2.367-1.148c1.709,0,2.451,1.205,2.451,2.83   v4.552H64.39v-3.852c0-0.882-0.014-2.073-1.219-2.073c-1.358,0-1.652,1.471-1.652,2.396v3.53h-1.877V11.823z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_g');
              var path_h = rsr.path("M72.059,11.823h1.751v1.008h0.028c0.588-0.882,1.442-1.176,2.143-1.176c1.009,0,1.724,0.378,2.13,1.274   c0.434-0.868,1.372-1.274,2.255-1.274c1.779,0,2.283,1.219,2.283,2.83v4.552h-1.877v-4.3c0-0.672,0-1.625-1.079-1.625   c-1.246,0-1.4,1.485-1.4,2.423v3.502h-1.877v-4.3c0-0.672,0-1.625-1.079-1.625c-1.246,0-1.4,1.485-1.4,2.423v3.502h-1.877V11.823z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_h');
              var path_i = rsr.path("M87.839,11.655c2.143,0,3.782,1.442,3.782,3.824c0,2.073-1.387,3.726-3.782,3.726   c-2.382,0-3.769-1.653-3.769-3.726C84.07,13.097,85.71,11.655,87.839,11.655z M87.839,17.748c1.442,0,1.821-1.289,1.821-2.494   c0-1.106-0.589-2.143-1.821-2.143c-1.219,0-1.807,1.064-1.807,2.143C86.032,16.445,86.41,17.748,87.839,17.748z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_i');
              var path_j = rsr.path("M93.129,11.823h1.667v1.639h0.027c0.084-0.672,0.854-1.807,1.976-1.807c0.182,0,0.378,0,0.574,0.056v1.891   c-0.168-0.098-0.504-0.154-0.841-0.154c-1.526,0-1.526,1.905-1.526,2.941v2.647h-1.877V11.823z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_j');
              var path_k = rsr.path("M104.068,18.63c-0.687,0.378-1.471,0.574-2.479,0.574c-2.382,0-3.769-1.373-3.769-3.74   c0-2.087,1.107-3.81,3.349-3.81c2.675,0,3.432,1.835,3.432,4.356h-4.987c0.084,1.163,0.896,1.821,2.06,1.821   c0.91,0,1.695-0.336,2.396-0.729V18.63z M102.808,14.722c-0.057-0.91-0.477-1.695-1.527-1.695s-1.583,0.729-1.667,1.695H102.808z").attr({fill: '#FFFFFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_k');
            group_a.attr({'name': 'group_a'});


            var rsrGroups = [group_a];
            group_a.push(
             
              path_c ,
              path_d ,
              path_e ,
              path_f ,
              path_g ,
              path_h ,
              path_i ,
              path_j ,
              path_k 
            );
              
             //document.getElementById("cta").addEventListener('click', function() {console.log("s")})
          rect_b.hover( function(e) {

                this.animate({fill: '#ffffff'}, 200);
                for(i=0;i<group_a.length;i++) {
                      group_a[i].animate({fill:'#0090BF'}, 200);
                  }

            },function(e) {

                this.animate({  fill: '#0090BF'}, 200);

                  for(i=0;i<group_a.length;i++) {
                    group_a[i].animate({fill:'#FFFFFF'}, 200);
                  }
                 //path_c.animate({fill:'#0090BF'}, 200);

            }


          ) // the end of hover
  
        
          
          

          }
          /* draw a border  */
          SMBanner.prototype.addBorder  = function (w,h,color,id) {

              
              var divTop = document.createElement("DIV"); 
              var divBottom = document.createElement("DIV"); 
              var divLeft = document.createElement("DIV");
              var divRight =  document.createElement("DIV");

                  divTop.style.position  = divBottom.style.position =  divLeft.style.position= divRight.style.position = "absolute";
                  divTop.style.background = divBottom.style.background = divLeft.style.background = divRight.style.background = color;
                  divTop.style.zIndex = divBottom.style.zIndex = divLeft.style.zIndex = divRight.style.zIndex = '999999';  

                  divTop.style.width =w+"px";
                  divTop.style.height =1+"px";
                  divTop.style.top ="0px";
                  
                  divBottom.style.width =w+"px";
                  divBottom.style.height =1+"px";
                  divBottom.style.bottom ="0px";
                  
                  divLeft.style.width =1+"px";
                  divLeft.style.height =h+"px";
                  divLeft.style.left ="0px";
                  
                  divRight.style.width =1+"px";
                  divRight.style.height =h+"px";
                  divRight.style.right ="0px";
                  
                  document.getElementById(id).appendChild(divTop);
                  document.getElementById(id).appendChild(divBottom);
                  document.getElementById(id).appendChild(divLeft);
                  document.getElementById(id).appendChild(divRight);

          }

          SMBanner.prototype.resetBanner = function () {

            // reset the banner to its initial values;

            TweenLite.to('#wrap-slide-1', 0 , {  y:"0px", delay:0.1,   z: 0.1,  rotationZ: 0.01, ease:Power2.easeInOut, force3D:true});

            TweenLite.to('#slide1-a', 0 , {  x:"-250px", delay:0.1,   z: 0.1,  rotationZ: 0.01, ease:Power2.easeInOut, force3D:true});
            TweenLite.to('#c1-a', 0 , {  width:"0px", delay:0.1,   z: 0.1,  rotationZ: 0.01, ease:Power2.easeInOut, force3D:true});
            TweenLite.to('#slide1-b', 0 , {  x:"-230px", delay:0.1,   z: 0.1,  rotationZ: 0.01, ease:Power2.easeInOut, force3D:true});
            TweenLite.to('#c1-b', 0 , {  width:"0px", delay:0.1,   z: 0.1,  rotationZ: 0.01, ease:Power2.easeInOut, force3D:true});

          }


          SMBanner.prototype.showLockup = function () {

             TweenLite.to('#logo-lockup', 1 , {  y:"-70px",    z: 0.1,  rotationZ: 0.01, ease:Expo.easeIn, force3D:true, onUpdate:function() {
                    //console.log('lo', this)
                }});
       
        }
        SMBanner.prototype.theEnd = function () {

          console.log("the end");

           this.showLockup();
        }

      