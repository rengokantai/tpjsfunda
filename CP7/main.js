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

(function(){
    var pubsub =(function(){
        var subscribers = {};
        function subscribe(e,cb){
            if(!subscribers[e]){
                var subscribeArr = [cb];
                subscribers[e]=subscribeArr;
            }else{
                subscribeArr.push(cb);
            }

        }

        function publish(e){
            if(subscribers[e]){
                subscribers[e].forEach(function(cb){
                    cb();
                });
            }
        }
        return {
            pub:publish,
            sub:subscribe
        };
    })();
    pubsub.sub('some',function(){
        console.log('some');
    })
    pubsub.pub('some');
})();

