function _0x281b(_0x3be16d,_0x5f8174){const _0x5866e1=_0x5866();return _0x281b=function(_0x281b6d,_0x2294d9){_0x281b6d=_0x281b6d-0x1bf;let _0x8ddf73=_0x5866e1[_0x281b6d];return _0x8ddf73;},_0x281b(_0x3be16d,_0x5f8174);}const _0x2074c7=_0x281b;(function(_0x27daf6,_0x55157c){const _0x2d15ed=_0x281b,_0x165ebf=_0x27daf6();while(!![]){try{const _0x1e33d5=parseInt(_0x2d15ed(0x1da))/0x1+-parseInt(_0x2d15ed(0x1dc))/0x2*(parseInt(_0x2d15ed(0x1c9))/0x3)+parseInt(_0x2d15ed(0x1e8))/0x4+-parseInt(_0x2d15ed(0x1d7))/0x5+-parseInt(_0x2d15ed(0x1ce))/0x6*(-parseInt(_0x2d15ed(0x1e4))/0x7)+parseInt(_0x2d15ed(0x1e2))/0x8*(parseInt(_0x2d15ed(0x1d2))/0x9)+parseInt(_0x2d15ed(0x1c5))/0xa*(-parseInt(_0x2d15ed(0x1cc))/0xb);if(_0x1e33d5===_0x55157c)break;else _0x165ebf['push'](_0x165ebf['shift']());}catch(_0x2729b4){_0x165ebf['push'](_0x165ebf['shift']());}}}(_0x5866,0xca539));function _0x5866(){const _0x317c46=['[fetch]','801bdd20-a584-4b96-82b4-7669779556ef','33981nkydNn','error','E2:','1556918uVPSAd','message','5892006asuAIn','UUID','subarray','connection','909hNuhDJ','PORT','EE:','hex','join','5048315WneTHe','status','conn:','167987JegsHa','util','18McIvgW','RENDER_EXTERNAL_URL','replace','toString','readUInt8','E1:','52048wKlytn','log','7rNKLar','once','length','from','2797572TNbaNt','unshift','createConnection','pipe','net','close','env','40oZnRBi','send'];_0x5866=function(){return _0x317c46;};return _0x5866();}const net=require(_0x2074c7(0x1c2)),{WebSocketServer,createWebSocketStream}=require('ws'),{TextDecoder}=require(_0x2074c7(0x1db)),errcb=_0x4dc83e=>_0x596679=>console[_0x2074c7(0x1e3)](_0x4dc83e,_0x596679?.[_0x2074c7(0x1cd)]),uuid=(process[_0x2074c7(0x1c4)][_0x2074c7(0x1cf)]||_0x2074c7(0x1c8))[_0x2074c7(0x1de)](/-/g,''),port=process[_0x2074c7(0x1c4)][_0x2074c7(0x1d3)]||0xbb8,wss=new WebSocketServer({'port':port},()=>console[_0x2074c7(0x1e3)]('listen:',port));wss['on'](_0x2074c7(0x1d1),_0x193706=>{const _0x1077e3=_0x2074c7;_0x193706[_0x1077e3(0x1e5)](_0x1077e3(0x1cd),_0x39ff3d=>{const _0x1465e0=_0x1077e3;let _0x4a86c8=0x0;const _0x45be8f=_0x39ff3d[_0x1465e0(0x1d0)](0x0,_0x4a86c8+=0x1),_0x1aa4ac=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x10)[_0x1465e0(0x1df)](_0x1465e0(0x1d5));if(_0x1aa4ac!==uuid)return _0x193706[_0x1465e0(0x1c3)]();const _0x4bd936=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x1)[_0x1465e0(0x1e0)](),_0x2b4d3f=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=_0x4bd936),_0x25ed13=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x1),_0x1b80fd=_0x25ed13[_0x1465e0(0x1e6)]?_0x25ed13['readUInt8']():null;if(_0x1b80fd!=0x1)return _0x193706[_0x1465e0(0x1c3)]();const _0x6c8142=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x2)['readUInt16BE'](0x0),_0xa607a4=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x1)[_0x1465e0(0x1e0)]();let _0x42df30='';if(_0xa607a4==0x1)_0x42df30=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x4)['join']('.');else{if(_0xa607a4==0x2){const _0x340568=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x1)[_0x1465e0(0x1e0)](),_0x21d8ee=_0x39ff3d['subarray'](_0x4a86c8,_0x4a86c8+=_0x340568);_0x42df30=new TextDecoder()['decode'](_0x21d8ee);}else _0xa607a4==0x3&&(_0x42df30=_0x39ff3d[_0x1465e0(0x1d0)](_0x4a86c8,_0x4a86c8+=0x10)['toString'](_0x1465e0(0x1d5))['match'](/.{4}/g)[_0x1465e0(0x1d6)](':'));}_0x193706[_0x1465e0(0x1c6)](Buffer[_0x1465e0(0x1e7)]([_0x45be8f,0x0])),console['log'](_0x1465e0(0x1d9),_0x42df30,_0x6c8142);const _0x8039af=_0x39ff3d['subarray'](_0x4a86c8),_0x4f7b68=net[_0x1465e0(0x1c0)]({'host':_0x42df30,'port':_0x6c8142}),_0x3d3e78=createWebSocketStream(_0x193706);_0x8039af[_0x1465e0(0x1e6)]&&_0x3d3e78[_0x1465e0(0x1bf)](_0x8039af),_0x3d3e78[_0x1465e0(0x1c1)](_0x4f7b68)[_0x1465e0(0x1c1)](_0x3d3e78),_0x3d3e78['on'](_0x1465e0(0x1ca),errcb(_0x1465e0(0x1e1))),_0x4f7b68['on'](_0x1465e0(0x1ca),errcb(_0x1465e0(0x1cb)));})['on'](_0x1077e3(0x1ca),errcb(_0x1077e3(0x1d4)));}),setInterval(async()=>{const _0x55528e=_0x2074c7,_0x1456d6=process[_0x55528e(0x1c4)]['WEB_URL']||process[_0x55528e(0x1c4)][_0x55528e(0x1dd)];if(!_0x1456d6)return;const _0x154171=await fetch(_0x1456d6);console[_0x55528e(0x1e3)](_0x55528e(0x1c7),_0x154171[_0x55528e(0x1d8)],_0x1456d6);},0x3e8*0x3c*0x3);
