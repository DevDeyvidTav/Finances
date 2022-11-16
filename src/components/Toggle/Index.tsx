import { Container, ToogleLabel } from "./style";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useAuthValue } from "../../context/AuthContext";


export function Toggle() {
    const [enabled, setEnabled] = useState(false)
    const {setThemeMode, themeMode} = useAuthValue()
    return (
        <div className="hidden md:flex">
            <Container>
            <ToogleLabel>Light</ToogleLabel>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                onClick={() => setThemeMode(!themeMode)}
                className={`${enabled ? 'bg-zinc-700' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
            <ToogleLabel>dark</ToogleLabel>
        </Container>
        </div>
    )
}