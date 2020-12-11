import { Glue42Core } from "../../glue";
import { PerfManager } from "./manager";

export class PerfAgmFacade {
    constructor(private perfManager: PerfManager) {
    }

    public registerMethods(interop: Glue42Core.AGM.API): void {
        interop.register("Tick42.Monitoring.GetEvents", () => {
            return this.perfManager.defaultClient.getEvents();
        });
    }
}
