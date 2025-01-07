import { currencies } from "@/lib/currencies";
import { markCurrentScopeAsDynamic } from "next/dist/server/app-render/dynamic-rendering";
import { z } from "zod";

export const UpdateUserCurrencySchema = z.object({
  currency: z.custom((value) => {
    const found = currencies.some((c) => c.value === value);
    if (!found) {
      throw new Error(`Invalid currency ${value}`);
    }
    return value;
  }),
});
