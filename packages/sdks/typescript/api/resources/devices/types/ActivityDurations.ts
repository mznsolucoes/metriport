/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

export interface ActivityDurations {
    activeSeconds?: number;
    /** Also referred to as metabolic-equivalent minutes */
    intensity?: Metriport.devices.Duration;
    /** Also referred to as stress */
    strain?: Metriport.devices.Duration;
}