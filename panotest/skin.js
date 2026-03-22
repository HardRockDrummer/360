// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: 2.ggsk
// Generated 2026-03-22T21:38:40

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_1__o.png';
		me._button_1__img.ggOverSrc=hs;
		el.ggId="Button   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 83px;';
		hs+='left : 139px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.toggleVR();
		}
		me._button_1.onmouseenter=function (e) {
			me._button_1__img.src=me._button_1__img.ggOverSrc;
			me.elementMouseOver['button_1']=true;
		}
		me._button_1.onmouseleave=function (e) {
			me._button_1__img.src=me._button_1__img.ggNormalSrc;
			me.elementMouseOver['button_1']=false;
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_1);
		me.elementMouseOver['button_1']=false;
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};