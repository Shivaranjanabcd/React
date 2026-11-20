export const customerkeys = {

    all:["customer"], // queryKey: customerKeys.all--->["customers"]

    lists:()=>[...customerkeys.all,'list'], // queryKey: customerKeys.lists()--->["customers", "list"]

    list:(filter)=>[...customerkeys.lists(),filter], // queryKey: customerKeys.list({ status: "ACTIVE" })----> ["customers", "list", { status: "ACTIVE" }]

    details:()=>[...customerkeys.all,"detail"],

    detail:(id)=>[...customerkeys.details(),id], // queryKey: customerKeys.detail(10)---> ["customers", "detail", 10]
}