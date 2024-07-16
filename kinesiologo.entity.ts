import crypto from 'node:crypto'
export class Kinesiologo{
    constructor(
        public nombre:string, 
        public especialidad:string,
        public apellido:string, 
        public dni:number, 
        public matricula:number, 
        public mail:string, 
        public telefono:number,
        public password: string,
        public id = crypto.randomUUID(),
    )   {}
}
