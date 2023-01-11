{class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }

    get(key){
let index=this.hash(key)
return this.table[index]
    }

    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
            console.log(i,this.table[i]);

            }
        }
    }
}


const table=new HashTable(50)

table.set('name','najumudheen')
table.set('age',14)
table.display()

console.log(table.get('name'));
table.remove('name')
table.display()
}

class HashTable{
    constructor(size){
this.table=new Array(size)
this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let samekeyitem=bucket.find((item)=>item[0]===key)
            if(samekeyitem){
                samekeyitem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let samekeyitem=bucket.find((item)=>item[0]===key)
            if(samekeyitem){
                return samekeyitem[1]
            }
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            const samekeyitem=bucket.find((item)=>item[0]===key)
            if(samekeyitem){
                bucket.splice(bucket.indexOf(samekeyitem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}


const table=new HashTable(50)

table.set('name','najumudheen')
table.set('age',14)
table.display()

console.log(table.get('name'));
table.remove('name')
table.display()
