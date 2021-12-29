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
       
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this

    }
}
export default ApiFeatures