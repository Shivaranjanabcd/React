import React from 'react'
import {useQuery} from "@tanstack/react-query"
import {fetchCustomer} from "../services/customerService"

function Customers() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    isRefetchError,
    refetch,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomer,
  });

  // 1. Initial loading
  if (isLoading) {
    return <p>Loading customers...</p>;
  }

  // 2. Initial API error
  if (isError && !data) {
    const status = error.response?.status;

    return (
      <div>
        <h3>Unable to load customers</h3>
        <p>
          {status === 401
            ? "Please log in again."
            : status === 403
            ? "Access denied."
            : error.message}
        </p>

        <button onClick={() => refetch()}>
          Try Again
        </button>
      </div>
    );
  }

  // 3. Empty state
  if (!data || data.length === 0) {
    return (
      <div>
        <h3>No customers found</h3>
        <p>Start by adding your first customer.</p>
      </div>
    );
  }

  // 4. Success state
  return (
    <div>
      <h2>Customer List</h2>

      {isFetching && <p>Refreshing customers...</p>}

      {isRefetchError && (
        <p>
          Could not refresh customer data.
          Displaying previously loaded data.
        </p>
      )}

      <button onClick={() => refetch()}>
        Refresh
      </button>

      {data.map((customer) => (
        <div key={customer.id}>
          <p>
            {customer.first_name} {customer.last_name}
          </p>
          <p>{customer.email}</p>
          <p>{customer.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Customers;