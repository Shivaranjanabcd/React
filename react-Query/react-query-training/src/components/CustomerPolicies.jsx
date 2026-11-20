import { useQuery } from "@tanstack/react-query";

import { fetchCustomerById, fetchPoliciesByOrganization } from "../services/customerService";

function CustomerPolicies({ customerId }) {

  // Query 1: Fetch customer
  const {
    data: customer,
    isLoading: customerLoading,
    isError: customerError,
  } = useQuery({
    queryKey: ["customers", "detail", customerId],

    queryFn: () => fetchCustomerById(customerId),

    enabled: !!customerId,
  });

  // Query 2: Fetch organization policies
  const {
    data: policies,
    isLoading: policiesLoading,
  } = useQuery({
    queryKey: [
      "policies",
      "organization",
      customer?.organization_id,
    ],

    queryFn: () =>
      fetchPoliciesByOrganization(customer.organization_id),

    enabled: !!customer?.organization_id,
  });

  if (customerLoading) {
    return <p>Loading customer...</p>;
  }

  if (customerError) {
    return <p>Unable to load customer.</p>;
  }

  if (!customer) {
    return <p>Customer not found.</p>;
  }

  if (policiesLoading) {
    return <p>Loading organization policies...</p>;
  }

  return (
    <div>
      <h2>
        {customer.first_name} {customer.last_name}
      </h2>

      <h3>Organization Policies</h3>

      {policies?.length ? (
        policies.map((policy) => (
          <div key={policy.id}>
            <p>{policy.policy_number}</p>
          </div>
        ))
      ) : (
        <p>No policies found.</p>
      )}
    </div>
  );
}

export default CustomerPolicies;