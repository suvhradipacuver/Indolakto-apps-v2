import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import draftOrders from "../../data/draftOrders.json";
import OrderDetailForm from "../../components/OrderDetailForm/OrderDetailForm";
import * as Yup from "yup";
import { QuoteOrderItemObj, QuoteOrderObj } from "../../types/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/FormComponents/Input";
import Checkbox from "../../components/FormComponents/Checkbox";
import SubmitBtn from "../../components/FormComponents/SubmitBtn";
import Button from "../../components/Buttons/Button";
import useToast from "../../hooks/useToast";
import { FormattedMessage, useIntl } from "react-intl";
import emailjs from "@emailjs/browser";
import { ALL_ROLES, ALL_STATUSES } from "../../types/constants";
import OrderDetailFormCustomer from "../../components/OrderDetailForm/OrderDetailFormCustomer";
import useAuth from "../../hooks/useAuth";

const schema = Yup.object({
  quoteId: Yup.string(),
  salesOrderId: Yup.string(),
  orderPlacedBy: Yup.string(),
  orgId: Yup.string(),
  consignedTo: Yup.string(),
  email: Yup.string().email(),
  mobileNo: Yup.string(),
  salesRep: Yup.string(),
  billTo: Yup.string(),
  expiresOn: Yup.string(),
  paymentTerms: Yup.string(),
  items: Yup.array<QuoteOrderItemObj>().of(
    Yup.object({
      itemId: Yup.string().required(),
      modelNo: Yup.string(),
      description: Yup.string().required(),
      uom: Yup.string().required(),
      quantity: Yup.string(),
      currency: Yup.string(),
      listUnitPrice: Yup.string(),
      totalPrice: Yup.string(),
      netTotal: Yup.string(),
    })
  ),
  termsAndCondition: Yup.boolean().required(),
  copyAdminInMail: Yup.boolean(),
});

const QuoteDetailCustomer = () => {
  const { quoteId } = useParams();

  const pdfRef = useRef(null);

  const { showSuccess, showError } = useToast();

  const intl = useIntl();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [order, setOrder] = useState<QuoteOrderObj | null>(null);

  const [confirmed, setConfirmed] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    setConfirmed(order?.status === ALL_STATUSES.QUOTE_CONFIRMED);
  }, [order]);

  const {
    handleSubmit,
    control,
    register,
    reset,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<QuoteOrderObj>({
    resolver: yupResolver(schema),
    defaultValues: {
      consignedTo: "",
      billTo: "",
      orderPlacedBy: "",
      quoteDate: "",
      copyAdminInMail: false,
      email: "",
      orgId: "",
      items: [],
      mobileNo: "",
      quoteId: "",
      salesOrderId: "",
      paymentTerms: "",
      salesRep: "",
      termsAndCondition: false,
    },
  });

  const sendMail = () => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        {
          from_name: "Panasonic",
          to_email: watch("email"),
        },
        process.env.REACT_APP_PUBLIC_KEY!
      )
      .then(
        function (response) {
          setIsSubmitting(false);
          showSuccess(
            intl.formatMessage({
              id: "emailHasBeenSent",
              defaultMessage: "Email has been sent",
            })
          );
        },
        function (err) {
          setIsSubmitting(false);

          showError(
            intl.formatMessage({
              id: "unableToSend",
              defaultMessage: "Unable To Send Email",
            })
          );
        }
      )
      .catch((err) => {
        setIsSubmitting(false);

        showError(
          intl.formatMessage({
            id: "unableToSend",
            defaultMessage: "Unable To Send Email",
          })
        );
      });
  };

  const onSubmit = useCallback((data: QuoteOrderObj) => {
    setIsSubmitting(true);

    showSuccess(
      intl.formatMessage({
        id: "quoteSubmitted",
        defaultMessage: "Quote Submitted",
      })
    );
    setIsSubmitting(false);
  }, []);

  useEffect(() => {
    const order = draftOrders.filter((order) => order.quoteId === quoteId);

    if (order) {
      setOrder(order[0]);
    }
  }, [quoteId]);

  useEffect(() => {
    if (order) {
      reset({
        ...order,
        consignedTo: order?.consignedTo.split(",")[1].trim(),
        orderPlacedBy: order?.orderPlacedBy.split(",")[1].trim(),
      });
    }
  }, [order, reset]);

  return (
    <div className="quotes-order-detail page">
      <TopBar
        goBack
        title={intl.formatMessage({
          id: "quote",
          defaultMessage: "Quote",
        })}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="top-form grid grid-cols-3 gap-4 items-start">
          <div className="order-id">
            <span className="font-semibold text-gray-700 text-sm">
              <FormattedMessage id="quoteId" defaultMessage={"Quote #"} />:{" "}
            </span>
            <span>{quoteId}</span>
          </div>

          <Input
            register={register}
            id={`orderPlacedBy`}
            name={`orderPlacedBy`}
            label={intl.formatMessage({
              id: "orderPlacedBy",
              defaultMessage: "Order Placed By",
            })}
            disabled={confirmed}
            error={errors.orderPlacedBy?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`consignedTo`}
            name={`consignedTo`}
            label={intl.formatMessage({
              id: "consignedTo",
              defaultMessage: "Consigned To",
            })}
            disabled={confirmed}
            error={errors.consignedTo?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`orgId`}
            name={`orgId`}
            label={intl.formatMessage({
              id: "orgId",
              defaultMessage: "Org Id",
            })}
            disabled={confirmed}
            error={errors.orgId?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`salesOrderId`}
            name={`salesOrderId`}
            disabled
            label={intl.formatMessage({
              id: "salesOrderId",
              defaultMessage: "Sales Order #",
            })}
            error={errors.salesOrderId?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`mobileNo`}
            name={`mobileNo`}
            label={intl.formatMessage({
              id: "mobileNo",
              defaultMessage: "Mobile No.",
            })}
            disabled={confirmed}
            error={errors.mobileNo?.message || ""}
            classes="px-2 py-2 rounded"
          />

          <Input
            register={register}
            type="email"
            id={`email`}
            name={`email`}
            label={intl.formatMessage({
              id: "email",
              defaultMessage: "Email",
            })}
            disabled={confirmed}
            error={errors.email?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`salesRep`}
            name={`salesRep`}
            label={intl.formatMessage({
              id: "salesRep",
              defaultMessage: "Sales Rep",
            })}
            disabled={confirmed}
            error={errors.salesRep?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`billTo`}
            name={`billTo`}
            label={intl.formatMessage({
              id: "billTo",
              defaultMessage: "Bill To",
            })}
            disabled={confirmed}
            error={errors.billTo?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            type="date"
            id={`expiresOn`}
            name={`expiresOn`}
            label={intl.formatMessage({
              id: "expiresOn",
              defaultMessage: "Expires On",
            })}
            disabled
            error={errors.expiresOn?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Input
            register={register}
            id={`paymentTerms`}
            name={`paymentTerms`}
            label={intl.formatMessage({
              id: "paymentTerms",
              defaultMessage: "Payment Terms",
            })}
            disabled={confirmed}
            error={errors.paymentTerms?.message || ""}
            classes="px-2 py-2 rounded"
          />
        </div>

        <OrderDetailFormCustomer
          {...{
            control,
            errors,
            initialRows: order?.items?.length || 0,
            register,
            setValue,
            watch,
            confirmed,
          }}
        />

        <div className="checkboxes">
          <Checkbox
            register={register}
            id={`termsAndCondition`}
            name={`termsAndCondition`}
            label={intl.formatMessage({
              id: "termsAndCondition",
              defaultMessage: `Terms & Condition`,
            })}
            disabled={confirmed}
            error={errors.termsAndCondition?.message || ""}
            classes="px-2 py-2 rounded"
          />
          <Checkbox
            register={register}
            id={`copyAdminInMail`}
            name={`copyAdminInMail`}
            label={intl.formatMessage({
              id: "copyAdminInMail",
              defaultMessage: `Copy Admin in Mail`,
            })}
            disabled={confirmed}
            error={errors.copyAdminInMail?.message || ""}
            classes="px-2 py-2 rounded"
          />
        </div>

        <div className="buttons flex items-center justify-end gap-x-2">
          {
            <Button
              variant="indigo"
              classes="w-44 py-2.5"
              text={intl.formatMessage({
                id: "emailQuote",
                defaultMessage: "Email Quote",
              })}
              onClick={() => {
                sendMail();
              }}
            />
          }
          {!confirmed && (
            <SubmitBtn
              isSubmitting={isSubmitting}
              text={intl.formatMessage({
                id: "submit",
                defaultMessage: "Submit",
              })}
              disabled={Object.keys(errors).length > 0}
              classes="w-44 py-2.5"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default QuoteDetailCustomer;
