/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Metriport from "../../../../api";
import * as core from "../../../../core";

export const Body: core.serialization.ObjectSchema<serializers.devices.Body.Raw, Metriport.devices.Body> =
    core.serialization
        .object({
            bodyFatPct: core.serialization.property("body_fat_pct", core.serialization.number().optional()),
            heightCm: core.serialization.property("height_cm", core.serialization.number().optional()),
            weightKg: core.serialization.property("weight_kg", core.serialization.number().optional()),
            boneMassKg: core.serialization.property("bone_mass_kg", core.serialization.number().optional()),
            muscleMassKg: core.serialization.property("muscle_mass_kg", core.serialization.number().optional()),
            leanMassKg: core.serialization.property("lean_mass_kg", core.serialization.number().optional()),
            maxPossibleHeartRateBpm: core.serialization.property(
                "max_possible_heart_rate_bpm",
                core.serialization.number().optional()
            ),
            weightSamplesKg: core.serialization.property(
                "weight_samples_kg",
                core.serialization
                    .list(core.serialization.lazyObject(async () => (await import("../../..")).devices.Sample))
                    .optional()
            ),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).devices.MetriportData));

export declare namespace Body {
    interface Raw extends serializers.devices.MetriportData.Raw {
        body_fat_pct?: number | null;
        height_cm?: number | null;
        weight_kg?: number | null;
        bone_mass_kg?: number | null;
        muscle_mass_kg?: number | null;
        lean_mass_kg?: number | null;
        max_possible_heart_rate_bpm?: number | null;
        weight_samples_kg?: serializers.devices.Sample.Raw[] | null;
    }
}