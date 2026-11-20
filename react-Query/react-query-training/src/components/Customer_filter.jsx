import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetch_filter } from "../services/fetchfilter_customer";
import { customerkeys } from "../queries/customerKeys";

function Customer_filter() {
  const [status, setStatus] = useState("ALL");

  const {
    data,
    error,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: customerkeys.list({ status }),
    queryFn: fetch_filter,
  });

  if (isLoading) {
    return <h3>Loading customers...</h3>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      <h2>Customer Management</h2>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="ALL">All Customers</option>
        <option value="ACTIVE">Active Customers</option>
        <option value="INACTIVE">Inactive Customers</option>
      </select>

      {isFetching && <p>Refreshing...</p>}

      {data?.length === 0 && <p>No customers found.</p>}

      {data?.map((customer) => (
        <div key={customer.id}>
          <p>
            {customer.first_name} {customer.last_name}
          </p>
          <p>{customer.email}</p>
          <p>{customer.city}</p>
          <p>Status: {customer.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Customer_filter;


// // 1. Static query key
// queryKey: ["customers"]


// // 2. Dynamic query key
// queryKey: ["customers", customerId]


// // 3. Query key arrays and objects
// queryKey: ["customers", { status: "ACTIVE", city: "Bengaluru" }]


// // 4. Query key hashing
// queryKey: ["customers", { status: "ACTIVE", city: "Bengaluru" }]


// // 5. Cache identity and sharing
// // Same key = same cache entry
// queryKey: ["customers"]


// // 6. Cache isolation
// // Different keys = separate cache entries
// queryKey: ["customers"]
// queryKey: ["policies"]


// // 7. Cache collisions and incorrect keys
// // Incorrect: different datasets using the same key
// queryKey: ["customers"]
// queryKey: ["customers"]


// // 8. Query key hierarchy / factory
// export const customerKeys = {
//   all: ["customers"],

//   lists: () => [...customerKeys.all, "list"],

//   list: (filters) => [...customerKeys.lists(), filters],

//   details: () => [...customerKeys.all, "detail"],

//   detail: (id) => [...customerKeys.details(), id],
// };


// // 9. Cache reuse
// // Reusing the same key in different components
// useQuery({
//   queryKey: ["customers"],
//   queryFn: fetchCustomers,
// });


// // 10. Filters represented in query keys
// useQuery({
//   queryKey: ["customers", { status: "ACTIVE" }],
//   queryFn: fetchActiveCustomers,
// });