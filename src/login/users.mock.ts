

export class UserMock{

    userName?: string
    password?: string

    constructor(userName?: string, password?: string) {
        this.userName = userName
        this.password = password
    }

    getAllUsers() : UserMock[] {
        const usersMock: UserMock[] = [
            new UserMock("julio@gmail.com", "Raiane123"),
            new UserMock("raiane@gmail.com", "Senha123")
        ]
        return usersMock
    }

}

