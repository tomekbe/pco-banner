    // SMSlideStrip 
    // _imgSvg  - source SVG of the text
    // sw - strip width 
    // sh - strip height
    // sc - strip colour
    // _xoffset - offset from the left of the text in the box
    // _yoffset - offset from the top of the text in the box
    // _delay - delay 

    SMSlideStrip = function (_imgSvg, sw, sh, sc, _xoffset, _yoffset, _delay) {

      this.strip="";
      this.masker="";

      this.imgsrc=_imgSvg;
      this.strip_width = sw;
      this.strip_height =sh;

      this.strip_colour =sc;
      this.strip_offset_top = "";

      this.copy_xoffset = _xoffset ;
      this.copy_yoffset =  _yoffset ;

      this.delay  = _delay;
      

    }

    SMSlideStrip.prototype.setup = function(_imgSvg, sw, sh, sc) {
       
     
    
    }


    SMSlideStrip.prototype.animate_strip = function () {
        var _self = this;
        TweenLite.to(_self.strip , 0.1 , {  x:_self.strip_width, delay:_self.delay,  z: 0.1,  rotationZ: 0.01, ease:Expo.easeIn, force3D:true });
    }


    SMSlideStrip.prototype.unmask  = function (c) {
      // unmask and play some callback;
      var _self = this;
      var _masker = this.masker;
      
      TweenLite.to(_masker , 0.3 , {  width:this.strip_width,delay:this.delay*1.6,   z: 0.1,  rotationZ: 0.01, ease:Expo.easeIn, force3D:true });

    }

    
    SMSlideStrip.prototype.offsetFromTop = function (n) {

      this.strip_offset_top = n+"px";
      this.strip.style.top = n+"px";
      //console.log("offsetting",  this.strip.style.top );
    
    }

    
    SMSlideStrip.prototype.offsetFromLeft = function (n) {

  
    
    }


    SMSlideStrip.prototype.renderHTML = function () {

      var _html = document.createElement("DIV");
          _html.className="strip";

      var _c = document.createElement("DIV");
          _c.className="masker";
      
      var _img = document.createElement("IMG");

      
      _html.style.position  = _c.style.position  = "absolute";
      _html.style.width = this.strip_width +"px";
      _html.style.height = this.strip_height +"px";
      //_html.style.background = this.strip_colour;
      _html.style.left = -this.strip_width +"px";

      _c.style.overflow ="hidden"; 
      _c.style.width = "0px";

      // offset the text in the container
      _c.style.top = this.copy_xoffset +"px";
      _c.style.left = this.copy_yoffset +"px";

      _img.src = this.imgsrc;


      _c.appendChild(_img);
      _html.appendChild(_c);

      this.strip = _html;
      this.masker = _c;

      return _html;
    }

