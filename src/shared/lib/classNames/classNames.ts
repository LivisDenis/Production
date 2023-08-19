
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]) {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(' ')
}
