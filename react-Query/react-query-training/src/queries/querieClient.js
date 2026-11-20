import {QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: 60*1000, //how long fetched data is considered fresh
            gcTime: 5*60*1000, //how long inactive cached data is retained.
            retry:1, //how many times a failed query is retried.
            refetchOnWindowFocus: false, //whether queries refetch when the browser window gets focus.
        }
    }
});

export default queryClient;