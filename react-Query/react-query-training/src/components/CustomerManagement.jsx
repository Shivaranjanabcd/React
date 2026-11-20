import { useState } from "react";

import {
  useQuery,
  keepPreviousData,
} from "@tanstack/react-query";

import { fetchCustomersWithFilters } from "../services/customerService";

function CustomerManagement() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const { data, isLoading, isError, error, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: [
        "customers",
        "list",
        {
          page,
          pageSize,
          search,
          status,
          sortBy,
          sortOrder,
        },
      ],

      queryFn: () =>
        fetchCustomersWithFilters({
          page,
          pageSize,
          search,
          status,
          sortBy,
          sortOrder,
        }),

      placeholderData: keepPreviousData,
    });

  if (isLoading) return <p>Loading customers...</p>;

  if (isError && !data) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Customer Management</h2>

      <input
        value={search}
        placeholder="Search customer..."
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          setPage(1);
        }}
      >
        <option value="ALL">All Statuses</option>
        <option value="ACTIVE">Active</option>
        <option value="INACTIVE">Inactive</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setPage(1);
        }}
      >
        <option value="created_at">Created Date</option>
        <option value="first_name">First Name</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          setPage(1);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {isFetching && <p>Updating results...</p>}

      {isPlaceholderData && (
        <p>Showing previous page while loading...</p>
      )}

      {!data?.length ? (
        <p>No customers found.</p>
      ) : (
        data.map((customer) => (
          <div key={customer.id}>
            <p>
              {customer.first_name} {customer.last_name}
            </p>
            <p>{customer.email}</p>
            <p>{customer.status}</p>
            <hr />
          </div>
        ))
      )}

      <button
        disabled={page === 1}
        onClick={() => setPage((old) => old - 1)}
      >
        Previous
      </button>

      <span> Page {page} </span>

      <button
        disabled={!data || data.length < pageSize || isPlaceholderData}
        onClick={() => setPage((old) => old + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default CustomerManagement;