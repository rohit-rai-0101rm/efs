class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;

    }
    search(){
        const keyword=this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $options:"i",//case insensitive
            }
        }:{

        }
        //console.log(keyword)

        this.query=this.query.find({...keyword})
        return this

    }
    filter(){
        const queryCopy={...this.queryStr}
        //console.log(queryCopy)
        const removeFields=["keyword","page","limit"];//we have to remove these fields from query params
        removeFields.forEach(key=>delete queryCopy[key])
        //console.log(queryCopy)
        this.query=this.query.find(queryCopy)
        return this

    }
}
export default ApiFeatures