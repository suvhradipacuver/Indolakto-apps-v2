import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import OrderDetailForm from "../../components/OrderDetailForm/OrderDetailForm";
import * as Yup from "yup";
import { QuoteOrderItemObj, QuoteOrderObj } from "../../types/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/FormComponents/Input";
import Checkbox from "../../components/FormComponents/Checkbox";
import SubmitBtn from "../../components/FormComponents/SubmitBtn";
import useToast from "../../hooks/useToast";
import { useIntl } from "react-intl";
import OrderDetailFormCustomer from "../../components/OrderDetailForm/OrderDetailFormCustomer";

const schema = Yup.object({
  orderId: Yup.string(),
  orderPlacedBy: Yup.string().required("This field is required"),
  salesOrderId: Yup.string(),
  consignedTo: Yup.string().required("This field is required"),
  email: Yup.string().email().required("This field is required"),
  mobileNo: Yup.string().required("This field is required"),
  salesRep: Yup.string(),
  billTo: Yup.string().required("This field is required"),
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
    })
  ),
  termsAndCondition: Yup.boolean().required(),
  copyAdminInMail: Yup.boolean(),
});

const AddQuoteCustomer = () => {
  const { quoteId } = useParams();

  const navigate = useNavigate();

  const { showSuccess } = useToast();

  const intl = useIntl();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<QuoteOrderObj>({
    resolver: yupResolver(schema),
    defaultValues: {
      consignedTo:
        "PANASONIC AUSTRALIA PTY. LTD. 1 INNOVATION ROAD MACQUARIE PARK NSW 2113",
      orderPlacedBy:
        "PANASONIC CONSUMER MARKETING ASIA PACIFIC 202 BEDOK SOUTH AVE 1, UNIT NO. 02-01",
      billTo:
        "PANASONIC CONSUMER MARKETING ASIA PACIFIC 202 BEDOK SOUTH AVE 1, UNIT NO. 02-01",
      quoteDate: "",
      quoteId: `PAN_` + Math.floor(Math.random() * 1000).toString(),
      salesOrderId: "",
      copyAdminInMail: false,
      email: "ritesh.a@indolakto.com",
      expiresOn: "",
      orgId: "PLGA",
      items: [
        {
          itemId: "",
          modelNo: "",
          description: "",
          uom: "",
          quantity: "",
          currency: "USD",
          listUnitPrice: "",
        },
      ],
      mobileNo: "00197148819880",
      paymentTerms: "Advance Payment",
      salesRep: "Oliver",
      termsAndCondition: false,
    },
  });

  const onSubmit = useCallback((data: QuoteOrderObj) => {
    showSuccess(
      intl.formatMessage({
        id: "quoteAdded",
        defaultMessage: "Quote has been added",
      })
    );
    navigate("/");
  }, []);

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
          <Input
            register={register}
            id={`quoteId`}
            name={`quoteId`}
            label={intl.formatMessage({
              id: "quoteId",
              defaultMessage: "Quote #",
            })}
            disabled
            error={errors.quoteId?.message || ""}
            classes="px-2 py-2 rounded"
          />

          <Input
            register={register}
            id={`orderPlacedBy`}
            name={`orderPlacedBy`}
            label={intl.formatMessage({
              id: "orderPlacedBy",
              defaultMessage: "Order Placed By",
            })}
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
            error={errors.paymentTerms?.message || ""}
            classes="px-2 py-2 rounded"
          />
        </div>

        <OrderDetailFormCustomer
          {...{
            control,
            errors,
            initialRows: 0,
            register,
            setValue,
            watch,
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
            error={errors.copyAdminInMail?.message || ""}
            classes="px-2 py-2 rounded"
          />
        </div>

        <div className="buttons flex items-center justify-end gap-x-2">
          <SubmitBtn
            isSubmitting={isSubmitting}
            text={intl.formatMessage({
              id: "createQuote",
              defaultMessage: "Create Quote",
            })}
            disabled={Object.keys(errors).length > 0}
            classes="w-44 py-2.5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddQuoteCustomer;
