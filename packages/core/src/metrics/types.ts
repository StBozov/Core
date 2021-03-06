import { Glue42Core } from "../../glue";
import { Logger } from "../logger/logger";
import Connection from "../connection/connection";

export interface MetricsSettings {
    connection?: Connection;
    logger: Logger;
    /** If true will auto create click stream metrics in root system */
    clickStream?: boolean;
    settings?: object;
    canUpdateMetric: () => boolean;
    system?: string;
    service?: string;
    instance?: string;
    disableAutoAppSystem: boolean;
    pagePerformanceMetrics?: Glue42Core.PagePerformanceMetricsConfig;
}

export interface Protocol {
    init(repo: Glue42Core.Metrics.Repository): void;
    createSystem(system: Glue42Core.Metrics.System): Promise<void>;
    updateSystem(metric: Glue42Core.Metrics.System, state: Glue42Core.Metrics.State): Promise<void>;
    createMetric(metric: Glue42Core.Metrics.Metric): Promise<void>;
    updateMetric(metric: Glue42Core.Metrics.Metric): Promise<void>;
}
