import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    userName?: string | null;
    email?: string | null;
    password?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userName?: string | null;
    email?: string | null;
    password?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    userName?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userName?: string | null;
    email?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userName?: string | null;
    email?: string | null;
    password?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userName?: string | null;
    email?: string | null;
    password?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=userSchema.d.ts.map