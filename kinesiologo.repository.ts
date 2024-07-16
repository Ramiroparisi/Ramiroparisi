import { Repository } from "../shared/repository.js";
import { Kinesiologo } from "./kinesiologo.entity.js";

const kinesiologos = [
    new Kinesiologo(
        'Enzo',
        'deporte',
        'Manavella',
        45343253,
        51364,
        'emanavella234@gmail.com',
        54345275353,
        'enzoM121srqq',
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
]

export class KinesiologoRepository implements Repository <Kinesiologo>{
    public findAll(): Kinesiologo[] | undefined {
        return kinesiologos
    }
    public findOne(item: { id: string; }): Kinesiologo | undefined {
        return kinesiologos.find((kinesiologo) => kinesiologo.id=== item.id)
    }
    public add(item: Kinesiologo): Kinesiologo | undefined {
        kinesiologos.push(item)
        return item
    }
    public update(item: Kinesiologo): Kinesiologo | undefined {
        const kinesiologoIdx = kinesiologos.findIndex((kinesiologo)=>kinesiologo.id === item.id)
        
        if(kinesiologoIdx !== -1){
         kinesiologos[kinesiologoIdx]= {...kinesiologos[kinesiologoIdx],...item}
        }
        return kinesiologos[kinesiologoIdx]     
    }
    public delete(item: { id: string; }): Kinesiologo | undefined {
        const kinesiologoIdx = kinesiologos.findIndex((kinesiologo)=>kinesiologo.id === item.id)

        if(kinesiologoIdx !==-1){
            const deletedKinesiologos = kinesiologos[kinesiologoIdx]
            kinesiologos.splice(kinesiologoIdx,1)
            return deletedKinesiologos
        }
    }
}