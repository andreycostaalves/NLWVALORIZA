import { UsersRepostories } from "../repositories/UsersRepostories";


interface IuserRequest{
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService{

    async execute({name, email, admin} : IuserRequest) {
        const usersRepository = new UsersRepostories();

        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }


        const user = usersRepository.create({
            name, email, admin
        });

        await usersRepository.save(user);

        return user;

    }


    

}

export {CreateUserService}