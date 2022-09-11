export interface IDbTableDataType{
    _id: number;
}

export interface IDbTable<TSchema extends object, TUpdateSchema extends  object>{
    data: (TSchema & IDbTableDataType)[];
    save: () => void;
    add: (dataObject: TSchema) => TSchema & IDbTableDataType;
    update: (_id: number, to: TUpdateSchema) => TSchema & IDbTableDataType | null;
    find: (props: TUpdateSchema | TSchema | IDbTableDataType)=> (TSchema & IDbTableDataType)[];
    findOne: (props: TUpdateSchema | TSchema | IDbTableDataType) => (TSchema & IDbTableDataType )| null;
    findOneById : (_id: number) =>  (TSchema & IDbTableDataType) | null ;
    toJson: (data: TSchema[]) => string;
    toJS: (jsonString: string) => (TSchema & IDbTableDataType)[];
}

