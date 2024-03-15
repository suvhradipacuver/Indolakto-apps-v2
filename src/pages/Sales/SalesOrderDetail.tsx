import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SalesOrderDetailForm from "../../components/SalesOrderDetailForm/SalesOrderDetailForm";
import TopBar from "../../components/TopBar/TopBar";
import salesOrders from "../../data/salesOrders.json";
import {
  SalesOrderItemObj,
  SalesOrderItemsForm,
  SalesOrderObj,
} from "../../types/interfaces";
import * as Yup from "yup";
import Input from "../../components/FormComponents/Input";
import Button from "../../components/Buttons/Button";
import { FormattedMessage, useIntl } from "react-intl";
import { useReactToPrint } from "react-to-print";
import PrintSalesOrder from "../../components/PrintComponents/PrintSalesOrder";
import SubmitBtn from "../../components/FormComponents/SubmitBtn";
import useToast from "../../hooks/useToast";

const SalesOrderDetail = () => {
  const intl = useIntl();

  const { orderId } = useParams();

  const [order, setOrder] = useState<SalesOrderObj | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { showSuccess } = useToast();

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const schema = Yup.object({
    paymentTerms: Yup.string(),
    items: Yup.array<SalesOrderItemObj>().of(
      Yup.object({
        itemId: Yup.string().required(),
        product: Yup.string().required(),
        modelNo: Yup.string(),
        orgId: Yup.string(),
        description: Yup.string().required(),
        uom: Yup.string().required(),
        quantity: Yup.string(),
        currency: Yup.string(),
        quantityUnitPrice: Yup.string(),
        totalPrice: Yup.string(),
        remarks: Yup.string(),
      })
    ),
  });

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    reset,
    getValues,
    formState: { isValid, errors, isDirty },
  } = useForm<SalesOrderItemsForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      paymentTerms: "",
      items: [],
    },
  });

  const onSubmit = useCallback((data: SalesOrderItemsForm) => {
    showSuccess(
      intl.formatMessage({
        id: "orderSaved",
        defaultMessage: "Order Saved",
      })
    );
  }, []);

  useEffect(() => {
    const order = salesOrders.filter((order) => order.orderId === orderId);

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
          id: "salesOrderId",
          defaultMessage: "Sales Order #",
        })}: ${orderId}`}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="details flex items-start gap-x-4 text-sm mb-12 px-8">
          <div className="left flex-1 flex flex-col gap-y-2">
            <div className="name">
              <span className="font-bold">
                <FormattedMessage
                  id="orderPlacedBy"
                  defaultMessage={"Order Placed By"}
                />
                :{" "}
              </span>
              <span>
                {order?.orderPlacedBy.name}(
                {order?.orderPlacedBy.organisationNumber}) <br />
                {order?.orderPlacedBy.address}
              </span>
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
            <div className="mobileNo">
              <span className="font-bold">
                <FormattedMessage
                  id="mobileNo"
                  defaultMessage={">Mobile No."}
                />
                :{" "}
              </span>
              <span>{order?.mobileNo}</span>
            </div>
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
          </div>
          <div className="right flex-1 flex flex-col gap-y-2">
            <div className="consignedTo">
              <span className="font-bold">
                <FormattedMessage
                  id="consignedTo"
                  defaultMessage={"Consigned To"}
                />
                :{" "}
              </span>
              <span>
                {order?.consignedTo.name}(
                {order?.consignedTo.organisationNumber}) <br />
                {order?.consignedTo.address}
              </span>
            </div>
            <div className="companyContact">
              <span className="font-bold">
                <FormattedMessage
                  id="companyContact"
                  defaultMessage={"Company Contact"}
                />
                :{" "}
              </span>
              <span>{order?.companyContact}</span>
            </div>
            <div className="quoteStatus">
              <span className="font-bold">
                <FormattedMessage
                  id="quoteStatus"
                  defaultMessage={"Quote Status"}
                />
                :{" "}
              </span>
              <span>{order?.quoteStatus}</span>
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
            <div className="salesNoteNo">
              <span className="font-bold">
                <FormattedMessage
                  id="salesNoteNo"
                  defaultMessage={"Sales Note No."}
                />
                :{" "}
              </span>
              <span>{order?.salesNoteNo}</span>
            </div>
            <div className="billTo">
              <span className="font-bold">
                <FormattedMessage id="billTo" defaultMessage={"Bill To"} />:{" "}
              </span>
              <span>{order?.billTo}</span>
            </div>
          </div>
        </div>

        <div className="order-line-items">
          <SalesOrderDetailForm
            {...{
              control,
              getValues,
              errors,
              initialRows: order?.items?.length || 0,
              register,
              setValue,
              watch,
            }}
          />
        </div>

        <div className="buttons flex items-center justify-end gap-x-2">
          <div className="hidden">
            <PrintSalesOrder salesOrder={order!} ref={printRef} />
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

export default SalesOrderDetail;
