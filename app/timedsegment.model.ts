import {Deserializable} from "./deserializable.model";

export class TimedSegment implements Deserializable {
  user: string;
  topic: string;
  quantity: number;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
  
}