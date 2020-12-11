// we could use this client from three different places at least
// 1) Monitoring tool, 2) DevTools Extension and 3) DevTools Console

import { PerfEvent } from "./event";

export interface PerfClient {
  changeMode(mode: string): Promise<void>;
  getEvents(): Promise<PerfEvent[]>;
}
