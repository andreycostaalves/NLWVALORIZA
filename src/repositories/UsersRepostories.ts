import {EntityRepository, Repository} from "typeorm";
import {User} from "../entities/User"

@EntityRepository(User)
class UsersRepostories extends Repository<User>{

    
}

export{UsersRepostories};