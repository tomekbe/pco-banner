// >SMSlide 

    SMSlide = function (_topOffset){

      // each slide consists of the several strips
      this.strips = [];
      this.slide = "";

      this.wrap="";
      this.topOffset = _topOffset || 0;
      this.last = false;

    }

    SMSlide.prototype.addStrip = function (o) {


      this.strips.push(o);


      // rendering this slide and appending it to DOM

    }
    SMSlide.prototype.setAsLast = function () {
      this.last = true;
    }

    SMSlide.prototype.renderSlide = function() {
      // iterate through and append to dom
      var _wrap = document.createElement("DIV");

          _wrap.style.position = 'absolute';
          _wrap.style.top = 0;
          _wrap.style.left = 0;
          _wrap.style.width ="300px";
          _wrap.style.height ="250px";
          _wrap.style.overflow = "hidden";
      
      for(var i=0;i<this.strips.length;i++) {

             var str = this.strips[i].renderHTML();
             if(i!=0) {
                this.strips[i].offsetFromTop(parseInt(this.strips[i-1].strip_offset_top) +parseInt(this.strips[i-1].strip_height) );
                //console.log(this.strips[i].strip_height, "this is height");
                //console.log( parseInt(this.strips[i-1].strip_offset_top) +parseInt(this.strips[i-1].strip_height) );
            } else {
              this.strips[i].offsetFromTop(this.topOffset);
            }
               this.wrap = _wrap;
              _wrap.appendChild(str);  
      
      }
       document.getElementById('sm-add').appendChild(_wrap);
    }

    SMSlide.prototype.animateSlide = function(f) {

      //animating this slide and executing a callback at the end of animation
      var _self = this;
      var  _strips = this.strips;
      
      for(var i=0; i<this.strips.length;i++) {
          
          this.strips[i].unmask();
          this.strips[i].animate_strip()
          
          //setTimeout(f1 ,300);
          //setTimeout(f2, 300);
      
      }
      if (!this.last) {
      setTimeout(function () {

                       TweenLite.to(_self.wrap, 0.4 , {  y:"-300px", delay:0.1,   z: 0.1,  rotationZ: 0.01, ease:Power2.easeInOut, force3D:true,onComplete:f});

                       
      }, 3000);} else {

        setTimeout(f,3000);
      }

      //c();
      
    }