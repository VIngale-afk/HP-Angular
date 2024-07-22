import{$ as J,A as z,B as ge,C as F,D as ve,E as k,F as ye,G as s,H as a,I as M,J as _e,K as Ce,L as Ve,M as m,N as De,O as be,P as l,Q as f,R as Me,S as Y,T as Z,U as X,V as K,X as y,Y as _,Z as Ae,_ as Ee,a as p,aa as Fe,b as V,ba as we,ca as Ie,da as Se,e as ae,f as le,fa as Oe,g as ue,h as O,ha as j,i as N,j as x,ja as Q,k as g,l as D,m as P,n as de,o as ce,p as W,q as $,r as v,s as b,t as q,u as he,v as fe,w as pe,x as me,y as c,z as u}from"./chunk-PESTG536.js";var A=(()=>{let e=class e{constructor(i){this.http=i,this.apiURL="/movies"}getMovies(){return this.http.get(this.apiURL)}getMovieDetails(i){return this.http.get(this.apiURL+"/"+i)}};e.\u0275fac=function(r){return new(r||e)(he(Ie))},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var T=(()=>{let e=class e{transform(i){return i?"$"+i+"millions":""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=P({name:"budget",type:e,pure:!0});let t=e;return t})();var G=(()=>{let e=class e{transform(i){let r="";if(i){let o=Math.floor(i/60),d=i%60;o>0&&(r+=`${o} ${o===1?"hour":"hours"}`),d>0&&(r!==""&&(r+=" and "),r+=`${d} ${d===1?"minute":"minutes"}`)}return r!==""?r:"0 minutes"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=P({name:"duration",type:e,pure:!0});let t=e;return t})();var ke=(()=>{let e=class e{constructor(i,r,o){this.route=i,this.router=r,this.movieService=o}ngOnInit(){let i=this.route.snapshot.paramMap.get("id")||"";this.movieService.getMovieDetails(i).subscribe(r=>{this.movie=r})}back(){this.router.navigate(["/movies"])}};e.\u0275fac=function(r){return new(r||e)(u(Oe),u(j),u(A))},e.\u0275cmp=x({type:e,selectors:[["app-movie-details"]],decls:50,vars:15,consts:[[1,"container"],[1,"row","mt-3"],[1,"col-1"],[1,"btn","btn","dark",3,"click"],[1,"bi","bi-house-door"],[1,"col-11","justify-content-center"],[1,"col-md-6","col-12"],[3,"src","alt"],[1,"col-md-6","align-items-center"],[1,"col-12","text-center"],[1,"table","table-striped"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),m("click",function(){return o.back()}),M(4,"i",4),l(5,"Back"),a()(),s(6,"div",5)(7,"h2"),l(8),a()()(),s(9,"div",1)(10,"div",6),M(11,"img",7),a(),s(12,"div",8),l(13," Summary:"),s(14,"p"),l(15),a()()(),s(16,"div",1)(17,"div",9)(18,"h2"),l(19,"Details"),a()()(),s(20,"table",10)(21,"tbody")(22,"tr")(23,"th"),l(24,"Box Office"),a(),s(25,"td"),l(26),y(27,"budget"),a()(),s(28,"tr")(29,"th"),l(30,"Budget"),a(),s(31,"td"),l(32),y(33,"budget"),a()(),s(34,"tr")(35,"th"),l(36,"Duration"),a(),s(37,"td"),l(38),y(39,"duration"),a()(),s(40,"tr")(41,"th"),l(42,"Producers"),a(),s(43,"td"),l(44),a()(),s(45,"tr")(46,"th"),l(47,"Box Office"),a(),s(48,"td"),l(49),a()()()()()),r&2&&(c(8),f(o.movie==null?null:o.movie.title),c(3),be("alt","",o.movie==null?null:o.movie.title," Poster"),k("src",o.movie==null?null:o.movie.poster,me),c(4),f(o.movie==null?null:o.movie.summary),c(11),f(_(27,9,o.movie==null?null:o.movie.box_office)),c(6),f(_(33,11,o.movie==null?null:o.movie.box_office)),c(6),f(_(39,13,o.movie==null?null:o.movie.duration)),c(6),f(o.movie==null||o.movie.producers==null?null:o.movie.producers.join(",")),c(5),f(o.movie==null||o.movie.cinematographers==null?null:o.movie.cinematographers.join(",")))},dependencies:[T,G]});let t=e;return t})();var Le=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(z),u(W))},e.\u0275dir=D({type:e});let t=e;return t})(),ot=(()=>{let e=class e extends Le{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=pe(e)))(o||e)}})(),e.\u0275dir=D({type:e,features:[F]});let t=e;return t})(),We=new b("");var st={provide:We,useExisting:q(()=>H),multi:!0};function at(){let t=J()?J().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var lt=new b(""),H=(()=>{let e=class e extends Le{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!at())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(z),u(W),u(lt,8))},e.\u0275dir=D({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(h){return o._handleInput(h.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(h){return o._compositionEnd(h.target.value)})},features:[K([st]),F]});let t=e;return t})();var ut=new b(""),dt=new b("");function $e(t){return t!=null}function qe(t){return Ae(t)?ae(t):t}function ze(t){let e={};return t.forEach(n=>{e=n!=null?p(p({},e),n):e}),Object.keys(e).length===0?null:e}function Ye(t,e){return e.map(n=>n(t))}function ct(t){return!t.validate}function Ze(t){return t.map(e=>ct(e)?e:n=>e.validate(n))}function ht(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){return ze(Ye(n,e))}}function Xe(t){return t!=null?ht(Ze(t)):null}function ft(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){let i=Ye(n,e).map(qe);return ue(i).pipe(le(ze))}}function Ke(t){return t!=null?ft(Ze(t)):null}function je(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function pt(t){return t._rawValidators}function mt(t){return t._rawAsyncValidators}function ee(t){return t?Array.isArray(t)?t:[t]:[]}function R(t,e){return Array.isArray(t)?t.includes(e):t===e}function Te(t,e){let n=ee(e);return ee(t).forEach(r=>{R(n,r)||n.push(r)}),n}function Ge(t,e){return ee(e).filter(n=>!R(t,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},te=class extends U{get formDirective(){return null}get path(){return null}},S=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},oi=V(p({},gt),{"[class.ng-submitted]":"isSubmitted"}),Je=(()=>{let e=class e extends ie{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(S,2))},e.\u0275dir=D({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ye("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[F]});let t=e;return t})();var w="VALID",B="INVALID",E="PENDING",I="DISABLED";function vt(t){return(L(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?Xe(t):t||null}function _t(t,e){return(L(e)?e.asyncValidators:t)||null}function Ct(t){return Array.isArray(t)?Ke(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ne=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===B}get pending(){return this.status==E}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Te(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=E,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(i=>{i.disable(V(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(V(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===E)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;let n=qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(B)?B:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ct(this._rawAsyncValidators)}};var Qe=new b("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function Vt(t,e){return[...e.path,t]}function Dt(t,e,n=re){Mt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),At(t,e),Ft(t,e),Et(t,e),bt(t,e)}function Be(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function bt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Mt(t,e){let n=pt(t);e.validator!==null?t.setValidators(je(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=mt(t);e.asyncValidator!==null?t.setAsyncValidators(je(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Be(e._rawValidators,r),Be(e._rawAsyncValidators,r)}function At(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&et(t,e)})}function Et(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&et(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function et(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ft(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function wt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function It(t){return Object.getPrototypeOf(t.constructor)===ot}function St(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===H?n=o:It(o)?i=o:r=o}),r||i||n||null}function Re(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ue(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ot=class extends ne{constructor(e=null,n,i){super(vt(n),_t(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Re(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Re(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Nt={provide:S,useExisting:q(()=>oe)},He=Promise.resolve(),oe=(()=>{let e=class e extends S{constructor(i,r,o,d,h,nt){super(),this._changeDetectorRef=h,this.callSetDisabledState=nt,this.control=new Ot,this._registered=!1,this.name="",this.update=new O,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=St(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),wt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Dt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){He.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ee(r);He.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Vt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(u(te,9),u(ut,10),u(dt,10),u(We,10),u(ge,8),u(Qe,8))},e.\u0275dir=D({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[N.None,"disabled","isDisabled"],model:[N.None,"ngModel","model"],options:[N.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[K([Nt]),F,fe]});let t=e;return t})();var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=v({});let t=e;return t})();var tt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Qe,useValue:i.callSetDisabledState??re}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=v({imports:[xt]});let t=e;return t})();function kt(t,e){if(t&1){let n=Ve();_e(0),s(1,"div",10)(2,"div",11)(3,"h5",12),l(4),a()(),s(5,"div",13)(6,"button",14),m("click",function(){let o=de(n).$implicit,d=De();return ce(d.navigateToDetails(o==null?null:o.id))}),l(7,"Details"),a()()(),s(8,"div",3)(9,"p"),l(10),y(11,"duration"),y(12,"budget"),a()(),M(13,"br"),Ce()}if(t&2){let n=e.$implicit;c(4),f(n==null?null:n.title),c(6),Me("Duration: ",_(11,4,n==null?null:n.duration)," Budget: ",_(12,6,n==null?null:n.budget)," Release Date: ",n==null?null:n.release_date," ")}}var se=(()=>{let e=class e{constructor(i,r){this.movieService=i,this.route=r,this.movies=[],this.filteredMovies=[],this.titleFilter="",this.releaseYearFilter=""}ngOnInit(){this.movieService.getMovies().subscribe(i=>{this.movies=i,this.applyFilters()})}loadMovies(){this.movieService.getMovies().subscribe(i=>{this.movies=i})}navigateToDetails(i){this.route.navigate(["/movies",i])}applyFilters(){this.filteredMovies=this.movies.filter(i=>i?.title?.toLowerCase().includes(this.titleFilter.toLowerCase())&&this.filterByYear(i?.release_date))}filterByYear(i){return this.releaseYearFilter||i?!0:new Date(i).getFullYear().toString().includes(this.releaseYearFilter)}};e.\u0275fac=function(r){return new(r||e)(u(A),u(j))},e.\u0275cmp=x({type:e,selectors:[["app-movies"]],inputs:{movie:"movie"},decls:19,vars:3,consts:[[1,"container-fluid","p-4","text-center","justify-content-center"],[1,"row","justify-content-center"],[1,"col-12","justify-content-center","bg-body-tertiary","p-2"],[1,"text-start"],[1,"justify-content-around","align-items-center"],[1,"input-group"],[1,"input-group-text"],["type","text",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"movie-card"],[4,"ngFor","ngForOf"],[1,"row","col-12","justify-content-between","align-items-center"],[1,"col-md-9"],[1,"movie-card-title"],[1,"col-md-3"],[3,"click"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5"),l(5,"Filters"),a()(),M(6,"br"),s(7,"div",4)(8,"div",5)(9,"span",6),l(10,"Title"),a(),s(11,"input",7),X("ngModelChange",function(h){return Z(o.titleFilter,h)||(o.titleFilter=h),h}),m("input",function(){return o.applyFilters()}),a()(),s(12,"div",5)(13,"span",6),l(14,"Release Year"),a(),s(15,"input",7),X("ngModelChange",function(h){return Z(o.releaseYearFilter,h)||(o.releaseYearFilter=h),h}),m("input",function(){return o.applyFilters()}),a()()()()(),s(16,"div",8)(17,"div"),ve(18,kt,14,8,"ng-container",9),a()()()),r&2&&(c(11),Y("ngModel",o.titleFilter),c(4),Y("ngModel",o.releaseYearFilter),c(3),k("ngForOf",o.filteredMovies))},dependencies:[Fe,H,Je,oe,T,G],styles:[".movie-card[_ngcontent-%COMP%]{margin:1%;border:black 1px solid;padding:1%;background-color:#bfb1b1;border-radius:8px}"]});let t=e;return t})();var jt=[{path:"",component:se},{path:"movies",component:se},{path:"movies/:id",component:ke}],it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=v({imports:[Q.forChild(jt),Q]});let t=e;return t})();var Fi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[e]}),e.\u0275inj=v({providers:[A],imports:[we,it,tt,Se]});let t=e;return t})();export{Fi as HPMoviesModule};
