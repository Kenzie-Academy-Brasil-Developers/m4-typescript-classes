interface IUser{
    id: number;
    name: string;
    email: string;
    module?: IModule;
}

interface IModule{
    name: string;
    skills: string[];
}

export const user: IUser = { id: 1, name: "Alex", email: "alex@kenzie.com.br"};