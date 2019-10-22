import {MongoClient} from 'mongodb';

export default class TodoManager {

    static async read() {
        try {
            const url = 'mongodb://localhost:27017';
            const client = await MongoClient.connect(url); // async
            const db = client.db('cdac');

            const docs = await db.collection('task').find().toArray();
            client.close();

            return docs;
        } catch(err) {
            return {opr : false};
        }
    }

    static async create(inputObj: any) {
        try {
            const url = 'mongodb://localhost:27017';
            const client = await MongoClient.connect(url); // async
            const db = client.db('cdac');

            await db.collection('task').insert(inputObj);
            client.close();
            return {opr : true};
        } catch(err) {
            return {opr : false};
        }
    }


    static async update(updateObj: any) {
        try {
            const url = 'mongodb://localhost:27017';
            const client = await MongoClient.connect(url); // async
            const db = client.db('cdac');

            await db.collection('task').update({todo : 'PANKAJ'}, {$set: {todo : updateObj.todo}});
            client.close();
            return {opr : true};
        } catch(err) {
            return {opr : false};
        }
    }



    static async delete(updateObj: any) {
        try {
            const url = 'mongodb://localhost:27017';
            const client = await MongoClient.connect(url); // async
            const db = client.db('cdac');

            await db.collection('task').deleteOne({todo : updateObj.todo});
            client.close();
            return {opr : true};
        } catch(err) {
            return {opr : false};
        }
    }



}