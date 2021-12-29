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
    pagination(resultPerPage){
        const currentPage=Number(this.queryStr.page)||1;
        const skip=resultPerPage*(currentPage-1)// suppose u have 50 products and want to show 10/page so total pages=5
        //now on page 1 no products will be skipped 0n page 2 first 10 will pe skipped
        //2 page starts with 11 th
        //3 page starts with 21th
       this.query= this.query.limit(resultPerPage).skip(skip)
       return this
    }
}
export default ApiFeatures