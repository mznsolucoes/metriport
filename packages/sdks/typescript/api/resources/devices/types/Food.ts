/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

export interface Food {
    name?: string;
    brand?: string;
    amount?: number;
    unit?: string;
    nutritionFacts?: Metriport.devices.NutritionFacts;
}