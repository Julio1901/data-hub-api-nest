import { Module } from "@nestjs/common";
import { UserMock } from "./users.mock";
import { LoginController } from "./login.controller";

@Module({
    controllers: [LoginController],
    providers: [UserMock]
})


export class LoginModule {

}