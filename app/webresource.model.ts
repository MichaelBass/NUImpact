import {Deserializable} from "./deserializable.model";

export class WebResource implements Deserializable {
  user: string;
  site: string;
  type: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
  
}