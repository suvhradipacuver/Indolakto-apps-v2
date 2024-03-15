import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import purchaseOrders from "../../data/purchaseOrders.json";
import {
  PurchaseOrderItemObj,
  PurchaseOrderItemsForm,
  PurchaseOrderObj,
} from "../../types/interfaces";
import * as Yup from "yup";
import Input from "../../components/FormComponents/Input";
import Button from "../../components/Buttons/Button";
import SubmitBtn from "../../components/FormComponents/SubmitBtn";
import PurchaseOrderDetailForm from "../../components/PurchaseOrderDetailForm copy/PurchaseOrderDetailForm";
import { FormattedMessage, useIntl } from "react-intl";
import { useReactToPrint } from "react-to-print";
import PrintPurchaseOrder from "../../components/PrintComponents/PrintPurchaseOrder";
import useToast from "../../hooks/useToast";

const PurchaseOrderDetail = () => {
  const { orderId } = useParams();

  const intl = useIntl();

  const [order, setOrder] = useState<PurchaseOrderObj | null>(null);

  const { showSuccess } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const schema = Yup.object({
    paymentTerms: Yup.string(),
    items: Yup.array<PurchaseOrderItemObj>().of(
      Yup.object({
        itemId: Yup.string().required(),
        product: Yup.string().required(),
        modelNo: Yup.string(),
        description: Yup.string().required(),
        uom: Yup.string().required(),
        quantity: Yup.string(),
        currency: Yup.string(),
        quantityUnitPrice: Yup.string(),
        purchaseUnitPrice: Yup.string(),
        totalAmount: Yup.string(),
      })
    ),
  });

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors, isDirty },
  } = useForm<PurchaseOrderItemsForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      paymentTerms: "",
      items: [],
    },
  });

  const onSubmit = useCallback((data: PurchaseOrderItemsForm) => {
    showSuccess(
      intl.formatMessage({
        id: "orderSaved",
        defaultMessage: "Order Saved",
      })
    );
  }, []);

  useEffect(() => {
    const order = purchaseOrders.filter((order) => order.orderId === orderId);

    if (order) {
      setOrder(order[0]);
    }
  }, [orderId]);

  useEffect(() => {
    if (order) {
      reset(order);
    }
  }, [order, reset]);

  return (
    <div className="sales-order-detail page">
      <TopBar
        goBack
        title={`${intl.formatMessage({
          id: "purchaseOrderId",
          defaultMessage: "Purchase Order #",
        })}: ${orderId}`}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="details flex items-start gap-x-4 text-sm mb-12 px-8">
          <div className="left flex-1 flex flex-col gap-y-2">
            <div className="accountee">
              <span className="font-bold">
                {intl.formatMessage({
                  id: "accountee",
                  defaultMessage: "Accountee",
                })}
                :{" "}
              </span>
              <span>
                {order?.accountee.name}({order?.accountee.organisationNumber}){" "}
                <br />
                {order?.accountee.address}
              </span>
            </div>
            <div className="consignee">
              <span className="font-bold">
                <FormattedMessage id="consignee" defaultMessage={"Consignee"} />
                :{" "}
              </span>
              <span>
                {order?.consignee.name}({order?.consignee.organisationNumber}){" "}
                <br />
                {order?.consignee.address}
              </span>{" "}
            </div>
          </div>
          <div className="middle flex-1 flex flex-col gap-y-2">
            <div className="orderDate">
              <span className="font-bold">
                <FormattedMessage
                  id="orderDate"
                  defaultMessage={"Order Date"}
                />
                :{" "}
              </span>
              <span>{order?.orderDate}</span>
            </div>
            <div className="primaryContact">
              <span className="font-bold">
                <FormattedMessage
                  id="primaryContact"
                  defaultMessage={"Primary Contact"}
                />
                :{" "}
              </span>
              <span>{order?.primaryContact}</span>
            </div>
            <div className="orgId">
              <span className="font-bold">
                <FormattedMessage id="orgId" defaultMessage={"Org Id"} />:{" "}
              </span>
              <span>{order?.orgId}</span>
            </div>
            <div className="email">
              <span className="font-bold">
                <FormattedMessage id="email" defaultMessage={"Email"} />:{" "}
              </span>
              <span>{order?.email}</span>
            </div>
          </div>
          <div className="right flex-1 flex flex-col gap-y-2">
            <div className="tradeType">
              <span className="font-bold">
                <FormattedMessage
                  id="tradeType"
                  defaultMessage={"Trade Type"}
                />
                :{" "}
              </span>
              <span>{order?.tradeType}</span>
            </div>
            <div className="orderType">
              <span className="font-bold">
                <FormattedMessage
                  id="orderType"
                  defaultMessage={"Order Type"}
                />
                :{" "}
              </span>
              <span>{order?.orderType}</span>
            </div>
            <div className="deliveryDate">
              <span className="font-bold">
                <FormattedMessage
                  id="deliveryDate"
                  defaultMessage={"Delivery Date"}
                />
                :{" "}
              </span>
              <span>{order?.deliveryDate}</span>
            </div>
            <div className="paymentTerms flex items-center gap-x-2">
              <span className="font-bold">
                <FormattedMessage
                  id="paymentTerms"
                  defaultMessage={"Payment Terms"}
                />
                :{" "}
              </span>
              <Input
                register={register}
                id={`paymentTerms`}
                name={`paymentTerms`}
                error={errors.paymentTerms?.message || ""}
                classes="px-2 py-2 rounded"
              />
            </div>
            <div className="tradeTerm">
              <span className="font-bold">
                <FormattedMessage
                  id="tradeTerm"
                  defaultMessage={"Trade Term"}
                />
                :{" "}
              </span>
              <span>{order?.tradeTerm}</span>
            </div>
          </div>
        </div>

        <div className="order-line-items">
          <PurchaseOrderDetailForm
            {...{
              control,
              errors,
              initialRows: order?.items?.length || 0,
              register,
              setValue,
              getValues,
              watch,
            }}
          />
        </div>

        <div className="buttons flex items-center justify-end gap-x-2">
          <div className="hidden">
            <PrintPurchaseOrder purchaseOrder={order!} ref={printRef} />
          </div>
          <SubmitBtn
            isSubmitting={isSubmitting}
            text={intl.formatMessage({
              id: "save",
              defaultMessage: "Save",
            })}
            disabled={Object.keys(errors).length > 0}
            classes="w-36"
          />
          <Button
            text={intl.formatMessage({
              id: "downloadPDF",
              defaultMessage: "Download PDF",
            })}
            variant="indigo"
            onClick={() => {
              handlePrint();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PurchaseOrderDetail;
