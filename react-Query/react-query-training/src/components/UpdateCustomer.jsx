import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCustomer } from "../services/customerService";

function UpdateCustomer() {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, updatedData }) =>
      updateCustomer(id, updatedData),

    onMutate: async ({ id, updatedData }) => {
      await queryClient.cancelQueries({
        queryKey: ["customers"],
      });

      const previousCustomers = queryClient.getQueryData([
        "customers",
      ]);

      queryClient.setQueryData(["customers"], (oldCustomers) =>
        oldCustomers?.map((customer) =>
          customer.id === id
            ? { ...customer, ...updatedData }
            : customer
        )
      );

      return { previousCustomers };
    },

    onError: (error, variables, context) => {
      if (context?.previousCustomers !== undefined) {
        queryClient.setQueryData(
          ["customers"],
          context.previousCustomers
        );
      }

      console.error("Update failed:", error.message);
    },

    onSuccess: (data) => {
      console.log("Customer updated:", data);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
  });

  const handleUpdate = () => {
    updateMutation.mutate({
      id: "6639629c-6ca3-4c92-915d-e8b6fc4be90c",
      updatedData: {
        city: "Mumbai",
      },
    });
  };

  return (
    <div>
      <h2>Update Customer</h2>

      <button
        onClick={handleUpdate}
        disabled={updateMutation.isPending}
      >
        {updateMutation.isPending ? "Updating..." : "Update Customer"}
      </button>

      {updateMutation.isError && (
        <p>Error: {updateMutation.error.message}</p>
      )}

      {updateMutation.isSuccess && (
        <p>Customer updated successfully!</p>
      )}
    </div>
  );
}

export default UpdateCustomer;