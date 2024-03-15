import { ALL_ROLES } from "./constants";

export interface OptionObj {
  label: string;
  value: string;
}

export interface UserObj {
  username: string;
  role: typeof ALL_ROLES.ADMIN | typeof ALL_ROLES.CUSTOMER;
  email: string;
}

export interface QuoteOrderObj {
  quoteId: string;
  salesOrderId: string;
  orderPlacedBy: string;
  quoteDate: string;
  email: string;
  mobileNo: string;
  consignedTo: string;
  paymentTerms: string;
  billTo: string;
  orgId: string;
  status: string;
  items: QuoteOrderItemObj[];
  salesRep: string;
  expiresOn: string;
  termsAndCondition: boolean;
  copyAdminInMail: boolean;
}

export interface QuoteOrderItemObj {
  itemId: string;
  modelNo: string;
  description: string;
  uom: string;
  quantity: string;
  currency: string;
  listUnitPrice: string;
  regularUnitPrice: string;
  customerUnitPrice: string;
  additionalDiscount: string;
  promotionalDiscount: string;
  totalTax: string;
  shippingCharges: string;
  totalPrice: string;
  netTotal: string;
}

export interface QuoteOrderItemsForm {
  items: QuoteOrderItemObj[];
}

export interface SalesOrderObj {
  orderId: string;
  quoteId: string;
  purchaseId: string;
  orderPlacedBy: AddressType;
  orderDate: string;
  email: string;
  mobileNo: string;
  consignedTo: AddressType;
  status: string;
  orgId: string;
  companyContact: string;
  quoteStatus: string;
  paymentTerms: string;
  salesNoteNo: string;
  billTo: string;
  items: SalesOrderItemObj[];
}

export interface SalesOrderItemObj {
  itemId: string;
  product: string;
  modelNo: string;
  description: string;
  uom: string;
  quantity: string;
  currency: string;
  quantityUnitPrice: string;
  totalPrice: string;
  remarks: string;
}

export interface SalesOrderItemsForm {
  paymentTerms: string;
  items: SalesOrderItemObj[];
}

interface AddressType {
  organisationNumber: string;
  name: string;
  address: string;
}

export interface PurchaseOrderObj {
  orderId: string;
  salesId: string;
  accountee: AddressType;
  orderDate: string;
  email: string;
  primaryContact: string;
  consignee: AddressType;
  finalBuyer: AddressType;
  status: string;
  tradeType: string;
  orderType: string;
  deliveryDate: string;
  orgId: string;
  paymentTerms: string;
  tradeTerm: string;
  items: PurchaseOrderItemObj[];
}

export interface PurchaseOrderItemObj {
  itemId: string;
  product: string;
  modelNo: string;
  description: string;
  uom: string;
  quantity: string;
  currency: string;
  quantityUnitPrice: string;
  purchaseUnitPrice: string;
  totalAmount: string;
}

export interface PurchaseOrderItemsForm {
  paymentTerms: string;
  items: PurchaseOrderItemObj[];
}
