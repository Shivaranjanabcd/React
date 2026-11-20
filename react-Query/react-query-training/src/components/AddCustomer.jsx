import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomer } from "../services/customerService";

function AddCustomer() {

  const queryclient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createCustomer,

    onSuccess: (data) => {
      console.log("Customer created:", data);
      queryclient.infiniteQuery({
        queryKey:["customer"]})

    },

    onError: (error) => {
        console.log("Status:", error.response?.status);
        console.log("Supabase error:", error.response?.data);
        console.log("Request payload:", mutation.variables);
        },

    onSettled: () => {
      console.log("Mutation completed");
    },
  });

  const handleCreate = () => {

    const customerData = {  
        organization_id:"11111111-1111-4111-8111-111111111111",
        first_name: "Emma",
        last_name: "Watson",
        email: "emma.reactquery@example.com",
        city: "Bengaluru",
        status: "ACTIVE",
    };

    mutation.mutate(customerData);
  };

  return (
    <div>
      <h2>Add Customer</h2>

      <button
        onClick={handleCreate}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Saving..." : "Create Customer"}
      </button>

      {mutation.isSuccess && (
        <p>Customer created successfully!</p>
      )}

      {mutation.isError && (
        <p>Error: {mutation.error.message}</p>
      )}
    </div>
  );
}

export default AddCustomer;