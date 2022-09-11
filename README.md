# Simple TypeScript DB
## Usage

```typescript
import { DbTable } from "./db";

interface IUser{
    email: string;
    name: string;
    surname: string;
    password: string;
    age: number;
}

// define which fields can be changed
// all fields must be optional
interface IUserUpdateFields{
    name?: string;
    surname?: string;
    password?: string;
    age?: number;    
}
const usersTablePath = './users.json'; // file path to the table's json file
const UsersTable = new DbTable<IUser,IUserUpdateFields>(usersTablePath)
```
You can add data:
```typescript
const user = UsersTable.add({ 
    email: 'example@gmail.com',
    name: 'example',
    surname: 'example',
    password: 'some password',
    age: 20,
});
// You should save to the user's file after changes
UsersTable.save(); // async function
```
Or update:
```typescript
const updatedUser =  UsersTable.update(user._id, { name: 'example2' });
// after update also should save
UsersTable.save();
```
You can also find users:

```typescript
import {IDbTableDataType} from "./db.types";
// returns array of the matched elems
const users: (IUser & IDbTableDataType)[] = UsersTable.find({ name: 'example' });
```
Find one user:
```typescript
// returns first matched elem
const user: IUser = UsersTable.findOne({ name: 'example'  });
```
Find one user by id:
```typescript
const _id = 1;
const user: IUser = UsersTable.findOneById(_id);
```
You also can access to all the elems via
```typescript
const allUsers = UsersTable.data;
```


