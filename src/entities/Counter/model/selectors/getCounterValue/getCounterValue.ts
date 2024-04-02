import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useCounterValue, getCounterValue] = buildSelector((store: StateSchema) => store.counter.value);
