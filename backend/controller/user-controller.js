import { request, response } from "express";
import User from '../model/user-schema.js';

export const getUsers = async (request, response) => {
    try{
      let user =  await User.find();
        response.json(User);
     }catch(error){
            response.json({message: error,message});
     }
    response.status(200).json("hiii from road too code");
    // Step -1 // Test API
    // response.send('Road to code');
    // try{
    //     // finding something inside a model is time taking, so we need to add await
    //     const users = await User.find();
    //     response.status(200).json(users);
    // }catch( error ){
    //     response.status(404).json({ message: error.message })
    // }
}

export const addUser = async(request,response)=>{
    const user = request.body;
    const newUser = new User(user);


try{
   await newUser.save();
   response.json(newUser);
}catch(error){
       response.json({message: error,message});
}
}