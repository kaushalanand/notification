const userDefinition = require('../models/userDefinition');

function addUser (req,res){
    let { name, address, contactType, role } = req.body;
    let userObj = {name, address, contactType, role};

    userDefinition.create(userObj, (err, _result) => {
        if(err){
            res.status(400).json({"message" : "Err while creating user !",err});
        }else{
            res.status(200).json({"message" : "Sucessfully created user"});
        }
    });
}

function listUser(req,res){
    userDefinition.get((err, _result) => {
        if(err){
            res.status(400).json({"message" : "Err while fetching user list !",err});
        }else{
            res.status(200).json({_result});
        }
    });
}

function getUser(req,res){
    let userId = req.params.userId;
    userDefinition.get({"_id" : userId},(err, _result) => {
        if(err){
            res.status(400).json({"message" : "Err while fetching user !",err});
        }else{
            res.status(200).json({_result});
        }
    });
}

function updateUser(req,res){
    let userId = req.params.userId;
    let {name, address, contactType, role} = req.body;
    let setQuery = {};

    if(name){
        setQuery["name"] = name;
    }

    if(address){
        setQuery["address"] = address;
    }

    if(contactType){
        setQuery["contactType"] = contactType;
    }

    if(role){
        setQuery["role"] = role;
    }

    userDefinition.put({"_id" : userId}, {$set : setQuery},(err, _result) => {
        if(err){
            res.status(400).json({"message" : "Err while updaing user !",err});
        }else{
            res.status(200).json({"message" : "Sucessfully updated user"});
        }
    });
}

function deleteUser(req,res){
    let userId = req.params.userId
    userDefinition.remove({"_id" : userId},(err, _result) => {
        if(err){
            res.status(400).json({"message" : "Err removing user !",err});
        }else{
            res.status(200).json({"message" : "Sucessfully removed user"});
        }
    });
}

module.exports = {
    addUser : addUser,
    listUser : listUser,
    getUser : getUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}