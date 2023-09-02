import { Controller, Get } from "@nestjs/common";
import { UserMock } from "./users.mock";

@Controller('/login')
export class LoginController{

    constructor (private usersMock: UserMock) {

    }

    @Get()
    async getAllUsers(){
        return this.usersMock.getAllUsers()
    }

}