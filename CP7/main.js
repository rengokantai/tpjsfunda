/**
 * Created by Hernan Y.Ke on 2015/11/18.
 */
(function(){
    var utils = (function(){
        function trim(str){
            return str.toLowerCase().replace(/\.{1}[a-z]+/,'');
        }
        return{
            trim:trim
        }
    })();
    var name ="main.js";
    console.log(utils.trim(name));
})();

