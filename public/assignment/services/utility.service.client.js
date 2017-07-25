function _generateId(){
    return Math.floor(Math.random()*1000);
}

function createObjet(object,list){
    object["_id"]=_generateId();
    return list.push(object);
}


function findOjectByObjectId(objectId,lst){
    for(var idx in lst){
        if(lst[idx]._id===objectId){
            return lst[idx];
        }
    }
    return null;
}


function updateObject(objectId,object,lst){
    for(var idx in lst){
        if(lst[idx]._id===objectId)
        {
            lst[idx]=object;
            return 1;
        }
    }
    return null;
}

function deleteObject(objectId,lst){
    var id;
    for(var idx in lst){
        if(lst[idx]._id===objectId)
        {
            id=idx;
            break;

        }
    }
    if(id) {
        return lst.splice(id, 1);
    }
    return null;
}
