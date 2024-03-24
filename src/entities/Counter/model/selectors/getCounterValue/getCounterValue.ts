import { buildSelector } from '@/shared/lib/store/buildSelector';
import { StateSchema } from '@/app/providers/StoreProvider';

export const [useCounterValue, getCounterValue] = buildSelector((store: StateSchema) => store.counter.value);
