import { z } from "zod";
import { fitbitCollectionTypes } from "./constants";

export const fitbitWebhookNotificationSchema = z.array(
  z.object({
    collectionType: z.enum(fitbitCollectionTypes),
    date: z.string(),
    ownerId: z.string(),
    ownerType: z.string(),
    subscriptionId: z.string(),
  })
);

export type FitbitWebhook = z.infer<typeof fitbitWebhookNotificationSchema>;