import { PerfClient } from "./client";
import { PerfCollection } from "./collection";
import { PerfEvent } from "./event";

export class DefaultPerfClient implements PerfClient {
    constructor(private collection: PerfCollection) {

    }

    public changeMode(mode: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public getEvents(): Promise<PerfEvent[]> {
        return Promise.resolve(this.collection.getEvents());
    }
}
