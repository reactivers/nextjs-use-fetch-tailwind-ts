import { FetchProvider } from "@reactivers/use-fetch";
import { FC, PropsWithChildren, useCallback } from "react";
import { REST_API } from "utils/constants";

const AppFetchProvider: FC<PropsWithChildren> = ({ children }) => {

    const onError = useCallback((e: any) => {
        if (e.success === false) {
            alert(e.message);
        }
    }, [])

    return (
        <FetchProvider url={REST_API} onError={onError}>
            {children}
        </FetchProvider>
    )
}

export default AppFetchProvider;