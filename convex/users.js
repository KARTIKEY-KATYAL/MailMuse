import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string()
    },
    handler:async(ctx,args)=>{
        // If User Already Exist
        const user = await ctx.db.query('users').filter((q)=>q.eq(q.field('email'),args.email)).collect()

        // If Not Then Insert new User

        if (user?.length == 0){
            const result = await ctx.db.insert('users',{
                name:args.name,
                email:args.picture,
                picture:args.picture,
                credits:3
            })
                console.log("user details added in db");
                
            return result
        }

        return user[0]
    }
})