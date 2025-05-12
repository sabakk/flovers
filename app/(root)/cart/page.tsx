import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "Flover3",
    paymentStatus: "Paid",
    totalAmount: "₴250.00",
    paymentMethod: "Privatbank",
  },
  {
    invoice: "Flover5",
    paymentStatus: "Pending",
    totalAmount: "₴150.00",
    paymentMethod: "On Delivery",
  },
  {
    invoice: "Flover7",
    paymentStatus: "Unpaid",
    totalAmount: "₴350.00",
    paymentMethod: "Privatbank",
  },
 
]

export default function Cart() {
  return (
    <Table>
      <TableCaption>A list of your ordering flovers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-[100px]">Flovers</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
