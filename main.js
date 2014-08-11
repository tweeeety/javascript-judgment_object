(function(){
/****************
 sample01
****************/
console.log("----sample01");
// 定義側
var SomeThing = function(opt) {
  // ※1 ここでとりあえずオブジェクト({})であることを保障したい
  if( !opt ) opt = {};
  
  if( !opt.name ) opt.name = "noname";
  if( !opt.sex ) opt.sex = 1;
  this.opt = opt;
}

// 呼び出す側
var opt = {
  "name" : "tweeeety",
  "sex"  : 1
};
var s = new SomeThing(opt);


/****************
 sample02
****************/
console.log("----sample02");
var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

console.log(typeof a); // 結果-> object
console.log(typeof b); // 結果-> object
console.log(typeof c); // 結果-> number
console.log(typeof d); // 結果-> string
console.log(typeof e); // 結果-> boolean
console.log(typeof f); // 結果-> undefined
console.log(typeof g); // 結果-> object

/****************
 sample03
****************/
console.log("----sample03");
// 定義側
var SomeThing = function(opt) {
  // ※2 ここでとりあえずオブジェクト({})であることを保障したい
  if( typeof opt != "object") opt = {};
  
  if( !opt.name ) opt.name = "noname";
  if( !opt.sex ) opt.sex = 1;
  this.opt = opt;

}

// 呼び出す側
var opt = {};
var s = new SomeThing(opt);

/****************
 sample04
****************/
console.log("----sample05");
var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

console.log(a instanceof Object); // 結果-> true
console.log(b instanceof Object); // 結果-> true
console.log(c instanceof Object); // 結果-> false
console.log(d instanceof Object); // 結果-> false
console.log(e instanceof Object); // 結果-> false
console.log(f instanceof Object); // 結果-> false
console.log(g instanceof Object); // 結果-> false


/****************
 sample05
****************/
console.log("----sample05");
var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

console.log(a instanceof Array); // 結果-> false
console.log(b instanceof Array); // 結果-> true
console.log(c instanceof Array); // 結果-> false
console.log(d instanceof Array); // 結果-> false
console.log(e instanceof Array); // 結果-> false
console.log(f instanceof Array); // 結果-> false
console.log(g instanceof Array); // 結果-> false

/****************
 sample06
****************/
console.log("----sample06");
var isObject = function(o) {
  return (o instanceof Object && !(o instanceof Array)) ? true : false;
};
var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

console.log(isObject(a)); // 結果-> true
console.log(isObject(b)); // 結果-> false
console.log(isObject(c)); // 結果-> false
console.log(isObject(d)); // 結果-> false
console.log(isObject(e)); // 結果-> false
console.log(isObject(f)); // 結果-> false
console.log(isObject(g)); // 結果-> false


/****************
 sample07
****************/
console.log("----sample07");
// 定義側
var SomeThing = function(opt) {
  // ※1 ここでとりあえずオブジェクト({})であることを保障したい
  if( !(opt instanceof Object && !(opt instanceof Array)) ) opt = {};
  
  if( !opt.name ) opt.name = "noname";
  if( !opt.sex ) opt.sex = 1;
  this.opt = opt;
}

// 呼び出す側
var opt = {
  "name" : "tweeeety",
  "sex"  : 1
};
var s = new SomeThing(opt);

})();


