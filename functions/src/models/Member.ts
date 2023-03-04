import { ObjectId } from "mongodb";

export default interface Member {
  _id?: ObjectId;
  name: string;
}
