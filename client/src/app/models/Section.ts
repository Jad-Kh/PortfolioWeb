import { Field } from "./Field";

export interface Section {
    id: number,
    title: string,
    information: Array<Field>,
    userId: number,
}