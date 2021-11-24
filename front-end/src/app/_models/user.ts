export interface User {
    _id: string;
    Email: string;
    Nom: string;
    Prenom: string;
    Pays: string;
    Telephone: number;
    Password: string;
    isAdmin: boolean;
}
