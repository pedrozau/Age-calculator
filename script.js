
const app = new Vue({
    el:'#app',
    data:{
        firstMonth:'',
        segMonth:'',
        firstDay:'',
        segDay:'',
        firstYear:'',
        segYear:'',
        age:'',
        month:'',
        day:''


    },methods:{
         cal:function(){
             
            this.age = this.segYear - this.firstYear
            this.month = this.fullMonth2 - this.fullMonth
            this.day = this.segDay - this.firstDay
         },
         reset:function(){
             this.firstMonth = ''
             this.firstDay = ''
             this.firstYear = ''
             this.segMonth = ''
             this.segDay = ''
             this.segYear = ''
         }
    },
    computed:{
        fullMonth:function(){
             
             switch(this.firstMonth){
               case '0':
                     return 1
                break;
                case '1':
                    return 2
                break;
                case '2':
                    return 3
                break;
                case '3':
                    return 4
                break;
                case '4':
                    return 5
                break;
                case '5':
                    return 6
                break;
                case '6':
                    return 7
                break;
                case '7':
                    return 8
                break;
                case '8':
                    return 9
                break;
                case '9':
                    return 10
                break;
                case '10':
                    return 11
                break;
                case '11':
                    return 12
                break;

             }
             
        },
        fullMonth2:function(){
            switch(this.segMonth){
                case '0':
                      return 1
                 break;
                 case '1':
                     return 2
                 break;
                 case '2':
                     return 3
                 break;
                 case '3':
                     return 4
                 break;
                 case '4':
                     return 5
                 break;
                 case '5':
                     return 6
                 break;
                 case '6':
                     return 7
                 break;
                 case '7':
                     return 8
                 break;
                 case '8':
                     return 9
                 break;
                 case '9':
                     return 10
                 break;
                 case '10':
                     return 11
                 break;
                 case '11':
                     return 12
                 break;
 
              }
        }
    }
})