export interface PerfEvent {
    id: number;
    date: Date;
    status: PerfStatus;
    domain: PerfDomain;
    ipc: boolean;
    metadata?: string;
    error?: string;
    size?: number;
    elapsed?: number;
}

export enum PerfStatus {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
export enum PerfDomain {
    Interop = "interop",
    Metrics = "metrics",
    Contexts = "contexts"
}
